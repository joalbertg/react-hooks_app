import React from 'react';

export const TodoListItem = ({todo, index, handleToggle, handleRemove}) => {
  return(
    <>
      <li
        className="list-group-item"
        onClick={() => handleToggle(todo.id)}
      >
        <p className={todo.done ? "complete" : ""}>{index + 1}. {todo.desc}</p>
        <button
          className="btn btn-danger"
          onClick={() => handleRemove(todo.id)}
        >
          X
        </button>
      </li>
      <hr />
    </>
  );
}

