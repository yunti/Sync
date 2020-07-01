'use strict'

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object' ? child : createTextElement(child),
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
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
  createElement,
  render,
}

const textElement = Sync.createElement('TEXT_ELEMENT', {
  nodeValue: 'Hello World',
})
const element = Sync.createElement('h1', { title: 'foo' }, textElement)
const container = document.getElementById('root')

Sync.render(element, container)
