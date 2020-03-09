import { createStore } from 'redux';

const toDoList = (state = [], action) => {
    if(action.type === 'ADD_ACTION') {
        return [
            ...state,
            action.custom_action
        ];
    }
    return state;
}

export const store = createStore(toDoList);