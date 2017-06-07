import { combineReducers } from 'redux'
import {todos,visibilityFilter} from './todo.jsx'
import {entries,categories} from './expense.jsx'

const Application = combineReducers({
	entries,
	categories,
	todos,
	visibilityFilter
})

export default Application