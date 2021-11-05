// Implement the built-in Parameters generic without using it.

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : [];

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}

type Result1 = MyParameters<typeof foo> // [string, number]
type Result2 = MyParameters<typeof bar> // [boolean, {a: 'A'}]
type Result3 = MyParameters<typeof baz> // [];