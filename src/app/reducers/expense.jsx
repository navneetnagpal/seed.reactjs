import { combineReducers } from 'redux'
import { ADD_ENTRY, UPDATE_ENTRY, ADD_CATEGORY } from '../actions/index.jsx'
var e_count = 1;
var defaultCategories = [{
    field: 'income',
    text: 'Income',
    type: 'credit'
}, {
    field: 'expense',
    text: 'Expense',
    type: 'debit'
}]



export function entries(state = [{ id: 0 , total:0}], action) {
    switch (action.type) {
        case ADD_ENTRY:
            return [
                ...state, {
                    id: e_count++,
                    total: 0
                }
            ]
            break;
        case UPDATE_ENTRY:
            return state.map((entry, index) => {
                if (entry.id === action.id) {
                    let obj = Object.assign({}, entry, {
                        income: action.income || entry.income,
                        expense: action.expense|| entry.expense,
                        total: ((action.income || entry.income) || 0) - (( action.expense|| entry.expense) || 0)
                    })
                     
                    return obj
                }
                return entry
            })
            return state
    }
    return state;
}


export function categories(state = defaultCategories, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return [
                ...state, {
                    field: action.text.toLowerCase().replace(new RegExp(' ', 'g'), '-'),
                    text: action.text,
                    type: 'debit'
                }
            ]
            break;
    }
    return state;
}
