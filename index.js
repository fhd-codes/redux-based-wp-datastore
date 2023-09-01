/**
 *  This is the main file of the data store 
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
