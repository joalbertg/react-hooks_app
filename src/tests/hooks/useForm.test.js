import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from '../../hooks/useForm';

describe('Tests useForm Hook', () => {
  const initForm = {
    name: 'Joalbert',
    email: 'joalbertgonzalez@gmail.com'
  };

  test('Should return default values', () => {
    const { result } = renderHook(() => useForm());
    const [state, handleInputChange, handleReset] = result.current;

    expect(state).toEqual({});
    expect(typeof handleInputChange).toBe('function');
    expect(typeof handleReset).toBe('function');
  });

  test('Should change name', () => {
    const { result } = renderHook(() => useForm(initForm));
    const [, handleInputChange] = result.current;
    const name = 'Lisset'

    act(() => {
      const event =
      handleInputChange({
        target: {
          name: 'name',
          value: 'Lisset'
        }
      });
    });

    const [state] = result.current;

    expect(state).toEqual({...initForm, name: 'Lisset'});
  });

  test('Should return default value after handleReset', () => {
    const { result } = renderHook(() => useForm(initForm));
    const [, handleInputChange, handleReset] = result.current;
    const name = 'Lisset'

    act(() => {
      const event =
      handleInputChange({
        target: {
          name: 'name',
          value: 'Lisset'
        }
      });
      handleReset();
    });

    const [state] = result.current;

    expect(state).toEqual(initForm);
  });
});

