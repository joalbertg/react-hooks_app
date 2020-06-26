import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useFetch } from '../../hooks/useFetch';

describe('Tests useFetch Hook', () => {
  test('Should return default values', () => {
    const { result } = renderHook (() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Should return values', async () => {
    const url = 'https://www.breakingbadapi.com/api/quotes/1';
    const { result, waitForNextUpdate } = renderHook (() => useFetch(url));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('Should return an error', async () => {
    // this url return an 404 error
    const url = 'https://reqres.in/apid/users?page=2';
    const { result, waitForNextUpdate } = renderHook (() => useFetch(url));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('Request not found.');
  });
});

