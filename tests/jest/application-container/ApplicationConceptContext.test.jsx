import React from 'react';
import PropTypes from 'prop-types';
import { renderHook } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';

import ApplicationConceptContext, { useApplicationConcept, contextShape } from '../../../src/application-container/ApplicationConceptContext';

describe('ApplicationConceptContext', () => {
  test('should export ApplicationConceptContext', () => {
    expect(ApplicationConceptContext).toBeDefined();
  });
});

describe('useApplicationConcept', () => {
  test('should retrieve and return context value', () => {
    const contextValue = {
      description: 'Test Description',
      layoutBanner: <div>Layout Banner</div>,
      modalBanner: <div>Modal Banner</div>,
    };
    const wrapper = ({ children }) => (
      <ApplicationConceptContext.Provider value={contextValue}>
        {children}
      </ApplicationConceptContext.Provider>
    );
    const { result } = renderHook(() => useApplicationConcept(), { wrapper });

    expect(result.current).toBe(contextValue);
  });

  test('should return default value if no context value is present', () => {
    const { result } = renderHook(() => useApplicationConcept());

    expect(result.current).toEqual({});
  });
});

describe('contextShape', () => {
  test('should export contextShape', () => {
    expect(contextShape).toBeDefined();
    expect(contextShape.description).toBe(PropTypes.string);
    expect(contextShape.layoutBanner).toBe(PropTypes.element);
    expect(contextShape.modalBanner).toBe(PropTypes.element);
  });
});
