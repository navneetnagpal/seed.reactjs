import { combineReducers } from 'redux'
import { ADD_ENTRY, UPDATE_ENTRY, ADD_CATEGORY } from '../actions/index.jsx'
var e_count = 0;
var defaultCategories = [{
    field: 'income',
    text: 'Income',
    type: 'credit'
}, {
    field: 'expense',
    text: 'Expense',
    type: 'debit'
}]



export function entries(state = [], action) {
    switch (action.type) {
        case ADD_ENTRY:
            return [
                ...state, {
                    id: parseInt(Math.random()*100000000),
                    total: 0
                }
            ]
            break;
        case UPDATE_ENTRY:
            return state.map((entry, index) => {
                if (entry.id === action.id) {
                    let obj
                    Object.keys(action).forEach(function(key) {
                        if (['action', 'id', 'type'].indexOf(key) === -1) {
                            var tempObj = {};
                            tempObj[key] = action[key];
                            obj = Object.assign({}, entry, tempObj)
                        }
                    })
                    let total = 0
                    Object.keys(obj).forEach(function(key) {
                        if (['action', 'id', 'type', 'total'].indexOf(key) === -1) {
                            if (key === 'income') {
                                total += obj[key];
                            } else {
                                total -= obj[key];
                            }
                        }
                    })
                    obj.total = total;
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
