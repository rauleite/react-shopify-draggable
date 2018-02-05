// @flow
// MyContainer.js
import React, { Component, Fragment } from 'react'
import { withDraggable } from '../lib'

const Hello = () => {
  return <li>Hello</li>
}

const World = () => (
  <Fragment>
    <li>World</li>
    <li>Drag-me</li>
  </Fragment>
)

class MyContainerWithDraggable extends Component {
  // SSR First: react-shopify-draggable não bloqueia sua aplicação.
  componentDidMount() {
    // sua instância de draggable
    this.draggable = this.props.draggable()

    // https://github.com/Shopify/draggable/tree/master/src/Draggable#api
    this.draggable.on('drag:start', this.dragStart)
    this.draggable.on('drag:move', this.dragMove)
    this.draggable.on('drag:stop', this.dragStop)
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
        <World />
      </ul>
    )
  }
}
// withDraggable(Component, container, options)
// containers: HTMLElement[]|NodeList|HTMLElement
// options: https://github.com/Shopify/draggable/tree/master/src/Draggable#options
const MyContainer = withDraggable(
  MyContainerWithDraggable,
  function() {
    return document.querySelector('ul')
  },
  { draggable: 'li' }
)

export default MyContainer

// export default MyContainer

// state = {
//   styles: {
//     touchAction:
//       userAgent.has('os', 'name', 'Android') &&
//       userAgent.has('browser', 'name', 'Chrome')
//         ? 'none'
//         : null
//   }
// }
