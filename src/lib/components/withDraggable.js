/* @flow  */
import * as React from 'react'
import { isServer } from './utils'

const Draggable = !isServer ? require('@shopify/draggable').Draggable : null

type InnerProps = {
  draggable: Draggable,
  children: React.Node
}

export default function withDraggable(
  InnerComponent: React.ComponentType<InnerProps>,
  select: () => HTMLElement,
  options: DraggableOptionsShopify
): React.ComponentType {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.draggableInstance = this.draggableInstance.bind(this)
    }
    // Instancia a primeira vez que um filho precisa
    // ComponentDidMount é o local correto, para SSR
    draggableInstance() {
      if (isServer) {
        console.error(
          'Chame esta function prop pelo client side. O ideal é dentro do ComponentDidMount'
        )
      }
      if (this.draggable) {
        console.warn(
          // 'Já estava instanciado, usando a mesma ao invés de criar nova instância'
          '[destroy() e re-instancia]'
        )
        this.draggable.destroy()
        // return this.draggable
      }
      this.draggable = new Draggable(select(), options)
      return this.draggable
    }

    componentDidmount() {}
    componentWillUpdate() {}
    componentWillUnmount() {
      this.draggable.destroy()
    }

    // Compartilha instancia com filho
    render() {
      return <InnerComponent draggable={this.draggableInstance} />
    }
  }
}
