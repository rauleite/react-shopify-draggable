import React, { Component, Fragment } from 'react'
import { withDraggable } from '../lib'
// import withDraggable from 'react-shopify-draggable'

const Hello = () => <li>Hello</li>

const World = () => (
  <Fragment>
    <li>World</li>
    <li>!!!!!</li>
  </Fragment>
)

class MyContainer extends Component {
  // SSR First
  componentDidMount() {
    console.log('withDraggable: ', withDraggable)
    console.log('#My componentDidMount: ')
    this.draggable = this.props.draggable()

    this.draggable.on('drag:start', this.dragStart)
    this.draggable.on('drag:move', this.dragMove)
    this.draggable.on('drag:stop', this.dragStop)
  }

  dragStart() {
    console.log('drag:start')
  }
  dragMove() {
    // console.log('drag:move')
  }
  dragStop() {
    // console.log('drag:stop')
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
// Check doc reference: https://github.com/Shopify/draggable/tree/master/src
export default withDraggable(
  MyContainer,
  // Cuidado para não usar arrow function (que mantém contexto)
  function() {
    return document.querySelector('ul')
  },
  { draggable: 'li' }
)

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
