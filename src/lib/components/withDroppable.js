/* @flow  */
import * as React from 'react'
import { isServer } from './utils'
const Droppable = !isServer ? require('@shopify/draggable').Droppable : null

type InnerProps = {
  // draggable: Draggable,
  droppable: Droppable,
  children: React.Node
}

export default function withDroppable(
  InnerComponent: React.ComponentType<InnerProps>,
  select: () => HTMLElement,
  options: DroppableOptionsShopify
): React.ComponentType {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.droppableInstance = this.droppableInstance.bind(this)
    }
    // Instancia a primeira vez que um filho precisa
    // ComponentDidMount é o local correto, para SSR
    droppableInstance() {
      if (isServer) {
        console.error(
          'Chame esta function prop pelo client side. O ideal é dentro do ComponentDidMount'
        )
      }
      if (this.droppable) {
        console.warn(
          // 'Já estava instanciado, usando a mesma ao invés de criar nova instância'
          '[destroy() e re-instancia]'
        )
        this.droppable.destroy()
        // return this.droppable
      }
      this.droppable = new Droppable(select(), options)
      return this.droppable
    }

    componentDidmount() {}
    componentWillUpdate() {}
    componentWillUnmount() {
      this.droppable.destroy()
    }

    // Compartilha instancia com filho
    render() {
      return <InnerComponent droppable={this.droppableInstance} />
    }
  }
}
