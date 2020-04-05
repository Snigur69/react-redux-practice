const initialState = [
    'Custom action 1',
    'Custom action 2', 
    'Custom Action 3',
    'Custom action 4',
    'Custom action 5', 
    'Custom Action 6'
];


export const custom_actions = (state = initialState, action) => {
    if(action.type === 'ADD_ACTION') {
        // let tmp_actions = state;
        // tmp_actions[tmp_actions.length] = action.payload
        return [
            ...state,
            action.payload
        ];
        // return tmp_actions;
    } else if(action.type === 'DELETE_ACTION') {
        let tmp_actions = [...state];
        tmp_actions.splice(tmp_actions.length - 1, 1);
        return tmp_actions;
    } else if (action.type === 'CHANGE_ACTION_BY_ID') {
        let tmp_actions = [...state];
        tmp_actions[action.payload.id] = action.payload.action;
        return tmp_actions;
    } else if (action.type === 'DELETE_ACTION_BY_ID') {
        let tmp_actions = [...state];
        tmp_actions[action.payload.id] = '';
        return tmp_actions;
    }
    return state;
}