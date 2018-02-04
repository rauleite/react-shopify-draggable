/* @flows weak false */
import React, { Component, Children } from 'react'
import { isServer, userAgent } from '../../../../utils/helpers'
const Draggable = !isServer ? require('@shopify/draggable').Draggable : null

export default class DraggableContainer extends Component {
  constructor(props) {
    super(props)
    this.onDragStart = this.onDragStart.bind(this)
  }
  state = {
    styles: {
      touchAction:
        userAgent.has('os', 'name', 'Android') &&
        userAgent.has('browser', 'name', 'Chrome')
          ? 'none'
          : null
    }
  }

  onDragStart() {
    console.log('drag:stsart')
  }

  componentDidMount() {
    this.draggable = new Draggable(document.querySelector('ul'), { draggable: 'li' })

    this.draggable.on('drag:start', this.onDragStart)
    // this.draggable.off('drag:start', this.onDragStart)
    // this.draggable.on('drag:start', () => console.log('drag:start'))
    // this.draggable.on('drag:move', () => console.log('drag:move'))
    // this.draggable.on('drag:stop', () => console.log('drag:stop'))
    // }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.draggable.destroy()
    delete this.draggable
  }
  render() {
    return (
      <ul>
        <li>oi</li>
      </ul>
    )
  }
}

// <div ref={el => (this.el = el)}>
//         <div className="draggable-source">oi</div>
//       </div>