import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import MainContainer from '../../../src/main-container/MainContainer';
import ApplicationContainer from '../../../src/application-container/ApplicationContainer';
import MockApplication from '../MockApplication';

const TestMainContainer = (props) => (
  <MockApplication>
    <ApplicationContainer>
      <MainContainer {...props} />
    </ApplicationContainer>
  </MockApplication>
);

test('renders main element', () => {
  render((
    <TestMainContainer label="Test Main Container">
      <div data-testid="test-child" />
    </TestMainContainer>
  ));

  expect(screen.queryByRole('main', { name: 'Test Main Container' })).toBeInTheDocument();
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
});

test('renders main with custom class and attributes', () => {
  render((
    <TestMainContainer label="Test Main Container" data-testid="test-id" className="test-class" />
  ));

  expect(screen.queryByRole('main', { name: 'Test Main Container' })).toHaveAttribute('data-testid', 'test-id');
  expect(screen.queryByRole('main', { name: 'Test Main Container' })).toHaveClass('test-class');
});

test('renders with refCallback', () => {
  const refCallback = jest.fn();
  render((
    <TestMainContainer label="Test Main Container" refCallback={refCallback} />
  ));

  expect(refCallback).toHaveBeenCalledWith(expect.any(Object));
});

test('renders SkipToLink', async () => {
  let mainRef;
  render((
    <TestMainContainer label="Test Main Container" refCallback={(ref) => { mainRef = ref; }} />
  ));

  const skipToLinks = screen.queryAllByRole('link', { name: 'terraApplication.skipToLink.prefix' });

  skipToLinks[0].focus();
  userEvent.click(skipToLinks[0]);
  await waitFor(() => expect(mainRef).toHaveFocus());
});
