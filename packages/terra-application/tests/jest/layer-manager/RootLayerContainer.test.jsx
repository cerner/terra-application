import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RootLayerContainer from '../../../src/layer-manager/RootLayerContainer';
import Logger from '../../../src/utils/logger';

import MockApplication from '../MockApplication';
import MockLayer from '../MockLayer';

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

const TestLayerContainer = (props) => (
  <MockApplication>
    <RootLayerContainer {...props} />
  </MockApplication>
);

test('renders provided children', () => {
  render((
    <TestLayerContainer>
      <div data-testid="test-child" />
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
});

test('renders layers along with children', () => {
  const view = render((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal">
        <div data-testid="test-modal-child" />
      </MockLayer>
    </TestLayerContainer>
  ));
  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeNull();
  expect(view.asFragment()).toMatchSnapshot();
});

test('renders duplicate layers to the render queue', () => {
  const view = render((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal">
        <div data-testid="test-modal-child-1" />
      </MockLayer>
      <MockLayer layerType="modal">
        <div data-testid="test-modal-child-2" />
      </MockLayer>
      <MockLayer layerType="modal">
        <div data-testid="test-modal-child-3" />
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-1')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-2')).toBeNull();
  expect(screen.queryByTestId('test-modal-child-3')).toBeNull();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal">
        <div data-testid="test-modal-child-2" />
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-1')).toBeNull();
  expect(screen.queryByTestId('test-modal-child-2')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-3')).toBeNull();
  expect(view.asFragment()).toMatchSnapshot();
});

test('renders multiple layer types appropriately', () => {
  const view = render((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child" />
      </MockLayer>
      <MockLayer layerType="notificationDialog" key="layer-2">
        <div data-testid="test-notification-dialog-child" />
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-notification-dialog-child')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="notificationDialog" key="layer-2">
        <div data-testid="test-notification-dialog-child" />
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeNull();
  expect(screen.queryByTestId('test-notification-dialog-child')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  // Test scenario where lower layer is injected below active layer
  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="notificationDialog" key="layer-2">
        <div data-testid="test-notification-dialog-child" />
      </MockLayer>
      <MockLayer layerType="modal">
        <div data-testid="test-modal-child-again" key="layer-3" />
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-again')).toBeInTheDocument();
  expect(screen.queryByTestId('test-notification-dialog-child')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();
});

test('renders nested layers appropriately', () => {
  const view = render((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child" />
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child" />
        <MockLayer layerType="modal" key="nested-layer-1">
          <div data-testid="test-nested-modal-child-1" />
        </MockLayer>
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-nested-modal-child-1')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child" />
        <MockLayer layerType="modal" key="nested-layer-1">
          <div data-testid="test-nested-modal-child-1" />
        </MockLayer>
        <MockLayer layerType="modal" key="nested-layer-2">
          <div data-testid="test-nested-modal-child-2" />
        </MockLayer>
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-nested-modal-child-1')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child" />
        <MockLayer layerType="modal" key="nested-layer-2">
          <div data-testid="test-nested-modal-child-2" />
        </MockLayer>
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-nested-modal-child-1')).toBeNull();
  expect(screen.queryByTestId('test-nested-modal-child-2')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child')).toBeNull();
  expect(screen.queryByTestId('test-nested-modal-child-2')).toBeNull();
  expect(view.asFragment()).toMatchSnapshot();
});

test('renders complex layer registration on initial mount', () => {
  const view = render((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child-1" />
        <MockLayer layerType="modal" key="layer-2">
          <div data-testid="test-modal-child-2" />
          <MockLayer layerType="modal" key="layer-3">
            <div data-testid="test-modal-child-3" />
            <MockLayer layerType="modal" key="layer-4">
              <div data-testid="test-modal-child-4" />
            </MockLayer>
          </MockLayer>
        </MockLayer>
      </MockLayer>
      <MockLayer layerType="notificationDialog" key="layer-5">
        <div data-testid="test-notification-dialog-child-1" />
        <MockLayer layerType="notificationDialog" key="layer-6">
          <div data-testid="test-notification-dialog-child-2" />
        </MockLayer>
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-1')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-2')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-3')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-4')).toBeInTheDocument();
  expect(screen.queryByTestId('test-notification-dialog-child-1')).toBeInTheDocument();
  expect(screen.queryByTestId('test-notification-dialog-child-2')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();
});

test('renders a series of nested layers after initial rendering', () => {
  const view = render((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child-1" />
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-1')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();

  view.rerender((
    <TestLayerContainer>
      <div data-testid="test-child" />
      <MockLayer layerType="modal" key="layer-1">
        <div data-testid="test-modal-child-1" />
        <MockLayer layerType="modal" key="nested-layer-1">
          <div data-testid="test-nested-modal-child-1" />
          <MockLayer layerType="modal" key="nested-layer-2">
            <div data-testid="test-nested-modal-child-2" />
          </MockLayer>
        </MockLayer>
      </MockLayer>
    </TestLayerContainer>
  ));

  expect(screen.queryByTestId('test-child')).toBeInTheDocument();
  expect(screen.queryByTestId('test-modal-child-1')).toBeInTheDocument();
  expect(screen.queryByTestId('test-nested-modal-child-1')).toBeInTheDocument();
  expect(screen.queryByTestId('test-nested-modal-child-2')).toBeInTheDocument();
  expect(view.asFragment()).toMatchSnapshot();
});

// test('renders multiple flat Page children gracefully', () => {
//   const mockWarn = jest.fn();
//   jest.spyOn(Logger, 'warn').mockImplementation(mockWarn);

//   const view = render((
//     <TestPageContainer>
//       <MockPage label="Test Page">
//         <div data-testid="test-child" />
//       </MockPage>
//       <MockPage label="Redundant Page">
//         <div data-testid="redundant-child" />
//       </MockPage>
//     </TestPageContainer>
//   ));

//   expect(screen.queryByLabelText('Test Page')).toBeInTheDocument();
//   expect(screen.queryByTestId('test-child')).toBeInTheDocument();
//   expect(mockWarn).toHaveBeenCalledWith('[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page Redundant Page will not be displayed.');

//   mockWarn.mockClear();

//   view.rerender((
//     <TestPageContainer>
//       <MockPage label="Test Page With New Label">
//         <div data-testid="test-child" />
//       </MockPage>
//       <MockPage key="force-update" label="Redundant Page">
//         <div data-testid="redundant-child" />
//       </MockPage>
//     </TestPageContainer>
//   ));

//   expect(screen.queryByLabelText('Test Page With New Label')).toBeInTheDocument();
//   expect(screen.queryByTestId('test-child')).toBeInTheDocument();
//   expect(mockWarn).toHaveBeenCalledWith('[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page Redundant Page will not be displayed.');
// });

// test('renders nested Page children', async () => {
//   const view = render((
//     <TestPageContainer>
//       <MockPage label="Test Page">
//         <div data-testid="test-child" />
//       </MockPage>
//     </TestPageContainer>
//   ));

//   expect(screen.queryByLabelText('Test Page')).toBeInTheDocument();
//   expect(screen.queryByTestId('test-child')).toBeInTheDocument();

//   view.rerender((
//     <TestPageContainer>
//       <MockPage label="Test Page With New Label">
//         <div data-testid="test-child" />
//         <MockPage label="Nested Page">
//           <div data-testid="nested-child" />
//         </MockPage>
//       </MockPage>
//     </TestPageContainer>
//   ));

//   expect(screen.queryByLabelText('Nested Page')).toBeInTheDocument();
//   expect(screen.queryByTestId('nested-child')).toBeInTheDocument();
//   expect(screen.queryByTestId('test-child')).not.toBeInTheDocument();

//   await waitFor(() => expect(screen.queryByLabelText('Nested Page')).toHaveFocus());
// });

// test('handles complete Page removals', async () => {
//   const pageMetaData = { test: 'data' };

//   const view = render((
//     <TestPageContainer>
//       <MockPage label="Test Page" metaData={pageMetaData}>
//         <div data-testid="test-child" />
//       </MockPage>
//     </TestPageContainer>
//   ));

//   expect(screen.queryByLabelText('Test Page')).toBeInTheDocument();
//   expect(screen.queryByTestId('test-child')).toBeInTheDocument();

//   view.rerender((
//     <TestPageContainer>
//       <div data-testid="oops-no-pages" />
//     </TestPageContainer>
//   ));

//   expect(screen.queryByLabelText('Test Page')).toBeNull();
//   expect(screen.queryByTestId('page-container')).toBeInTheDocument();
//   expect(screen.queryByTestId('oops-no-pages')).toBeInTheDocument();
// });
