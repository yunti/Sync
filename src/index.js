'use strict'

const element = {
  type: 'h1',
  props: {
    title: 'foo',
    children: ['Hello World'],
  },
}

function render(element, container) {
  const dom =
    typeof element === 'string'
      ? document.createTextNode(element)
      : document.createElement(element.type)
  if (element.props) {
    element.props.children.forEach(child => render(child, dom))

    // Set properties on DOM Element
    const isProperty = key => key !== 'children'
    Object.keys(element.props)
      .filter(isProperty)
      .forEach(name => {
        dom[name] = element.props[name]
      })
  }

  container.appendChild(dom)
}

const Sync = {
  render,
}
const container = document.getElementById('root')

Sync.render(element, container)
