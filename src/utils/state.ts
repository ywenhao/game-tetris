import type { GameItem } from 'src/types'

export const createInitialItemList = (x: number, y: number) =>
  Array(y)
    .fill(0)
    .map(() => Array(x).fill(0)) as GameItem[][]
