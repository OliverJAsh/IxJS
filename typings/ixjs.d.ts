// Generated by typings
// Source: dist/cjs/asyncIterable.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
import { AsyncIterator } from '~@christyharagan/ixjs/dist/cjs/asyncIterator';
export type AsyncIterable<T> = {
    [Symbol.asyncIterator](): AsyncIterator<T>;
} | {
    ['@@asyncIterator'](): AsyncIterator<T>;
} | AsyncIterableClass<T>;
export class AsyncIterableClass<T> {
    protected source: AsyncIterable<T> | AsyncIterator<T>;
    constructor(source: AsyncIterable<T> | AsyncIterator<T>);
    forEachAsync(fn: (element: T, index?: number) => void): Promise<void>;
}
export function isAsyncIterable(x: any): x is AsyncIterable<any>;
}
declare module '@christyharagan/ixjs/dist/cjs/asyncIterable' {
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterable';
}

// Generated by typings
// Source: dist/cjs/asyncIterator.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/asyncIterator' {
export interface AsyncIterator<T> {
    next(value?: T): Promise<IteratorResult<T>>;
    throw?(error: any): Promise<IteratorResult<T>>;
    return?(value?: T): Promise<IteratorResult<T>>;
}
export abstract class AsyncIteratorClass<T> implements AsyncIterator<T> {
    private queue;
    private current;
    private enqueue(type, value?);
    next(value?: T): Promise<IteratorResult<T>>;
    throw(error: any): Promise<IteratorResult<T>>;
    return(value?: T): Promise<IteratorResult<T>>;
    protected abstract _next(value?: T): void;
    private resume();
    protected settleThrow(error: any): void;
    protected settleReturn(value?: T): void;
    private settle(type, valueOrError);
    protected settleNext(value: T): void;
}
}
declare module '@christyharagan/ixjs/dist/cjs/asyncIterator' {
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterator';
}

// Generated by typings
// Source: dist/cjs/iterable.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/iterable' {
export class IterableClass<T> {
    protected source: {
        [Symbol.iterator](): Iterator<T>;
    } | Iterator<T>;
    constructor(source: {
        [Symbol.iterator](): Iterator<T>;
    } | Iterator<T>);
    forEach(fn: (element: T, index?: number) => void): void;
}
export function isIterable(x: any): x is {
    [Symbol.iterator](): Iterator<any>;
};
}
declare module '@christyharagan/ixjs/dist/cjs/iterable' {
export * from '~@christyharagan/ixjs/dist/cjs/iterable';
}

// Generated by typings
// Source: dist/cjs/iterator.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/iterator' {
export abstract class IteratorClass<T> {
    abstract next(): IteratorResult<T>;
    protected settleNext(value: T): IteratorResult<T>;
    protected settleReturn(value?: T): IteratorResult<T>;
}
}
declare module '@christyharagan/ixjs/dist/cjs/iterator' {
export * from '~@christyharagan/ixjs/dist/cjs/iterator';
}

// Generated by typings
// Source: dist/cjs/asyncIterable/recursiveType.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/asyncIterable/recursiveType' {
import { AsyncIterator } from '~@christyharagan/ixjs/dist/cjs/asyncIterator';
import { AsyncIterableClass } from '~@christyharagan/ixjs/dist/cjs/asyncIterable';
import { IterableClass } from '~@christyharagan/ixjs/dist/cjs/iterable';
export type RecursiveOrElement<T> = Recursive<T> | Promise<T> | T;
export type ImmediateRecursive<T> = RecursiveNativeIterable<T> | RecursiveSyntheticIterable<T> | RecursiveIterableClass<T> | RecursiveAsyncSyntheticIterable<T> | RecursiveAsyncIterableClass<T>;
export type Recursive<T> = ImmediateRecursive<T> | Promise<ImmediateRecursive<T>>;
export interface RecursiveAsyncNativeIterable<T> {
    [Symbol.asyncIterator](): AsyncIterator<RecursiveOrElement<T>>;
}
export interface RecursiveAsyncSyntheticIterable<T> {
    ['@@asyncIterator'](): AsyncIterator<RecursiveOrElement<T>>;
}
export class RecursiveAsyncIterableClass<T> extends AsyncIterableClass<T> {
}
export interface RecursiveNativeIterable<T> {
    [Symbol.iterator](): Iterator<RecursiveOrElement<T>>;
}
export interface RecursiveSyntheticIterable<T> {
    ['$$iterator'](): Iterator<RecursiveOrElement<T>>;
}
export class RecursiveIterableClass<T> extends IterableClass<T> {
}
}
declare module '@christyharagan/ixjs/dist/cjs/asyncIterable/recursiveType' {
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterable/recursiveType';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/concat.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concat' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        concat<S>(...iterables: ({
            [Symbol.iterator](): Iterator<T>;
        } | AsyncIterable<T>)[]): AsyncIterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/concat' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concat';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/concatAll.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concatAll' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        concatAll(): AsyncIterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/concatAll' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concatAll';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/concatMap.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concatMap' {
import { Recursive } from '~@christyharagan/ixjs/dist/cjs/asyncIterable/recursiveType';
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        concatMap<R>(fn: (value: T, index?: number) => Recursive<R>, recursive?: boolean): AsyncIterableClass<R>;
        concatMap<I, R>(fn: (value: T, index?: number) => Recursive<I>, resFn?: (outerValue: T, innerValue: I) => R | Promise<R>, recursive?: boolean): AsyncIterableClass<R>;
    }
}
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/expand.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/expand' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        expand(project: (value: T, index?: number) => AsyncIterable<T> | {
            [Symbol.iterator](): Iterator<T>;
        } | Promise<AsyncIterable<T> | {
            [Symbol.iterator](): Iterator<T>;
        }>): AsyncIterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/expand' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/expand';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/filter.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/filter' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        filter(fn: (value: T, index: number) => boolean | Promise<boolean>): AsyncIterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/filter' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/filter';
}

// Generated by typings
// Source: dist/cjs/asyncIterable/from.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/asyncIterable/from' {
import { AsyncIteratorClass, AsyncIterator } from '~@christyharagan/ixjs/dist/cjs/asyncIterator';
import { AsyncIterableClass, AsyncIterable } from '~@christyharagan/ixjs/dist/cjs/asyncIterable';
export type Collection<T> = Iterator<T | Promise<T>> | {
    [Symbol.iterator](): Iterator<T | Promise<T>>;
} | AsyncIterable<T | Promise<T>> | Promise<Iterator<T | Promise<T>> | {
    [Symbol.iterator](): Iterator<T | Promise<T>>;
} | AsyncIterable<T | Promise<T>>>;
export class AsyncFromIterator<T> extends AsyncIteratorClass<T> {
    protected isAsync: Promise<boolean>;
    protected it: Iterator<T | Promise<T>>;
    protected ait: AsyncIterator<T | Promise<T>>;
    constructor(collection: Collection<T>);
    protected _next(): void;
}
export class AsyncFromIterable<T> extends AsyncIterableClass<T> {
    constructor(syncSource: Collection<T>);
}
export function from<T>(syncSource: Collection<T>): AsyncFromIterable<T>;
}
declare module '@christyharagan/ixjs/dist/cjs/asyncIterable/from' {
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterable/from';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/from.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/from' {
import { from as staticFrom } from '~@christyharagan/ixjs/dist/cjs/asyncIterable/from';
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    namespace AsyncIterableClass {
        let from: typeof staticFrom;
    }
}
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/map.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/map' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        map<U>(fn: (value: T, index?: number) => U | Promise<U>): AsyncIterableClass<U>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/map' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/map';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/join.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/join' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        join<U>(b: {
            [Symbol.iterator](): Iterator<U>;
        } | AsyncIterable<U>): AsyncIterableClass<[T, U]>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/join' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/join';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/reduce.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/reduce' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        reduce<R>(accumulator: (acc: R | undefined, value: T) => R | Promise<R>, seed?: R | Promise<R>): Promise<R>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/reduce' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/reduce';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/toArray.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/toArray' {
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    interface AsyncIterableClass<T> {
        toArray(): Promise<T[]>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/asyncIterable/toArray' {
export * from '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/toArray';
}

// Generated by typings
// Source: dist/cjs/asyncIterable/range.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/asyncIterable/range' {
import { AsyncIteratorClass } from '~@christyharagan/ixjs/dist/cjs/asyncIterator';
import { AsyncIterableClass } from '~@christyharagan/ixjs/dist/cjs/asyncIterable';
export class AsyncRangeIterator extends AsyncIteratorClass<number> {
    protected start: Promise<number>;
    protected i: number;
    protected end: number;
    constructor(start: number | Promise<number>, end: number | Promise<number>);
    protected _next(): void;
}
export class AsyncRangeIterable extends AsyncIterableClass<number> {
    constructor(start: number | Promise<number>, end: number | Promise<number>);
}
export function range(start: number | Promise<number>, end: number | Promise<number>): AsyncRangeIterable;
}
declare module '@christyharagan/ixjs/dist/cjs/asyncIterable/range' {
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterable/range';
}

// Generated by typings
// Source: dist/cjs/add/asyncIterable/range.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/range' {
import { range as staticRange } from '~@christyharagan/ixjs/dist/cjs/asyncIterable/range';
module '~@christyharagan/ixjs/dist/cjs/asyncIterable' {
    namespace AsyncIterableClass {
        let range: typeof staticRange;
    }
}
}

// Generated by typings
// Source: dist/cjs/add/iterable/concat.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/concat' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        concat<S>(...iterables: {
            [Symbol.iterator](): Iterator<T>;
        }[]): IterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/concat' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/concat';
}

// Generated by typings
// Source: dist/cjs/add/iterable/concatAll.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/concatAll' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        concatAll<U>(): IterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/concatAll' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/concatAll';
}

// Generated by typings
// Source: dist/cjs/iterable/recursiveType.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/iterable/recursiveType' {
import { IterableClass } from '~@christyharagan/ixjs/dist/cjs/iterable';
export type RecursiveOrElement<T> = T | Recursive<T>;
export type Recursive<T> = RecursiveNativeIterable<T> | RecursiveSyntheticIterable<T> | RecursiveIterableClass<T>;
export interface RecursiveNativeIterable<T> {
    [Symbol.iterator](): Iterator<RecursiveOrElement<T>>;
}
export interface RecursiveSyntheticIterable<T> {
    ['$$iterator'](): Iterator<RecursiveOrElement<T>>;
}
export class RecursiveIterableClass<T> extends IterableClass<T> {
}
}
declare module '@christyharagan/ixjs/dist/cjs/iterable/recursiveType' {
export * from '~@christyharagan/ixjs/dist/cjs/iterable/recursiveType';
}

// Generated by typings
// Source: dist/cjs/add/iterable/concatMap.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/concatMap' {
import { Recursive } from '~@christyharagan/ixjs/dist/cjs/iterable/recursiveType';
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        concatMap<R>(fn: (value: T, index?: number) => Recursive<R>, recursive?: boolean): IterableClass<R>;
        concatMap<I, R>(fn: (value: T, index?: number) => Recursive<I>, resFn: (outerValue: T, innerValue: I) => R, recursive?: boolean): IterableClass<R>;
    }
}
}

// Generated by typings
// Source: dist/cjs/add/iterable/expand.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/expand' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        expand(project: (value: T, index?: number) => {
            [Symbol.iterator](): Iterator<T>;
        }): IterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/expand' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/expand';
}

// Generated by typings
// Source: dist/cjs/add/iterable/filter.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/filter' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        filter(fn: (value: T, index: number) => boolean): IterableClass<T>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/filter' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/filter';
}

// Generated by typings
// Source: dist/cjs/add/iterable/map.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/map' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        map<U>(fn: (value: T, index?: number) => U): IterableClass<U>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/map' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/map';
}

// Generated by typings
// Source: dist/cjs/add/iterable/join.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/join' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        join<U>(b: {
            [Symbol.iterator](): Iterator<U>;
        }): IterableClass<[T, U]>;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/join' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/join';
}

// Generated by typings
// Source: dist/cjs/add/iterable/reduce.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/reduce' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        reduce<R>(accumulator: (acc: R | undefined, value: T) => R, seed?: R): R;
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/reduce' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/reduce';
}

// Generated by typings
// Source: dist/cjs/add/iterable/toArray.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/toArray' {
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    interface IterableClass<T> {
        toArray(): T[];
    }
}
export {};
}
declare module '@christyharagan/ixjs/dist/cjs/add/iterable/toArray' {
export * from '~@christyharagan/ixjs/dist/cjs/add/iterable/toArray';
}

// Generated by typings
// Source: dist/cjs/iterable/range.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/iterable/range' {
import { IteratorClass } from '~@christyharagan/ixjs/dist/cjs/iterator';
import { IterableClass } from '~@christyharagan/ixjs/dist/cjs/iterable';
export class RangeIterator extends IteratorClass<number> {
    protected end: number;
    protected i: number;
    constructor(start: number, end: number);
    next(): IteratorResult<number>;
}
export class RangeIterable extends IterableClass<number> {
    constructor(start: number, end: number);
}
export function range(start: number, end: number): RangeIterable;
}
declare module '@christyharagan/ixjs/dist/cjs/iterable/range' {
export * from '~@christyharagan/ixjs/dist/cjs/iterable/range';
}

// Generated by typings
// Source: dist/cjs/add/iterable/range.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/add/iterable/range' {
import { range as staticRange } from '~@christyharagan/ixjs/dist/cjs/iterable/range';
module '~@christyharagan/ixjs/dist/cjs/iterable' {
    namespace IterableClass {
        let range: typeof staticRange;
    }
}
}

// Generated by typings
// Source: dist/cjs/index.d.ts
declare module '~@christyharagan/ixjs/dist/cjs/index' {
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterable';
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterator';
export * from '~@christyharagan/ixjs/dist/cjs/iterable';
export * from '~@christyharagan/ixjs/dist/cjs/iterator';
export * from '~@christyharagan/ixjs/dist/cjs/asyncIterable/recursiveType';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concat';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concatAll';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/concatMap';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/expand';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/filter';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/from';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/map';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/join';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/reduce';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/toArray';
import '~@christyharagan/ixjs/dist/cjs/add/asyncIterable/range';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/concat';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/concatAll';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/concatMap';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/expand';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/filter';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/map';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/join';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/reduce';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/toArray';
import '~@christyharagan/ixjs/dist/cjs/add/iterable/range';
}
declare module '@christyharagan/ixjs/dist/cjs/index' {
export * from '~@christyharagan/ixjs/dist/cjs/index';
}
declare module '@christyharagan/ixjs' {
export * from '~@christyharagan/ixjs/dist/cjs/index';
}
