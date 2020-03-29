const initialState = [
    'SKILL 1', 
    'SKILL 2',
    'SKILL 3'
]

export const skills = (state = initialState, action) => {
    if(action.type === 'ADD_SKILL') {
        return [
            ...state,
            action.payload
        ];
    } else if(action.type === 'DELETE_SKILL') {
        let tmp_skills = state;
        tmp_skills.splice(tmp_skills.length - 1, 1);
        return tmp_skills;
    }
    return state;
}