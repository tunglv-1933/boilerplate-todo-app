/**
 *
 * Todos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import List from '@material-ui/core/List';
import makeSelectTodos from './selectors';
import reducer from './reducer';
import saga from './saga';
import Todo from '../../components/Todo';
import {
  deleteTodo as deleteTodoAction,
  addTodo as addTodoAction,
  changeStatus as changeStatusAction,
} from './actions';
import { FormAddTodo } from './FormAdd';

export function Todos({ todos, deleteTodo, addTodo, changeStatus }) {
  useInjectReducer({ key: 'todos', reducer });
  useInjectSaga({ key: 'todos', saga });

  let content = <div />;

  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value;

    if (text.length > 0) {
      const id = Date.now();
      addTodo({ id, text, status: false });
      e.target.text.value = '';
    }
  };

  if (todos) {
    content = todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onChangeStatus={() => changeStatus(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    ));
    return (
      <>
        <List>{content}</List>
        <FormAddTodo handleSubmit={handleSubmit} />
      </>
    );
  }

  return <div />;
}

Todos.propTypes = {
  todos: PropTypes.any,
  deleteTodo: PropTypes.func,
  addTodo: PropTypes.func,
  changeStatus: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
});

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: id => dispatch(deleteTodoAction(id)),
    addTodo: data => dispatch(addTodoAction(data)),
    changeStatus: id => dispatch(changeStatusAction(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Todos);
