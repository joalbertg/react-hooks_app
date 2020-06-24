const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const todoReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload, node: false }];
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.payload.id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

export {
  todoReducer
};

