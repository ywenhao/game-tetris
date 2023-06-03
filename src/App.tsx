import { type Component, For } from 'solid-js'
import { produce } from 'solid-js/store'

import styles from './App.module.scss'
import ShowBoxRow from '@/components/ShowBoxRow'
import { itemList, setITemList } from './stores/item'

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    setITemList(produce((list) => (list[0][0] = list[0][0] ? 0 : 1)))
  }
})

const App: Component = () => {
  const handleClick = () => {
    // setITemList(produce((list) => (list[0][0] = list[0][0] ? 0 : 1)))
  }
  return (
    <div class={styles.gameBox}>
      <div class="showBox">
        <div class="showBox__title">俄罗斯方块</div>
        <div class="showBox__content">
          <For each={itemList}>{(item) => <ShowBoxRow col={item} />}</For>
        </div>
      </div>
      <div class="doBox">
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  )
}

export default App
