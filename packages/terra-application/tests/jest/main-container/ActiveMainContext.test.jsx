import React from 'react';
import PropTypes from 'prop-types';
import { renderHook } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';

import ActiveMainContext, { useActiveMain, contextShape } from '../../../src/main-container/ActiveMainContext';

describe('ActiveMainContext', () => {
  test('should export ActiveMainContext', () => {
    expect(ActiveMainContext).toBeDefined();
  });
});

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

describe('contextShape', () => {
  test('should export contextShape', () => {
    expect(contextShape).toBeDefined();
    expect(contextShape.label).toBe(PropTypes.string);
    expect(contextShape.metaData).toBe(PropTypes.object);
  });
});
