export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const TOGGLE_ITEM_COMPLETION = 'TOGGLE_ITEM_COMPLETION'
export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const SHOW_ALL = 'SHOW_ALL'

// ADD_ITEM action creator
export function addItem(text) {
    return { type: ADD_ITEM, text}
}

export function deleteItem(id) {
    return { type: DELETE_ITEM, id}
}

export function toggleItemCompletion(id) {
    return { type: TOGGLE_ITEM_COMPLETION, id}
}

export function updateSearch(text) {
    return { type: UPDATE_SEARCH, text}
}

export function showAll() {
    return { type: SHOW_ALL}
}