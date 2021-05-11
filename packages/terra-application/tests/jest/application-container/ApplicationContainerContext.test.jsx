import React from 'react';
import PropTypes from 'prop-types';
import { renderHook } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainerContext, { useApplicationContainer, contextShape } from '../../../src/application-container/ApplicationContainerContext';

describe('ApplicationContainerContext', () => {
  test('should export ApplicationContainerContext', () => {
    expect(ApplicationContainerContext).toBeDefined();
  });
});

describe('useApplicationContainer', () => {
  test('should retrieve and return context value', () => {
    const contextValue = {
      applicationName: 'Test Name',
      applicationVersion: 'Test Version',
      applicationMetaData: { test: 'data' },
    };
    const wrapper = ({ children }) => (
      <ApplicationContainerContext.Provider value={contextValue}>
        {children}
      </ApplicationContainerContext.Provider>
    );
    const { result } = renderHook(() => useApplicationContainer(), { wrapper });

    expect(result.current).toBe(contextValue);
  });

  test('should throw if no context value is present', () => {
    const { result } = renderHook(() => useApplicationContainer());

    expect(result.error).toBeDefined();
  });
});

describe('contextShape', () => {
  test('should export contextShape', () => {
    expect(contextShape).toBeDefined();
    expect(contextShape.applicationName).toBe(PropTypes.string);
    expect(contextShape.applicationVersion).toBe(PropTypes.string);
    expect(contextShape.applicationMetaData).toBe(PropTypes.object);
  });
});
