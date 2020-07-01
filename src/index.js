'use strict'

import Sync from './sync'

/** @jsx Sync.createElement */
const element = <h1 title="foo">Hello World</h1>

const container = document.getElementById('root')
Sync.render(element, container)
