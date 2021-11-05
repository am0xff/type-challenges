// Implement the generic version of Array.push

type Push<T extends any[], U> = [...T, U];

type Result1 = Push<[1, 2], '3'> // [1, 2, '3']
type Result2 = Push<[], 1> // [1]
type Resilt3 = Push<['1', 2, '3'], boolean> // ['1', 2, '3', boolean]

