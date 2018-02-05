import React from 'react'
import ReactDOM from 'react-dom'
// import MyDroppable from './components/MyDroppable'
import MyDraggable from './components/MyDraggable'
import registerServiceWorker from './registerServiceWorker'

// ReactDOM.render(<MyDroppable />, document.getElementById('root'))
ReactDOM.render(<MyDraggable />, document.getElementById('root'))
registerServiceWorker()
