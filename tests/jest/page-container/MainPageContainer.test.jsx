import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainer from '../../../src/application-container';
import { MainPageContainer } from '../../../src/page-container';
import Logger from '../../../src/utils/logger';
import { ActiveMainContext } from '../../../src/main-container';

import MockApplication from '../MockApplication';
import MockPage from '../MockPage';

const TestMainPageContainer = (props) => (
  <MockApplication>
    <ApplicationContainer>
      <MainPageContainer {...props} />
    </ApplicationContainer>
  </MockApplication>
);

test('renders main element with provided children', () => {
  render((
    <TestMainPageContainer>
      <div data-testid="test-child" />
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: '' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
});

test('renders single Page child', async () => {
  const pageMetaData = { test: 'data' };
  let activeMainForTest;

  render((
    <TestMainPageContainer>
      <MockPage label="Test Page" metaData={pageMetaData}>
        <div data-testid="test-child" />
      </MockPage>
      <ActiveMainContext.Consumer>
        {(activeMain) => {
          activeMainForTest = activeMain;
          return <div />;
        }}
      </ActiveMainContext.Consumer>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  await waitFor(() => expect(activeMainForTest).toBeDefined());
  expect(activeMainForTest.label).toBe('Test Page');
  expect(activeMainForTest.metaData).toBe(pageMetaData);
});

test('renders multiple flat Page children gracefully with warning', () => {
  const mockWarn = jest.fn();
  jest.spyOn(Logger, 'warn').mockImplementation(mockWarn);

  const view = render((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
      <MockPage label="Redundant Page">
        <div data-testid="redundant-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(mockWarn).toHaveBeenCalledWith('[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page Redundant Page will not be displayed.');

  mockWarn.mockClear();

  view.rerender((
    <TestMainPageContainer>
      <MockPage label="Test Page With New Label">
        <div data-testid="test-child" />
      </MockPage>
      <MockPage key="force-update" label="Redundant Page">
        <div data-testid="redundant-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page With New Label' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(mockWarn).toHaveBeenCalledWith('[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page Redundant Page will not be displayed.');
});

test('renders nested Page children', async () => {
  const view = render((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestMainPageContainer>
      <MockPage label="Test Page With New Label">
        <div data-testid="test-child" />
        <MockPage label="Nested Page">
          <div data-testid="nested-child" />
        </MockPage>
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Nested Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('nested-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).not.toBeInTheDocument();

  await waitFor(() => expect(document.body).toHaveFocus());
});

test('handles complete Page removals', async () => {
  const pageMetaData = { test: 'data' };

  const view = render((
    <TestMainPageContainer>
      <MockPage label="Test Page" metaData={pageMetaData}>
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestMainPageContainer>
      <div data-testid="oops-no-pages" />
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: '' })).toBeInTheDocument();
  expect(screen.queryByTestId('oops-no-pages')).toBeInTheDocument();
});

test('handles changes to registered Page', () => {
  const view = render((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestMainPageContainer>
      <MockPage label="Test Page With New Label">
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page With New Label' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestMainPageContainer>
      <MockPage label="Test Page With New Label" metaData={{ new: 'data' }}>
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page With New Label' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
});

test('renders multiple nested Pages on initial mount', () => {
  render((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
        <MockPage label="Nested Page">
          <div data-testid="nested-child" />
          <MockPage label="Doubly Nested Page">
            <div data-testid="doubly-nested-child" />
          </MockPage>
        </MockPage>
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Doubly Nested Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('doubly-nested-child')).toBeInTheDocument();
});

test('renders multiple nested Pages after initial mount', () => {
  const view = render((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
        <MockPage label="Nested Page">
          <div data-testid="nested-child" />
          <MockPage label="Doubly Nested Page">
            <div data-testid="doubly-nested-child" />
          </MockPage>
        </MockPage>
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Doubly Nested Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('doubly-nested-child')).toBeInTheDocument();
});

test('renders multiple flat Pages gracefully after initial mount with warning', () => {
  const view = render((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();

  view.rerender((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
        <MockPage label="Nested Page">
          <div data-testid="nested-child" />
        </MockPage>
        <MockPage label="Oops Page">
          <div data-testid="oops-child" />
        </MockPage>
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Nested Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('nested-child')).toBeInTheDocument();
});

test('handles multiple nested Page removals after initial mount', () => {
  const view = render((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
        <MockPage label="Nested Page">
          <div data-testid="nested-child" />
          <MockPage label="Doubly Nested Page">
            <div data-testid="doubly-nested-child" />
          </MockPage>
        </MockPage>
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Doubly Nested Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('doubly-nested-child')).toBeInTheDocument();

  view.rerender((
    <TestMainPageContainer>
      <MockPage label="Test Page">
        <div data-testid="test-child" />
      </MockPage>
    </TestMainPageContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Page' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
});
