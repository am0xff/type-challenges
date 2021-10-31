const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type Length<T extends readonly any[]> = T['length'];

type teslaLength = Length<typeof tesla>  // expected 4
type spaceXLength = Length<typeof spaceX> // expected 5
