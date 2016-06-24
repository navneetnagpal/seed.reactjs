
import * as types from '../constants/ActionTypes.jsx'


export function getAllTodos() {
    return {
        type: types.RECEIVE_TODOS,
        todos: [{ id: 1, title: 'hello' }]
    };
}
