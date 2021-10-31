type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type FirstOfArray<T extends any[]> = T extends [] ? T[0] : never;

type head1 = FirstOfArray<arr1> // expected to be 'a'
type head2 = FirstOfArray<arr2> // expected to be 3
type head3 = FirstOfArray<[]> // expected to be never
