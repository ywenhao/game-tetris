import { setITemList } from '@/stores/item'
import { produce } from 'solid-js/store'

export function transformItem() {
  setITemList(
    produce((list) => {
      list[0][0] = list[0][0] ? 0 : 1
    })
  )
}

export function speedDownItem() {
  setITemList(
    produce((list) => {
      list[0][0] = list[0][0] ? 0 : 1
    })
  )
}

export function moveLeftItem() {
  console.log('moveLeftItem')
}

export function moveRightItem() {
  console.log('moveRightItem')
}

export function dropItem() {
  console.log('dropItem')
}

function keydownEvent(e: KeyboardEvent) {
  const eventMap = {
    ArrowUp: transformItem,
    ArrowDown: speedDownItem,
    ArrowLeft: moveLeftItem,
    ArrowRight: moveRightItem,
    Space: dropItem,
  }
  eventMap[e.code as keyof typeof eventMap]?.()
}

export function addEvents() {
  document.addEventListener('keydown', keydownEvent)
}

export function removeEvents() {
  document.removeEventListener('keydown', keydownEvent)
}
