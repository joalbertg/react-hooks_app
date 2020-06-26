import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';

import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Tests RealExampleRef component', () => {
  const wrapper = shallow(<RealExampleRef />);

  test('Should display correctly', () => {
    const MultipleCustomHooks = wrapper.find('MultipleCustomHooks');

    expect(wrapper).toMatchSnapshot();
    expect(MultipleCustomHooks.exists()).toBe(false);
  });

  test('Should display MultipleCustomHooks component', () => {
    wrapper.find('button').simulate('click');

    const MultipleCustomHooks = wrapper.find('MultipleCustomHooks');

    expect(wrapper).toMatchSnapshot();
    expect(MultipleCustomHooks.exists()).toBe(true);
  });
});

