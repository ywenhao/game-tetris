import { createStore } from 'solid-js/store'
import type { GameItem } from '@/types'

export const createInitialItemList = (x: number, y: number) =>
  Array(y)
    .fill(0)
    .map(() => Array(x).fill(0)) as GameItem[][]

const initialItemList = createInitialItemList(25, 30)

export const [itemList, setITemList] = createStore(initialItemList)
