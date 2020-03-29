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