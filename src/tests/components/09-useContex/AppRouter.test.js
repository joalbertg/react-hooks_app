import React from 'react';
import { mount } from 'enzyme';

import { AppRouter } from '../../../components/09-useContex/AppRouter';
import { UserContext } from '../../../components/09-useContex/UserContext';

describe('Tests AppRouter component', () => {
  const user = {
    name: 'joalbert',
    email: 'joalbertgonzalez@gmail.com'
  };

  const wrapper = mount(
    <UserContext.Provider value={ {user} }>
      <AppRouter />
    </UserContext.Provider>
  );

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

