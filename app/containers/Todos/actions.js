/*
 *
 * Todos actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_LIST_TODO,
  DELETE_TODO,
  ADD_TODO,
  CHANGE_STATUS_TODO,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadListTodoAction() {
  return {
    type: LOAD_LIST_TODO,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function addTodo(data) {
  return {
    type: ADD_TODO,
    data,
  };
}

export function changeStatus(id) {
  return {
    type: CHANGE_STATUS_TODO,
    id,
  };
}
