'use strict'

const element = {
  type: 'h1',
  props: {
    title: 'foo',
    children: [
      {
        type: 'TEXT_ELEMENT',
        props: {
          nodeValue: 'Hello World',
          children: [],
        },
      },
    ],
  },
}

function render(element, container) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)
  element.props.children.forEach(child => render(child, dom))

  // Set properties on DOM Element
  const isProperty = key => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  container.appendChild(dom)
}

const Sync = {
  render,
}
const container = document.getElementById('root')

Sync.render(element, container)
