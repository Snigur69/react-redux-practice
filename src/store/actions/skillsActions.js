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

export function changeSkill (newId, newValue) {
    return {
        type: 'CHANGE_SKILL',
        payload: {
            id: newId,
            value: newValue
        }
    }
}

export function deleteSkillById (newId) {
    return {
        type: 'DELETE_SKILL_BY_ID',
        payload: {
            id: newId
        }
    }
}