import { setITemList } from '@/stores/item'
import { produce } from 'solid-js/store'

export function transformItem() {
  setITemList(
    produce((list) => {
      list[0][0] = list[0][0] ? 0 : 1
    })
  )
}

function keydownEvent(e: KeyboardEvent) {
  if (e.key === 'ArrowUp') {
    transformItem()
  }
}

export function addEvents() {
  document.addEventListener('keydown', keydownEvent)
}

export function removeEvents() {
  document.removeEventListener('keydown', keydownEvent)
}
