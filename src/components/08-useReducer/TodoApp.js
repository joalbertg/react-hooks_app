import React, { useReducer, useEffect } from 'react';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { todoReducer } from './todoReducer';

import './styles.css';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = newTask => {
    dispatch({type: 'ADD_TODO', payload: newTask});
  }

  const handleToggle = id => {
    dispatch({type: 'TOGGLE_TODO', payload: {id}});
  }

  const handleRemove = id => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } });
  }

  return(
    <>
      <h1>TodoApp {todos.length}</h1>
      <hr />

      <div className="row mt-5">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            <TodoList
              todos={todos}
              handleToggle={handleToggle}
              handleRemove={handleRemove}
            />
          </ul>
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
}

