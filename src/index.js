'use strict'

import Sync from './sync'

/** @jsx Sync.createElement */
function Counter() {
  const [state, setState] = Sync.useState(1)
  return <h1 onClick={() => setState(c => c + 1)}>Count: {state}</h1>
}
const element = <Counter name="foo" />
const container = document.getElementById('root')
Sync.render(element, container)
