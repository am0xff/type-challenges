type TupleToUnion<T extends any[]> = T[number];

type Test1 = TupleToUnion<[123, '456', true]> // 123 | '456' | true
type Test2 = TupleToUnion<[123]> // 123