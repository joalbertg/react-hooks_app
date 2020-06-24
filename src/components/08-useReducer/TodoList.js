import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleRemove, handleToggle}) => {
  return(
    todos.map((todo, i) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        index={i}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    ))
  );
}

