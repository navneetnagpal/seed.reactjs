import {
    ADD_TODO

} from '../constants/ActionTypes.jsx'

const initialState = {
    todos: []
}


export default function todo(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return initialState
        default:
            return initialState;
    }
}
