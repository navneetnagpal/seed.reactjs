import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {getAllTodos} from './actions/index.jsx'
import reducer from './reducers/index.jsx'
import App from './containers/App.jsx'
 

const store = createStore(
  reducer
)

store.dispatch(getAllTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
