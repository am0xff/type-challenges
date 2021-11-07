interface Todo {
  title: string
  description: string
  completed: boolean
}

// First solution
// type MyExclude<T, U> = T extends U ? never : T;
// type MyOmit<T, K extends keyof T> = {
//   [k in MyExclude<keyof T, K>]: T[k]
// }

// Second solution
type MyOmit<T, K extends keyof T> = {
  [k in keyof T as k extends K ? never : k]: T[k]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>