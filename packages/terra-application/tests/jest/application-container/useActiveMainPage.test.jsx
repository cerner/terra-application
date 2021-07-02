import React from 'react';
import { renderHook } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';

import { useActiveMainPage } from '../../../src/application-container';
import ActiveMainPageContext from '../../../src/application-container/private/active-main-page/ActiveMainPageContext';

describe('useActiveMainPage', () => {
  test('should return ActiveMainPageContext value', () => {
    const testValue = { test: 'data' };
    const wrapper = ({ children }) => ( // eslint-disable-line react/prop-types
      <ActiveMainPageContext.Provider value={testValue}>{children}</ActiveMainPageContext.Provider>
    );
    const { result } = renderHook(() => useActiveMainPage(), { wrapper });

    expect(result.current).toBe(testValue);
  });
});
