import { createStore, combineReducers } from 'redux';
import { custom_actions } from './reducers/actions';
import { skills } from './reducers/skills';

const reducer = combineReducers({
    custom_actions, 
    skills
});


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());