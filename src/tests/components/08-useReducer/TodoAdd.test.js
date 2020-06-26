import React, { useRef } from 'react';
import { shallow } from 'enzyme';

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  //console.log(originReact);

  return {
    ...originReact,
    useRef: jest.fn(),
  };
});

describe('Test TodoAdd component', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should does not called handleAddTodo function', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect(handleAddTodo).not.toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Should is called handleAddTodo function', () => {
    const value = 'Learn Rails';

    useRef.mockReturnValueOnce({ current: { select: jest.fn() } });
    wrapper.find('input').simulate('change', {
      target: {
        name: 'description',
        value
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    // warning: {} va a ser valido
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.anything(),
      desc: value
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});

