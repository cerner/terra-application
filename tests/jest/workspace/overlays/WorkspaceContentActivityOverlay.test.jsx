import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { WorkspaceContentActivityOverlay } from '../../../../src/workspace';

import MockApplication from '../../MockApplication';

const TestWorkspaceContentActivityOverlay = (props) => (
  <MockApplication>
    <WorkspaceContentActivityOverlay {...props} />
  </MockApplication>
);

test('renders activity status indicator', () => {
  render(<TestWorkspaceContentActivityOverlay />);

  expect(screen.getByRole('status')).toBeInTheDocument();
});

test('renders text for loading variant', () => {
  render(<TestWorkspaceContentActivityOverlay variant="loading" />);

  expect(screen.getByRole('status')).toHaveTextContent('terraApplication.workspace.activityOverlay.loading');
});

