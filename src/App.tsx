import { type Component, For, onMount, onCleanup } from 'solid-js'
import styles from './App.module.scss'
import ShowBoxRow from '@/components/ShowBoxRow'
import { itemList } from './stores/item'
import { addEvents, removeEvents } from './utils/events'

const App: Component = () => {
  onMount(() => {
    addEvents()
  })

  onCleanup(() => {
    removeEvents()
  })
  return (
    <div class={styles.gameBox}>
      <div class="showBox">
        <div class="showBox__title">俄罗斯方块</div>
        <div class="showBox__content">
          <For each={itemList}>{(item) => <ShowBoxRow col={item} />}</For>
        </div>
      </div>
      <div class="doBox">
        {/* <button onClick={handleClick}>click me</button> */}
      </div>
    </div>
  )
}

export default App
