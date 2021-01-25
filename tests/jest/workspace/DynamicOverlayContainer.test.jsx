import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DynamicOverlayContainer from '../../../src/workspace/shared/DynamicOverlayContainer';

import MockApplication from '../MockApplication';

// Mocking inert if necessary
if (!Element.prototype.hasOwnProperty('inert')) {
  Object.defineProperty(Element.prototype, 'inert', {
    enumerable: true,
    /** @this {!Element} */
    get() {
      return this.getAttribute('inert');
    },
    /** @this {!Element} */
    set(inert) {
      if (inert) {
        this.setAttribute('inert', '');
      } else {
        this.removeAttribute('inert');
      }
    },
  });
}

const TestDynamicOverlayContainer = (props) => (
  <MockApplication>
    <DynamicOverlayContainer {...props} />
  </MockApplication>
);

test('should render provided children', () => {
  render((
    <TestDynamicOverlayContainer>
      <div data-testid="test-child">Test Content</div>
    </TestDynamicOverlayContainer>
  ));

  expect(screen.getByTestId('test-child')).toBeInTheDocument();
});

test('should render provided overlays', () => {
  render((
    <TestDynamicOverlayContainer
      overlays={[{ key: '1', component: <div data-testid="overlay1" /> }, { key: '2', component: <div data-testid="overlay2" /> }]}
    >
      <div data-testid="test-child">Test Content</div>
    </TestDynamicOverlayContainer>
  ));

  expect(screen.getByTestId('test-child')).toBeInTheDocument();
  expect(screen.getByTestId('overlay1')).toBeInTheDocument();
  expect(screen.getByTestId('overlay2')).toBeInTheDocument();
});

test('should inert relevant layers based upon overlay presence', () => {
  const view = render((
    <TestDynamicOverlayContainer
      overlays={[{ key: '1', component: <div data-testid="overlay1" /> }, { key: '2', component: <div data-testid="overlay2" /> }]}
    >
      <div data-testid="test-child">Test Content</div>
    </TestDynamicOverlayContainer>
  ));

  let childElement = screen.getByTestId('test-child');
  let overlay1Element = screen.getByTestId('overlay1');
  let overlay2Element = screen.getByTestId('overlay2');

  expect(childElement.parentElement).toHaveAttribute('inert');
  expect(overlay1Element.parentElement).toHaveAttribute('inert');
  expect(overlay2Element.parentElement).not.toHaveAttribute('inert');

  view.rerender((
    <TestDynamicOverlayContainer
      overlays={[{ key: '1', component: <div data-testid="overlay1" /> }]}
    >
      <div data-testid="test-child">Test Content</div>
    </TestDynamicOverlayContainer>
  ));

  childElement = screen.getByTestId('test-child');
  overlay1Element = screen.getByTestId('overlay1');

  expect(childElement.parentElement).toHaveAttribute('inert');
  expect(overlay1Element.parentElement).not.toHaveAttribute('inert');

  view.rerender((
    <TestDynamicOverlayContainer>
      <div data-testid="test-child">Test Content</div>
    </TestDynamicOverlayContainer>
  ));

  childElement = screen.getByTestId('test-child');

  expect(childElement.parentElement).not.toHaveAttribute('inert');

  view.rerender((
    <TestDynamicOverlayContainer
      overlays={[{ key: '1', component: <div data-testid="overlay1" /> }, { key: '2', component: <div data-testid="overlay2" /> }]}
    >
      <div data-testid="test-child">Test Content</div>
    </TestDynamicOverlayContainer>
  ));

  childElement = screen.getByTestId('test-child');
  overlay1Element = screen.getByTestId('overlay1');
  overlay2Element = screen.getByTestId('overlay2');

  expect(childElement.parentElement).toHaveAttribute('inert');
  expect(overlay1Element.parentElement).toHaveAttribute('inert');
  expect(overlay2Element.parentElement).not.toHaveAttribute('inert');
});
