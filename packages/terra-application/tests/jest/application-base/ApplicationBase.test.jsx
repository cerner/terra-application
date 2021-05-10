import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ApplicationBase from '../../../src/application-base';
import i18nLoader from '../../../src/application-base/private/i18nLoader';
import logger from '../../../src/utils/logger';
import useTestOverrides from '../../../src/application-base/private/useTestOverrides';

jest.mock('../../../src/application-base/private/i18nLoader', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../../src/utils/logger', () => ({
  __esModule: true,
  default: {
    error: jest.fn(),
  },
}));

jest.mock('../../../src/application-base/private/useTestOverrides', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ApplicationBase', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders null while no messages have loaded', () => {
    i18nLoader.mockImplementation(() => Promise.resolve({ default: undefined }));
    useTestOverrides.mockImplementation(() => ({}));

    render((
      <ApplicationBase>
        <div data-testid="test-child" />
      </ApplicationBase>
    ));

    expect(screen.queryByTestId('test-child')).toBe(null);
    expect(i18nLoader).toHaveBeenCalledWith('en');
  });

  test('renders children after messages have loaded', async () => {
    i18nLoader.mockImplementation(() => Promise.resolve({ default: { test: 'message' } }));
    useTestOverrides.mockImplementation(() => ({}));

    render((
      <ApplicationBase>
        <div data-testid="test-child" />
      </ApplicationBase>
    ));

    const child = await screen.findByTestId('test-child');

    expect(child).toBeInTheDocument();
    expect(i18nLoader).toHaveBeenCalledWith('en');
  });

  test('throws if messages could not be loaded for locale', async () => {
    const testError = new Error('Test Error');
    i18nLoader.mockImplementation(() => Promise.reject(testError));
    useTestOverrides.mockImplementation(() => ({}));

    render((
      <ApplicationBase>
        <div data-testid="test-child" />
      </ApplicationBase>
    ));

    await waitFor(() => expect(logger.error).toHaveBeenCalledWith(testError));
  });

  test('loads messages for provided locale', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    i18nLoader.mockImplementation(() => Promise.resolve({ default: { test: 'message' } }));
    useTestOverrides.mockImplementation(() => ({}));

    render((
      <ApplicationBase locale="fr">
        <div data-testid="test-child" />
      </ApplicationBase>
    ));

    const child = await screen.findByTestId('test-child');

    expect(child).toBeInTheDocument();
    expect(i18nLoader).toHaveBeenCalledWith('fr');
  });

  test('loads messages for overridden locale', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    i18nLoader.mockImplementation(() => Promise.resolve({ default: { test: 'message' } }));
    useTestOverrides.mockImplementation(() => ({ localeOverride: 'es' }));

    render((
      <ApplicationBase locale="fr">
        <div data-testid="test-child" />
      </ApplicationBase>
    ));

    const child = await screen.findByTestId('test-child');

    expect(child).toBeInTheDocument();
    expect(i18nLoader).toHaveBeenCalledWith('es');
  });

  test('adds appropriate theme to document', async () => {
    i18nLoader.mockImplementation(() => Promise.resolve({ default: { test: 'message' } }));
    useTestOverrides.mockImplementation(() => ({ localeOverride: 'es' }));

    const view = render((
      <ApplicationBase themeName="test-theme">
        <div data-testid="test-child" />
      </ApplicationBase>
    ));

    await waitFor(() => expect(document.documentElement.classList.contains('test-theme')).toBeTruthy());

    view.rerender((
      <ApplicationBase themeName="test-theme-2">
        <div data-testid="test-child" />
      </ApplicationBase>
    ));

    await waitFor(() => expect(document.documentElement.classList.contains('test-theme')).toBeFalsy());
    await waitFor(() => expect(document.documentElement.classList.contains('test-theme-2')).toBeTruthy());
  });
});

