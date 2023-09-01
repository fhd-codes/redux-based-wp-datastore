/**
 * Reducers are functions that specify how the state changes in response to an action. 
 * Each reducer is responsible for handling a specific part of the state. 
 * Reducers take the current state and an action as arguments and return a new state
 * Here, we are using switch case to update the states 
*/

import { ADD_TODO } from "./types"

const DEFAULT_STATE = { // each store should have a default state
    todo_items: []
};

export default reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_TODO :
            return { ...state, todo_items: [ ...state.todo_items, action.todo ] }
    
        default:
            return state;
    }
    
}

