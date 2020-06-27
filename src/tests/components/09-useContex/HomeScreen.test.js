import React from 'react';
import { mount } from 'enzyme';

import { HomeScreen } from '../../../components/09-useContex/HomeScreen';
import { UserContext } from '../../../components/09-useContex/UserContext';

describe('Tests HomeScreen component', () => {
  const user = {
    user: 'Joalbert',
    email: 'joalbertgonzalez@gmail.com'
  };

  const wrapper = mount(
    <UserContext.Provider value={ {user} }>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

