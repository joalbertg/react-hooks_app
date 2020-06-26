import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';

import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests todoReducer reducer', () => {
  const actions = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
  };

  test('Should return default state values', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('Should add a TODO', () => {
    const TODO = {
      id: 3,
      desc: 'Learn Jest'
    };

    const state = todoReducer(demoTodos, { type: actions.ADD_TODO, payload: TODO });
    const todoAdded = state.find(todo => todo.id === TODO.id);

    expect(state.length).toBe(demoTodos.length + 1);
    expect(todoAdded).toBeTruthy();
    expect(todoAdded.desc).toBe(TODO.desc);
    expect(todoAdded.done).toBe(false);
  });

  test('Should change done property', () => {
    const TODO = {
      id: 3,
      desc: 'Learn Jest'
    };

    let state = todoReducer(demoTodos, { type: actions.ADD_TODO, payload: TODO });
    const todoAdded = state.find(todo => todo.id === TODO.id);

    state = todoReducer(state, { type: actions.TOGGLE_TODO, payload: { id: TODO.id } });
    const todoToggled = state.find(todo => todo.id === TODO.id);

    expect(state.length).toBe(demoTodos.length + 1);
    expect(todoToggled).toBeTruthy();
    expect(todoToggled.desc).toBe(todoAdded.desc);
    expect(todoToggled.done).toBeTruthy();
  });

  test('Should remove a TODO', () => {
    const TODO = {
      id: 3,
      desc: 'Learn Jest'
    };

    let state = todoReducer(demoTodos, { type: actions.ADD_TODO, payload: TODO });
    const todoAdded = state.find(todo => todo.id === TODO.id);

    state = todoReducer(state, { type: actions.REMOVE_TODO, payload: { id: TODO.id } });

    expect(state).toBeTruthy();
    expect(state.length).toBe(demoTodos.length);
    expect(state).toEqual(demoTodos);
  });
});

