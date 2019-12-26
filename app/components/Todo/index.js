/**
 *
 * Todo
 *
 */

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Todo(props) {
  const Span = styled.span`
    color: ${props.status ? 'green' : 'black'};
    font-weight: ${props.status ? 'bold' : 'normal'};
  `;
  return (
    <ListItem key={props.id}>
      <Span onClick={props.onChangeStatus} status={props.status}>
        {props.text}
      </Span>
      <DeleteIcon onClick={props.onDelete} />
    </ListItem>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onChangeStatus: PropTypes.func,
  status: PropTypes.bool,
};

export default Todo;
