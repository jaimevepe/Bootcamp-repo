export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
// ADD_ITEM action creator
export function addItem(text) {
    return { type: ADD_ITEM, text}
}

export function deleteItem(id) {
    return { type: DELETE_ITEM, id}
}

