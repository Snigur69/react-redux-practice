const initialState = [
    'SKILL 1', 
    'SKILL 2',
    'SKILL 3'
]

export const skills = (state = initialState, action) => {
    if(action.type === 'ADD_SKILL') {
        let tmp_skills = state;
        tmp_skills[tmp_skills.length] = action.payload;
        return tmp_skills;
    } else if(action.type === 'DELETE_SKILL') {
        let tmp_skills = state;
        tmp_skills.splice(tmp_skills.length - 1, 1);
        return tmp_skills;
    } else if (action.type === 'CHANGE_SKILL') {
        state[action.payload.id] = action.payload.value;
        return state;
    } else if (action.type === 'DELETE_SKILL_BY_ID') {
        state[action.payload.id] = '';
        return state;
    }
    return state;
}