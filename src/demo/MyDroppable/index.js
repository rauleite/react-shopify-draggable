// @flow
import React, { Component, Fragment } from 'react'
import { withDroppable } from '../../lib'
import { Hello, World } from './etc/Hello'

class MyDroppable extends Component {
  // SSR First: react-shopify-draggable não bloqueia sua aplicação.
  componentDidMount() {
    // sua instância de droppable
    this.droppable = this.props.droppable()

    // https://github.com/Shopify/draggable/tree/master/src/Droppable
    // this.droppable.on('drag:start', this.dragStart)
    // this.droppable.on('drag:move', this.dragMove)
    // this.droppable.on('drag:stop', this.dragStop)

    this.droppable.on('droppable:over', () => console.log('droppable:over'))
    this.droppable.on('droppable:out', () => console.log('droppable:out'))
  }

  componentWillUnmount() {
    // opcional lidar com destroy, uma vez que React Shopify droppable já destruirá
    // quando MyDroppable for Unmounted
    this.droppable.destroy()
  }

  dragStart() {
    console.log('drag:start - with droppable')
  }
  dragMove() {
    console.log('drag:move - with droppable')
  }
  dragStop() {
    console.log('drag:stop - with droppable')
  }

  render() {
    return (
      <Fragment>
        <ul id="dropzone">
          <Hello />
          <World />
        </ul>
      </Fragment>
    )
  }
}

// containers: HTMLElement[]|NodeList|HTMLElement
const selector = function() {
  return document.querySelector('ul')
}
// options: https://github.com/Shopify/draggable/tree/master/src/Draggable#options
const options = { draggable: 'li', droppable: '#dropzone' }

// withDroppable(Component, container, options)
export default withDroppable(MyDroppable, selector, options)
