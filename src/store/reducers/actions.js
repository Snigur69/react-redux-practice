const initialState = [
    'Custom action 1',
    'Custom action 2', 
    'Custom Action 3'
];


export const custom_actions = (state = initialState, action) => {
    if(action.type === 'ADD_ACTION') {
        return [
            ...state,
            action.custom_action
        ];
    } else if(action.type === 'DELETE_ACTION') {
        let tmp_actions = state;
        tmp_actions.splice(tmp_actions.length - 1, 1);
        return tmp_actions;
    }
    return state;
}