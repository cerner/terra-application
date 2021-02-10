import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import DynamicOverlayContainer from '../../../src/workspace/shared/DynamicOverlayContainer';

import MockApplication from '../MockApplication';

// Mocking inert if necessary
if (!Element.prototype.hasOwnProperty('inert')) { // eslint-disable-line no-prototype-builtins
  Object.defineProperty(Element.prototype, 'inert', {
    enumerable: true,
    /** @this {!Element} */
    get() {
      return this.getAttribute('inert');
    },
    /** @this {!Element} */
    set(inert) {
      if (inert) {
        this.setAttribute('inert', true);
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

const FocusTestOverlay = ({ onShow, onDismiss, id }) => (
  <div data-testid={`test-overlay-${id}`} tabIndex="-1">
    {onShow ? <button type="button" onClick={onShow} data-testid={`test-overlay-${id}-show`}>Show</button> : null}
    <button type="button" onClick={onDismiss} data-testid={`test-overlay-${id}-dismiss`}>Dismiss</button>
  </div>
);

const OverlayFocusTestHarness = () => {
  const [showOverlay1, setShowOverlay1] = React.useState();
  const [showOverlay2, setShowOverlay2] = React.useState();

  const overlays = [];
  if (showOverlay1) {
    overlays.push({ key: '1', component: <FocusTestOverlay id="1" onShow={() => { setShowOverlay2(true); }} onDismiss={() => { setShowOverlay1(false); }} /> });
  }

  if (showOverlay2) {
    overlays.push({ key: '2', component: <FocusTestOverlay id="2" onDismiss={() => { setShowOverlay2(false); }} /> });
  }

  return (
    <MockApplication>
      <DynamicOverlayContainer overlays={overlays}>
        <div data-testid="test-child" tabIndex="-1">
          <button
            type="button"
            data-testid="test-child-show"
            onClick={() => {
              setShowOverlay1(true);
            }}
          >
            Show
          </button>
        </div>
      </DynamicOverlayContainer>
    </MockApplication>
  );
};

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

test('should reapply focus to reactivated layers', () => {
  render((
    <OverlayFocusTestHarness />
  ));

  userEvent.click(screen.getByTestId('test-child-show'));

  expect(screen.getByTestId('dynamic-overlay-container')).toHaveFocus();

  userEvent.click(screen.getByTestId('test-overlay-1-show'));

  expect(screen.getByTestId('dynamic-overlay-container')).toHaveFocus();

  debugger;

  userEvent.click(screen.getByTestId('test-overlay-2-dismiss'));

  expect(screen.getByTestId('test-overlay-1-show')).toHaveFocus();

  userEvent.click(screen.getByTestId('test-overlay-1-dismiss'));

  expect(screen.getByTestId('test-child-show')).toHaveFocus();
});

