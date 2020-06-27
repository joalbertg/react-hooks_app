import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';

import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests TodoApp', () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should add a TODO', () => {
    const wrapper = mount(<TodoApp />);

    act( () => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text()).toBe(`TodoApp ${demoTodos.length}`);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('Should remove a TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleRemove')(demoTodos[0].id);

    expect(wrapper.find('h1').text()).toBe('TodoApp 0');
  });
});

