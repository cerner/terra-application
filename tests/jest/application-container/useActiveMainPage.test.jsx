import React from 'react';
import { renderHook } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';

import { ActiveMainContext, useActiveMain } from '../../../src/main-container';

describe('useActiveMain', () => {
  test('should return ActiveMainContext value', () => {
    const testValue = { test: 'data' };
    const wrapper = ({ children }) => ( // eslint-disable-line react/prop-types
      <ActiveMainContext.Provider value={testValue}>{children}</ActiveMainContext.Provider>
    );
    const { result } = renderHook(() => useActiveMain(), { wrapper });

    expect(result.current).toBe(testValue);
  });
});
