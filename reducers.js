/**
 * Reducers are functions that specify how the state changes in response to an action. 
 * Each reducer is responsible for handling a specific part of the state. 
 * Reducers take the current state and an action as arguments and return a new state
 * Here, we are using switch case to update the states 
*/

import { createReduxStore, register } from '@wordpress/data';

import reducer from './reducer';
import * as selectors from "./selectors";
import * as actions from "./actions";


const store = createReduxStore('fhd/todos', {
    reducer,
    selectors,
    actions
});

register(store);
