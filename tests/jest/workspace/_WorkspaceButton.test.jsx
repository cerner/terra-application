import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import WorkspaceButton from '../../../src/workspace/subcomponents/_WorkspaceButton';

test('should render button with given label and icon', () => {
  render(<WorkspaceButton ariaLabel="Test Label" icon={<span data-testid="test-icon" />} />);

  expect(screen.getByLabelText('Test Label', { selector: 'div[role=button]' })).toBeInTheDocument();
  expect(screen.getByTestId('test-icon')).toBeInTheDocument();
});

test('should render button as active', () => {
  render(<WorkspaceButton ariaLabel="Test Label" icon={<span data-testid="test-icon" />} isActive />);

  expect(screen.getByLabelText('Test Label', { selector: 'div[role=button]' })).toHaveClass('is-active');
});

test('should render button with test id', () => {
  render(<WorkspaceButton ariaLabel="Test Label" icon={<span data-testid="test-icon" />} testId="test-id" />);

  expect(screen.getByLabelText('Test Label', { selector: 'div[role=button]' })).toHaveAttribute('data-testid', 'test-id');
});

test('should render button with selection callback on click', () => {
  const mockOnActivate = jest.fn();

  render(<WorkspaceButton ariaLabel="Test Label" icon={<span data-testid="test-icon" />} onActivate={mockOnActivate} />);

  userEvent.click(screen.getByLabelText('Test Label', { selector: 'div[role=button]' }));

  expect(mockOnActivate).toHaveBeenCalled();
});

test('should render button with selection callback on space keypress', () => {
  const mockOnActivate = jest.fn();

  render(<WorkspaceButton ariaLabel="Test Label" icon={<span data-testid="test-icon" />} onActivate={mockOnActivate} />);

  screen.getByLabelText('Test Label', { selector: 'div[role=button]' }).focus();

  userEvent.type(screen.getByLabelText('Test Label', { selector: 'div[role=button]' }), '{space}', { skipClick: true });

  expect(mockOnActivate).toHaveBeenCalled();
});

test('should render button with selection callback on enter keypress', () => {
  const mockOnActivate = jest.fn();

  render(<WorkspaceButton ariaLabel="Test Label" icon={<span data-testid="test-icon" />} onActivate={mockOnActivate} />);

  screen.getByLabelText('Test Label', { selector: 'div[role=button]' }).focus();

  userEvent.type(screen.getByLabelText('Test Label', { selector: 'div[role=button]' }), '{enter}', { skipClick: true });

  expect(mockOnActivate).toHaveBeenCalled();
});

