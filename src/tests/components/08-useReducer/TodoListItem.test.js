import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests TodoListItem component', () => {
  const index = 1;
  const handleToggle = jest.fn();
  const handleRemove = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[index]}
      index={index}
      handleToggle={handleToggle}
      handleRemove={handleRemove}
    />
  );

  test('Should display correctly', () => {
    const index = 0;
    const wrapper = shallow(<TodoListItem todo={demoTodos[index]} index={index} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Should have called handleToggle function', () => {
    // click sobre el item demoTodos[index]
    wrapper.find('li').simulate('click', handleToggle);

    expect(wrapper).toMatchSnapshot();
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[index].id);
  });

  test('Should have called handleRemove function', () => {
    // click sobre el item demoTodos[index]
    wrapper.find('button').simulate('click', handleRemove);

    expect(wrapper).toMatchSnapshot();
    expect(handleRemove).toHaveBeenCalledWith(demoTodos[index].id);
  });

  test('Should have complete class if todo.done is true', () => {
    const index = 0;
    const wrapper = shallow(<TodoListItem todo={demoTodos[index]} index={index} />);
    //const pComplete = wrapper.find('.complete');
    const paragraph = wrapper.find('.complete');

    expect(wrapper).toMatchSnapshot();
    expect(paragraph).toBeTruthy();
    expect(paragraph.text()).toBe(`${index + 1}. ${demoTodos[index].desc}`);
    expect(paragraph.hasClass('complete')).toBeTruthy();
  });
});

