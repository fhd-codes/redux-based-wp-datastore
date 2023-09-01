/**
 *  This is the main file of the data store 
*/ 

import { createReduxStore, register } from '@wordpress/data';

import reducers from './reducers';
import * as selectors from "./selectors";
import * as actions from "./actions";

const store = createReduxStore('fhd/todos', {
    reducers,
    selectors,
    actions
});

register(store);
