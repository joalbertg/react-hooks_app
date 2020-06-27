import React from 'react';
import { mount } from 'enzyme';

import { LoginScreen } from '../../../components/09-useContex/LoginScreen';
import { UserContext } from '../../../components/09-useContex/UserContext';

describe('Tests LoginScreen component', () => {
  const setUser = jest.fn();
  const user = {
    name: 'joalbert',
    email: 'joalbertgonzalez@gmail.com'
  };

  const wrapper = mount(
    <UserContext.Provider value={ {setUser} }>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should call setUser function', () => {
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledWith({
      id: expect.any(Number),
      ...user
    });
  });
});

