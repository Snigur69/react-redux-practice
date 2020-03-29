export function addSkill (newSkill) {
    return {
        type: 'ADD_SKILL',
        payload: newSkill
    }
}

export function deleteLastSkill () {
    return {
        type: 'DELETE_SKILL'
    }
};