import { IterableClass } from '../../iterable'
import { expand } from '../../Iterable/expand'

IterableClass.prototype.expand = expand

declare module '../../iterable' {
  interface IterableClass<T> {
    expand(project: (value: T, index?: number) => { [Symbol.iterator](): Iterator<T> }): IterableClass<T>
  }
}