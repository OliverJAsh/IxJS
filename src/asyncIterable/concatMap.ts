import { AsyncIteratorClass, AsyncIterator } from '../asyncIterator'
import { AsyncIterable, isAsyncIterable, AsyncIterableClass } from '../asyncIterable'
import { $$asyncIterator } from '../symbol'
import { isIterable } from '../iterable'
import { RecursiveOrElement, Recursive } from './recursiveType'
import { AsyncFromIterator } from './from'

export class AsyncConcatMapIterator<T, I, R> extends AsyncIteratorClass<R> {
  protected i = 0
  protected iterators: AsyncIterator<RecursiveOrElement<I>>[] = []
  protected outerValue: T | undefined
  protected it: AsyncIterator<T>
  protected resFn?: (outerValue: T, innerValue: I) => R | Promise<R>
  protected recursive: boolean

  constructor(it: AsyncIterable<T>, fn: (value: T, index?: number) => Recursive<R | Promise<R>>, recursive?: boolean)
  constructor(it: AsyncIterable<T>, fn: (value: T, index?: number) => Recursive<I>, resFn: (outerValue: T, innerValue: I) => R | Promise<R>, recursive?: boolean)

  constructor(it: AsyncIterable<T>, protected fn: (value: T, index?: number) => Recursive<I>, resFn?: ((outerValue: T, innerValue: I) => R | Promise<R>) | boolean, recursive?: boolean) {
    super()
    this.it = it[$$asyncIterator]()
    if (resFn !== undefined) {
      if (typeof resFn === 'boolean') {
        this.recursive = resFn
      } else {
        this.resFn = resFn
      }
    }
    if (recursive !== undefined) {
      this.recursive = recursive
    }
    if (this.recursive === undefined) {
      this.recursive = true
    }
  }

  protected _next() {
    const self = this
    function process(_value: RecursiveOrElement<I>) {
      if (self.recursive && isAsyncIterable(_value)) {
        self.iterators.push(_value[$$asyncIterator]())
        recurse()
      } else if (self.recursive && isIterable(_value)) {
        self.iterators.push(new AsyncFromIterator(<{ [Symbol.iterator](): Iterator<I> }>_value))
        recurse()
      } else if (_value instanceof Promise) {
        (<Promise<any>>_value).then(process).catch(e => {
          self.settleThrow(e)
        })
      } else {
        try {
          const value = self.resFn ? self.resFn(<T>self.outerValue, <I>_value) : <R><any>_value
          if (value instanceof Promise) {
            value.then(value => self.settleNext(value)).catch(e => {
              self.settleThrow(e)
            })
          } else {
            self.settleNext(value)
          }
        } catch (e) {
          self.settleThrow(e)
        }
      }
    }
    function processIterator(it: Recursive<I>) {
      if (it instanceof Promise) {
        it.then(processIterator)
      } else {
        if (isAsyncIterable(it)) {
          self.iterators.push(it[$$asyncIterator]())
        } else {
          self.iterators.push(new AsyncFromIterator(<{ [Symbol.iterator](): Iterator<I> }>it))
        }
        recurse()
      }
    }
    function recurse() {
      if (self.iterators.length === 0) {
        self.it.next().then(next => {
          if (next.done) {
            self.settleReturn()
          } else {
            const it = self.fn(next.value, self.i++)
            processIterator(it)
          }
        })
      } else {
        const lastR = self.iterators[self.iterators.length - 1]
        lastR.next().then(next => {
          if (next.done) {
            self.iterators.pop()
            recurse()
          } else {
            process(next.value)
          }
        })
      }
    }
    recurse()
  }
}

export class AsyncConcatMapIterable<T, I, R> extends AsyncIterableClass<R> {
  constructor(source: AsyncIterable<T>, fn: (value: T, index?: number) => Recursive<I>, resFn: (outerValue: T, innerValue: I) => R | Promise<R>, recursive?: boolean)
  constructor(source: AsyncIterable<T>, fn: (value: T, index?: number) => Recursive<R>, recursive?: boolean)

  constructor(source: AsyncIterable<T>, fn: (value: T, index?: number) => Recursive<I>, resFn?: ((outerValue: T, innerValue: I) => R | Promise<R>) | boolean, recursive?: boolean) {
    super(new AsyncConcatMapIterator(source, fn, <(outerValue: T, innerValue: I) => R>resFn, recursive))
  }
}

export function concatMap<T, R>(fn: (value: T, index?: number) => Recursive<R>, recursive?: boolean): AsyncConcatMapIterable<T, R, R>
export function concatMap<T, I, R>(fn: (value: T, index?: number) => Recursive<I>, resFn: (outerValue: T, innerValue: I) => R | Promise<R>, recursive?: boolean): AsyncConcatMapIterable<T, I, R>

export function concatMap<T, I, R>(fn: (value: T, index?: number) => Recursive<I>, resFn?: ((outerValue: T, innerValue: I) => R | Promise<R>) | boolean, recursive?: boolean) {
  return new AsyncConcatMapIterable<T, I, R>(this, fn, <(outerValue: T, innerValue: I) => R>resFn, recursive)
}
