import { createInitialItemList } from '@/utils/state'
import { createStore } from 'solid-js/store'

const initialItemList = createInitialItemList(25, 30)

export const [itemList, setITemList] = createStore(initialItemList)
