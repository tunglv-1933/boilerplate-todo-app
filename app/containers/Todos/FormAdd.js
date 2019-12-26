import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

export function FormAddTodo({ handleSubmit }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 20,
        padding: 20,
      }}
    >
      <form style={{ width: '50%' }} onSubmit={handleSubmit}>
        <h1>Add some todo items</h1>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="text">Todo text</InputLabel>
          <Input id="text" type="text" />
        </FormControl>

        <Button type="submit" variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
  );
}

FormAddTodo.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormAddTodo;
