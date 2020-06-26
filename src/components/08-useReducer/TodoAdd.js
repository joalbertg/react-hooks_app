import React, { useRef } from 'react';

import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
  const [{ description }, handleInputChange, handleReset] = useForm({
    description: ''
  });

  const inputRef = useRef();

  const handleForm = event => {
    event.preventDefault();

    if(description.trim().length < 2) return;

    const newTask = {
      id: new Date().getTime(),
      desc: description
    }

    handleAddTodo(newTask);
    handleReset();
    // es mala practica llamar al DOM en componentes
    // document.querySelector('input').select();
    inputRef.current.select();
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
          ref={inputRef}
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

