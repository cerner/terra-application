import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainer from '../../../src/application-container';
import PageContainer from '../../../src/page-container';
import Logger from '../../../src/utils/logger';

import MockApplication from '../MockApplication';
import MockPage from '../MockPage';

const TestPageContainer = (props) => (
  <MockApplication>
    <ApplicationContainer>
      <PageContainer {...props} />
    </ApplicationContainer>
  </MockApplication>
);

test('renders div element with provided children', () => {
  render((
    <TestPageContainer>
      <div data-testid="test-child" />
    </TestPageContainer>
  ));

  expect(screen.queryByTestId('page-container')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
});

test('renders single Page child', async () => {
  render((
    <TestPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
    </TestPageContainer>
  ));

  expect(screen.queryByLabelText('Test Page')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
});

test('renders multiple flat Page children gracefully', () => {
  const mockWarn = jest.fn();
  jest.spyOn(Logger, 'warn').mockImplementation(mockWarn);

  const view = render((
    <TestPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
      <MockPage label="Redundant Page">
        <div data-testid="redundant-child" />
      </MockPage>
    </TestPageContainer>
  ));

  expect(screen.queryByLabelText('Test Page')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(mockWarn).toHaveBeenCalledWith('[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page Redundant Page will not be displayed.');

  mockWarn.mockClear();

  view.rerender((
    <TestPageContainer>
      <MockPage label="Test Page With New Label">
        <div data-testid="test-child" />
      </MockPage>
      <MockPage key="force-update" label="Redundant Page">
        <div data-testid="redundant-child" />
      </MockPage>
    </TestPageContainer>
  ));

  expect(screen.queryByLabelText('Test Page With New Label')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(mockWarn).toHaveBeenCalledWith('[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page Redundant Page will not be displayed.');
});

test('renders nested Page children', async () => {
  const view = render((
    <TestPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
    </TestPageContainer>
  ));

  expect(screen.queryByLabelText('Test Page')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestPageContainer>
      <MockPage label="Test Page With New Label">
        <div data-testid="test-child" />
        <MockPage label="Nested Page">
          <div data-testid="nested-child" />
        </MockPage>
      </MockPage>
    </TestPageContainer>
  ));

  expect(screen.queryByLabelText('Nested Page')).toBeInTheDocument();
  expect(screen.queryByTestId('nested-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).not.toBeInTheDocument();

  await waitFor(() => expect(screen.queryByLabelText('Nested Page')).toHaveFocus());
});

test('handles complete Page removals', async () => {
  const pageMetaData = { test: 'data' };

  const view = render((
    <TestPageContainer>
      <MockPage label="Test Page" metaData={pageMetaData}>
        <div data-testid="test-child" />
      </MockPage>
    </TestPageContainer>
  ));

  expect(screen.queryByLabelText('Test Page')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestPageContainer>
      <div data-testid="oops-no-pages" />
    </TestPageContainer>
  ));

  expect(screen.queryByLabelText('Test Page')).toBeNull();
  expect(screen.queryByTestId('page-container')).toBeInTheDocument();
  expect(screen.queryByTestId('oops-no-pages')).toBeInTheDocument();
});
