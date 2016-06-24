import {
  ADD_TODO
} from '../constants/ActionTypes.jsx'
import { combineReducers } from 'redux'
import todolist from './todo.jsx'

const initialState = {
  todo: []
}
export default combineReducers({
  todolist 
})  