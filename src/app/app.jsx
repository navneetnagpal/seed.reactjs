import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {getAllTodos} from './actions/index.jsx'
import reducer from './reducers/index.jsx'
import App from './containers/App.jsx'
 
 
import todoApp from './reducers/index.jsx'

let store = createStore(todoApp)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
