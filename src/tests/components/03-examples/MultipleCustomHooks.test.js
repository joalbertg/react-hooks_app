import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Tests MultipleCustomHooks component', () => {
  useCounter.mockReturnValue({
    counter: 2
  });

  test('Should display correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    const divAlert = wrapper.find('.alert');

    expect(wrapper).toMatchSnapshot();
    expect(divAlert.exists()).toBe(true);
  });

  test('Should return info', () => {
    const data = [{
      author: 'Joalbert',
      quote: 'Hello World!!!'
    }];

    useFetch.mockReturnValue({
      data,
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    const divAlert = wrapper.find('.alert');
    const quote = wrapper.find('blockquote p').text();
    const author = wrapper.find('blockquote footer').text();

    expect(wrapper).toMatchSnapshot();
    expect(divAlert.exists()).toBe(false);
    expect(quote).toBe(data[0].quote);
    expect(author).toBe(data[0].author);
  });

});

