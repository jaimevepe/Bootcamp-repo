import * as Redux from 'redux';
import initialState from './initialState';
import {ADD_ITEM, 
        DELETE_ITEM,
        TOGGLE_ITEM_COMPLETION,
        UPDATE_SEARCH,
        SHOW_ALL} from '../actions/indexAction'

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
          case TOGGLE_ITEM_COMPLETION:
            return {
              ...state,
              todos: state.todos.map(
                t => action.id === t.id ? {...t, isComplete: !t.isComplete} : t
              )
            }
            case UPDATE_SEARCH:
              return {
                ...state,
                searchText: action.text
              }
              case SHOW_ALL:
                return {
                  ...state,
                  showAll: !state.showAll
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