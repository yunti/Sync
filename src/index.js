'use strict'

const container = document.getElementById('root')
const node = document.createElement('h1')
node['title'] = 'foo'
const text = document.createTextNode('')
text['nodeValue'] = 'Hello World'
node.appendChild(text)
container.appendChild(node)
