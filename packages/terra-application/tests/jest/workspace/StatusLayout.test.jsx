import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StatusLayout from '../../../src/workspace/shared/StatusLayout';
import StatusLayoutButton from '../../../src/workspace/shared/StatusLayoutButton';
import MockApplication from '../MockApplication';

const TestStatusLayout = (props) => (
  <MockApplication>
    <StatusLayout {...props} />
  </MockApplication>
);

test('should render with variant image and title', () => {
  render((
    <TestStatusLayout variant="no-data" />
  ));

  expect(screen.getByTestId('status-layout-glyph-no-data')).toBeInTheDocument();
  expect(screen.getByText('terraApplication.statusLayout.no-data')).toBeInTheDocument();
});

test('should render with message', () => {
  render((
    <TestStatusLayout message="Test Message" />
  ));

  expect(screen.getByText('Test Message')).toBeInTheDocument();
});

test('should render with actions', () => {
  render((
    <TestStatusLayout>
      <StatusLayoutButton text="Test Action 1" />
      <StatusLayoutButton text="Test Action 2" />
    </TestStatusLayout>
  ));

  expect(screen.getByText('Test Action 1')).toBeInTheDocument();
  expect(screen.getByText('Test Action 2')).toBeInTheDocument();
});

test('should render with divider when title and actions are present', () => {
  render((
    <TestStatusLayout variant="error">
      <StatusLayoutButton text="Test Action 1" />
    </TestStatusLayout>
  ));

  expect(screen.getByTestId('status-layout-divider')).toBeInTheDocument();
});

test('should render with divider when title and message are present', () => {
  render((
    <TestStatusLayout variant="error" message="Test Message" />
  ));

  expect(screen.getByTestId('status-layout-divider')).toBeInTheDocument();
});

