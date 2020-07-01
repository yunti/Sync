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
  }
  container.appendChild(dom)
}

const Sync = {
  render,
}
const container = document.getElementById('root')
// const node = document.createElement('h1')
// node['title'] = 'foo'
// const text = document.createTextNode('Hello World')
// // text['nodeValue'] = 'Hello World'
// node.appendChild(text)
// container.appendChild(node)
Sync.render(element, container)
