type MyReturnType<T> = T extends (
  (...args: any) => infer R
) ? R : never; 


type aaa1 = MyReturnType<() => string> // string
type aaa2 = MyReturnType<() => 123> // 123
type aaa3 = MyReturnType<() => ComplexObject> // ComplexObject
type aaa4 = MyReturnType<() => Promise<boolean>> // Promise<boolean>
type aaa5 = MyReturnType<() => () => 'foo'> // () => 'foo'
type aaa6 = MyReturnType<typeof fn> // 1 | 2
type aaa7 = MyReturnType<typeof fn1> // 1 | 2

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}
  
const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2