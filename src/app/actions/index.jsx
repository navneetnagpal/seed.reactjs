/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const ADD_ENTRY = 'ADD_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'

export const ADD_CATEGORY = 'ADD_CATEGORY'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

 export function addEntry(){
 	return { type: ADD_ENTRY}
 }
export function updateEntry(field,value, id){
	let obj = { type: UPDATE_ENTRY, id }
	obj[field]=value;
 	return obj
 }
 export function addCategory(text){
 	return { type: ADD_CATEGORY, text}
 }

export function addTodo(text, id) {
  return { type: ADD_TODO, text, id }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}