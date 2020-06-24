import React from 'react';

import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
  const [{ description }, handleInputChange, handleReset] = useForm({
    description: ''
  });

  const handleForm = event => {
    event.preventDefault();

    if(description.trim().length < 2) return;

    const newTask = {
      id: new Date().getTime(),
      desc: description
    }

    handleAddTodo(newTask);
    handleReset();
    document.querySelector('input').select();
  }

  return(
    <>
      <h4>Add TODO</h4>
      <hr />

      <form
        onSubmit={handleForm}
        className="mt-2"
      >
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Learn ..."
          autoComplete="off"
          autoFocus="on"
          value={description}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-warning"
        >
          ADD
        </button>
      </form>
    </>
  );
}

