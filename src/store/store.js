import { createStore, combineReducers } from 'redux';
import { custom_actions } from './reducers/actions';
import { skills } from './reducers/skills';

// const initialState = {
//     custom_actions: [
//         'Custom action 1',
//         'Custom action 2', 
//         'Custom Action 3'
//     ],
//     skills: []
// }

const reducer = combineReducers({
    custom_actions, 
    skills
});

// const toDoList = (state = initialState, action) => {
//     if(action.type === 'ADD_ACTION') {
//         return {
//             ...state,
//             custom_actions: [...state.custom_actions, action.custom_action]
//         };
//     } else if(action.type === 'DELETE_ACTION') {
//         let tmp_actions = state.custom_actions;
//         tmp_actions.splice(tmp_actions.length - 1, 1);
//         return {
//             ...state, 
//             custom_actions: tmp_actions
//         }
//     }
//     return state;
// }

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());