/**
 * Actions are plain JavaScript objects that describe a change you want to make to the state. 
 * Actions must have a type property indicating the type of action being performed. 
 * Additional data can be included as well. 
*/

import { ADD_TODO } from "./types"; // these are constants for reducers

export const addTodo = (todo) => {
    return {
        type: ADD_TODO, // this will be used to get in the switch statement case
        todo    // the is the new value of the state
    }
}