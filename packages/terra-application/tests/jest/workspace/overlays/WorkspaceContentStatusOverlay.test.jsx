import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { WorkspaceContentStatusOverlay, WorkspaceContentStatusOverlayButton } from '../../../../src/workspace';

import MockApplication from '../../MockApplication';

const TestWorkspaceContentStatusOverlay = (props) => (
  <MockApplication>
    <WorkspaceContentStatusOverlay {...props} />
  </MockApplication>
);

test('renders the status indicator', () => {
  render(<TestWorkspaceContentStatusOverlay />);

  expect(screen.getByRole('status')).toBeInTheDocument();
});

test('renders the status indicator', () => {
  render((
    <TestWorkspaceContentStatusOverlay variant="error" message="Test Message">
      <WorkspaceContentStatusOverlayButton text="Button1" />
      <WorkspaceContentStatusOverlayButton text="Button2" />
    </TestWorkspaceContentStatusOverlay>
  ));

  expect(screen.getByRole('status')).toBeInTheDocument();
  expect(screen.getByRole('status')).toHaveTextContent('terraApplication.statusLayout.error');
  expect(screen.getByRole('status')).toHaveTextContent('Test Message');
  expect(screen.getByText('Button1')).toBeInTheDocument();
  expect(screen.getByText('Button2')).toBeInTheDocument();
});

