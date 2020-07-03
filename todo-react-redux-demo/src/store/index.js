import * as Redux from 'redux';
import initialState from './initialState';
import {ADD_ITEM, DELETE_ITEM} from '../actions/indexAction'
import {devToolsEnhancer} from 'redux-devtools-extension';

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM: 
        return {
          ...state,
          todos: [
              ...state.todos, {
                id: Date.now(),
                text: action.text,
                isComplete: false
              }
            ]
        }
        case DELETE_ITEM :
          return {
            ...state,
            todos: state.todos.filter(t => t.id !== action.id)
          }
        default:
          return state
    }
}

const store = Redux.createStore(
  todosReducer, 
  devToolsEnhancer()
  )

export default store;