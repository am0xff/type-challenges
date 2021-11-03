// If we have a type which is wrapped type like Promise.
// How we can get a type which is inside the wrapped type?
// For example if we have Promise<ExampleType> how to get ExampleType?

type Awaited<T> = T extends Promise<infer R> ? R : never;

type X = Promise<string>
type Y = Promise<{ field: number }>

type aaa = Awaited<X>; // string
type bbb = Awaited<Y>; // { field: number }
