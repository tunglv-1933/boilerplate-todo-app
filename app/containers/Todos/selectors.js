import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the todos state domain
 */

const selectTodosDomain = state => state.todos || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Todos
 */

const makeSelectTodos = () =>
  createSelector(
    selectTodosDomain,
    state => state.todos,
  );

export default makeSelectTodos;
export { selectTodosDomain };
