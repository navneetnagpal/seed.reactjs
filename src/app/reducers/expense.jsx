import { combineReducers } from 'redux'
import {ADD_ENTRY,UPDATE_ENTRY } from '../actions/index.jsx'
var e_count=0;
var defaultCategories = [{
	field:'income',
	text:'Income',
	type:'credit'
},{
	field:'expense',
	text:'Expense',
	type:'debit'
}]

export function entries(state = [], action) {
      switch(action.type) {
      	case ADD_ENTRY:
      	 return [
		        ...state,
		        {
		        	id:e_count++,
		          income: action.income,
		          expense: action.expense
		        }
		      ]
      		break;
  		case UPDATE_ENTRY:
      		return state.map((entry, index) => {
		        if (index === action.index) {
		          return Object.assign({}, entry, {
		            	income: action.income,
			          expense: action.expense
		          })
		        }
		        return entry
		      })
      		return state
      }
      return state;
}

 
export function categories(state = defaultCategories,action) {
	return state;
}
