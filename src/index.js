'use strict'

import Sync from './sync'

/** @jsx Sync.createElement */
function App(props) {
  return <h1>Hi {props.name}</h1>
}
const element = <App name="foo" />
const container = document.getElementById('root')
Sync.render(element, container)
