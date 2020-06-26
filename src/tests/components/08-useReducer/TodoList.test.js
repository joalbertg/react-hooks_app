import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';

import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests TodoList component', () => {
  const handleRemove = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleRemove={handleRemove}
      handleToggle={handleToggle}
    />);

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should have two TodoListItems', () => {
    const TodoListItem = wrapper.find('TodoListItem');

    expect(TodoListItem.exists()).toBeTruthy();
    expect(TodoListItem.length).toBe(demoTodos.length);
  });

  describe('Tests TodoListItems props', () => {
    test('Should handleToggle be a function', () => {
      const { handleToggle } = wrapper.find('TodoListItem').at(0).props();
      expect(handleToggle).toEqual(expect.any(Function));
    });

    test('Should handleRemove be a function', () => {
      const { handleRemove } = wrapper.find('TodoListItem').at(0).props();
      expect(handleRemove).toEqual(expect.any(Function));
    });
  });
});

