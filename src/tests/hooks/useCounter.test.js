import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';

describe('Test useCounter Hook', () => {
  test('Should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const {
      counter,
      increment,
      decrement,
      reset
    } = result.current;

    expect(counter).toBe(10);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Should return counter equal 100', () => {
    const initialState = 100;
    const { result } = renderHook(() => useCounter(initialState));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Should return values of increments of 1 the increment function', () => {
    const initialState = 0;
    const { result } = renderHook(() => useCounter(initialState));

    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(1);
  });

  test('Should return values of decrements of 1 the decrement function', () => {
    const initialState = 0;
    const { result } = renderHook(() => useCounter(initialState));

    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(-1);
  });

  test('Should return reset values after increment', () => {
    const initialState = 123;
    const { result } = renderHook(() => useCounter(initialState));

    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(initialState);
  });

  test('Should return reset values after decrement', () => {
    const initialState = 123;
    const { result } = renderHook(() => useCounter(initialState));

    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(initialState);
  });


  describe('Should return increments values based on factor', () => {
    const initialState = 0;

    test('Should return increments values based on factor 0', () => {
      const factor_0 = 0;
      const { result } = renderHook(() => useCounter(initialState));
      const { increment } = result.current;

      act(() => {
        increment(factor_0);
      });

      const { counter } = result.current;
      expect(counter).toBe(0);
    });

    test('Should return increments values based on factor 1', () => {
      const factor_1 = 1;
      const { result } = renderHook(() => useCounter(initialState));
      const { increment } = result.current;

      act(() => {
        increment(factor_1);
      });

      const { counter } = result.current;
      expect(counter).toBe(factor_1);
    });

    test('Should return increments values based on factor 100', () => {
      const factor_100 = 100;
      const { result } = renderHook(() => useCounter(initialState));
      const { increment } = result.current;

      act(() => {
        increment(factor_100);
      });

      const { counter } = result.current;
      expect(counter).toBe(factor_100);
    });

    test('Should return increments values based on factor -1', () => {
      const factor__1 = -1;
      const { result } = renderHook(() => useCounter(initialState));
      const { increment } = result.current;

      act(() => {
        increment(factor__1);
      });

      const { counter } = result.current;
      expect(counter).toBe(1);
    });

    test('Should return increments values based on factor -100', () => {
      const factor__100 = -100;
      const { result } = renderHook(() => useCounter(initialState));
      const { increment } = result.current;

      act(() => {
        increment(factor__100);
      });

      const { counter } = result.current;
      expect(counter).toBe(100);
    });
  });

  describe('Should return decrements values based on factor', () => {
    const initialState = 0;

    test('Should return decrements values based on factor 0', () => {
      const factor_0 = 0;
      const { result } = renderHook(() => useCounter(initialState));
      const { decrement } = result.current;

      act(() => {
        decrement(factor_0);
      });

      const { counter } = result.current;
      expect(counter).toBe(factor_0);
    });

    test('Should return decrements values based on factor 1', () => {
      const factor_1 = 1;
      const { result } = renderHook(() => useCounter(initialState));
      const { decrement } = result.current;

      act(() => {
        decrement(factor_1);
      });

      const { counter } = result.current;
      expect(counter).toBe(-factor_1);
    });

    test('Should return decrements values based on factor 100', () => {
      const factor_100 = 100;
      const { result } = renderHook(() => useCounter(initialState));
      const { decrement } = result.current;

      act(() => {
        decrement(factor_100);
      });

      const { counter } = result.current;
      expect(counter).toBe(-factor_100);
    });

    test('Should return decrements values based on factor -1', () => {
      const factor__1 = -1;
      const { result } = renderHook(() => useCounter(initialState));
      const { decrement } = result.current;

      act(() => {
        decrement(factor__1);
      });

      const { counter } = result.current;
      expect(counter).toBe(factor__1);
    });

    test('Should return decrements values based on factor -100', () => {
      const factor__100 = -100;
      const { result } = renderHook(() => useCounter(initialState));
      const { decrement } = result.current;

      act(() => {
        decrement(factor__100);
      });

      const { counter } = result.current;
      expect(counter).toBe(factor__100);
    });
  });
});
