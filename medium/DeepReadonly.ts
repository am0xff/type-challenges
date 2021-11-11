type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
    }
  }
}

type DeepReadonly<T> = {
  readonly [P in keyof T]:
    T[P] extends Function ? T[P] :
    T[P] extends object ? DeepReadonly<T[P]> :
    T[P];
};

type test = DeepReadonly<X> // should be same as `Expected`