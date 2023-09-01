/**
 *  Selectors are using to get a particular state value from the store.
 *  
*/

export const getTodos = (state) => {
    return state.todo_items;
}