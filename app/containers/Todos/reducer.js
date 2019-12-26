/*
 *
 * Todos reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  DELETE_TODO,
  ADD_TODO,
  CHANGE_STATUS_TODO,
} from './constants';

export const initialState = {
  todos: [],
};

/* eslint-disable default-case, no-param-reassign */
const todosReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case DELETE_TODO:
        for (let i = 0; i < draft.todos.length; i += 1) {
          if (draft.todos[i].id === action.id) {
            draft.todos.splice(i, 1);
          }
        }
        break;
      case ADD_TODO:
        draft.todos.push(action.data);
        break;
      case CHANGE_STATUS_TODO:
        for (let i = 0; i < draft.todos.length; i += 1) {
          if (draft.todos[i].id === action.id) {
            draft.todos[i].status = !draft.todos[i].status;
          }
        }
        break;
    }
  });

export default todosReducer;
