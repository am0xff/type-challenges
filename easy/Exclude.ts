type MyExclude<T, U> = T extends U ? never : T;

type T0 = Exclude<"a" | "b" | "c", "a">; // b | c
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // c
type T2 = Exclude<string | number | (() => void), Function>; // string | number
type T3 = MyExclude<"a" | "b" | "c", "a">; // b | c
type T4 = MyExclude<"a" | "b" | "c", "a" | "b">; // c
type T5 = MyExclude<string | number | (() => void), Function>; // string | number
