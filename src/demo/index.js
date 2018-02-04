import React from 'react'
import ReactDOM from 'react-dom'
import MyConteiner from './MyConteiner'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<MyConteiner />, document.getElementById('root'))
registerServiceWorker()
