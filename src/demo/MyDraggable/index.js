// @flow
import React, { Component, Fragment } from 'react'
import { withDraggable } from '../../lib'
import { Hello, Drag } from './etc/Hello'
class MyDraggable extends Component {
  // SSR First: react-shopify-draggable não bloqueia sua aplicação.
  componentDidMount() {
    // sua instância de draggable
    this.draggable = this.props.draggable()

    // https://github.com/Shopify/draggable/tree/master/src/Draggable#api
    this.draggable.on('drag:start', this.dragStart)
    this.draggable.on('drag:move', this.dragMove)
    this.draggable.on('drag:stop', this.dragStop)
  }

  componentWillUnmount() {
    // opcional lidar com destroy, uma vez que React Shopify Draggable já destruirá
    // quando MyDraggable for Unmounted
    this.draggable.destroy()
  }

  dragStart() {
    console.log('drag:start')
  }
  dragMove() {
    console.log('drag:move')
  }
  dragStop() {
    console.log('drag:stop')
  }

  render() {
    return (
      <ul>
        <Hello />
        <Drag />
      </ul>
    )
  }
}

// containers: HTMLElement[]|NodeList|HTMLElement
const selector = function() {
  return document.querySelector('ul')
}
// options: https://github.com/Shopify/draggable/tree/master/src/Draggable#options
const options = { draggable: 'li' }

// withDraggable(Component, container, options)
export default withDraggable(MyDraggable, selector, options)
