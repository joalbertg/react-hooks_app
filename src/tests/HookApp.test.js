import React from 'react';
import { shallow } from 'enzyme';

import { HookApp } from '../HookApp';

describe('Tests HookApp component', () => {
  test('Should display correctly', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});

