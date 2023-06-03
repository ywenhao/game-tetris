import { For, type Component } from 'solid-js'
import type { GameItem } from 'src/types'

const ShowBoxRow: Component<{ col: GameItem[] }> = (props) => (
  <div class="showBox__row">
    <For each={props.col}>
      {(item) => <div class={item ? `active gameItem` : `gameItem`} />}
    </For>
  </div>
)

export default ShowBoxRow
