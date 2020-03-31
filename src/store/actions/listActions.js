export function addToList (newItem) {
    return {
        type: 'ADD_ACTION',
        payload: newItem
    }
};

export function deleteLastItem () {
    return {
        type: 'DELETE_ACTION'
    }
};

export function changeActionById(newID, newAction) {
    return {
        type: 'CHANGE_ACTION_BY_ID',
        payload: {
            id: newID,
            action: newAction
        }
    }
}

export function deleteActionById(newID) {
    return {
        type: 'DELETE_ACTION_BY_ID',
        payload: {
            id: newID
        }
    }
}