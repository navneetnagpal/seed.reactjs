import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { getAllTodos } from './actions/index.jsx'
import Application from './reducers/index.jsx'
import App from './containers/App.jsx'
import * as storage from 'redux-storage'

const reducer = storage.reducer((Application));
import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('my-expenses');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const load = storage.createLoader(engine);

 
// Notice that our load function will return a promise that can also be used 
// to respond to the restore event. 
load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));
// let store = createStore(todoApp)
// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__

render(
    <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)
