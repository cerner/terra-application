import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import 'terra-base';
import { IntlProvider } from 'react-intl';

import BannerRegistrationContext from '../../../src/banner/private/BannerRegistrationContext';
import Banner, { BannerProvider } from '../../../src/banner';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { messages } from '../../../aggregated-translations/en'; // aggregation is pre-jest step so this will exist

jest.mock('terra-base');
global.console.warn = jest.fn();

let keyValue = 0;
const mockBannerProps = { type: 'error', 'data-testid': 'rendered-banner' };

// eslint-disable-next-line react/prop-types
const ChildContent = ({ showBannerOnRender = false, buttonId = 'show-banner', children = null }) => {
  const [hasBanner, setHasBanner] = useState(showBannerOnRender);
  keyValue += 1;
  return (
    <div>
      <button
        type="button"
        data-testid={buttonId}
        onClick={() => setHasBanner(!hasBanner)}
      >
        Toggle Banner
      </button>
      {hasBanner ? <Banner {...mockBannerProps} key={keyValue} /> : null}
      {children}
    </div>
  );
};

const renderComponentWithChild = (childrenContent, checkpointProps = {}) => {
  let childContext;

  const component = render(
    <IntlProvider locale="en" messages={messages}>
      <BannerProvider {...checkpointProps}>
        <BannerRegistrationContext.Consumer>
          {(context) => {
            childContext = context;
            return childrenContent;
          }}
        </BannerRegistrationContext.Consumer>
      </BannerProvider>
    </IntlProvider>,
  );

  return { component, context: childContext };
};

describe('BannerProvider', () => {
  beforeEach(() => {
    jest.resetAllMocks;
    // eslint-disable-next-line no-console
    console.warn.mockClear();
  });

  it('renders with children', () => {
    const { component } = renderComponentWithChild(null);
    expect(component.container).toMatchSnapshot();
  });

  it('renders with children', () => {
    const { component } = renderComponentWithChild(<div>child</div>);

    expect(component.container).toMatchSnapshot();
  });

  it('renders with children that has a an banner', () => {
    const { component } = renderComponentWithChild(<ChildContent showBannerOnRender />);

    expect(component.container).toMatchSnapshot();
  });

  describe('registerBanner', () => {
    it('provides registerBanner callback in context', () => {
      const { context } = renderComponentWithChild();

      expect(context).toBeDefined();
      expect(context).toHaveProperty('registerBanner', expect.any(Function));
    });

    it('does not register banner if no id is provided', () => {
      const { component, context } = renderComponentWithChild();
      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(0);

      context.registerBanner(undefined, mockBannerProps);

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith('A banner cannot be registered without an identifier.');
      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(0);
    });

    it('registers banner when id is provided', () => {
      const { component, context } = renderComponentWithChild();
      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(0);

      act(() => {
        context.registerBanner('mockID', mockBannerProps);
      });

      // eslint-disable-next-line no-console
      expect(console.warn).not.toHaveBeenCalledWith('A banner cannot be registered without an identifier.');
      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);
    });

    it('registers banner when rendered after mount', () => {
      const { component } = renderComponentWithChild(<ChildContent />);

      expect(component.container).toMatchSnapshot();

      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);
      expect(component.container).toMatchSnapshot();
    });
  });

  describe('unregistersBanner', () => {
    it('provides unregisterBanner callback in context', () => {
      const { context } = renderComponentWithChild();

      expect(context).toBeDefined();
      expect(context).toHaveProperty('unregisterBanner', expect.any(Function));
    });

    it('does not unregister banner if no id is provided', () => {
      const { component, context } = renderComponentWithChild(<ChildContent showBannerOnRender />);

      // eslint-disable-next-line no-console
      console.warn.mockClear(); // clear terra-responsive-element will be deprecated warning

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);

      context.unregisterBanner(undefined);

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith('A banner cannot be unregistered without an identifier or banner type.');
      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);
    });

    it('does not unregister banner if banner type is not provided', () => {
      const { component, context } = renderComponentWithChild(<ChildContent showBannerOnRender />);

      // eslint-disable-next-line no-console
      console.warn.mockClear(); // clear terra-responsive-element will be deprecated warning

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);

      context.unregisterBanner('mockID', undefined);

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith('A banner cannot be unregistered without an identifier or banner type.');
      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);
    });

    it('unregisters banner when id is provided', () => {
      const { component } = renderComponentWithChild(<ChildContent showBannerOnRender />);
      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);

      expect(component.container).toMatchSnapshot();

      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(0);
      expect(component.container).toMatchSnapshot();
    });
  });

  describe(('Nested Banner Checkpoint'), () => {
    it('registers banner with top-level Banner Checkpoint', () => {
      const childComponent = (
        <ChildContent>
          <BannerProvider>
            <ChildContent buttonId="show-2nd-banner" />
          </BannerProvider>
        </ChildContent>
      );
      const { component } = renderComponentWithChild(childComponent);
      expect(component.container).toMatchSnapshot();

      // trigger top checkpoint's banner
      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);
      expect(component.container).toMatchSnapshot();

      // trigger nested banner checkpoint's banner
      const secondChildButton = component.getByTestId('show-2nd-banner');
      act(() => {
        fireEvent.click(secondChildButton);
      });

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(2);
      expect(component.container).toMatchSnapshot();
    });

    it('unregisters banner with top-level Banner Checkpoint', () => {
      const childComponent = (
        <ChildContent showBannerOnRender>
          <BannerProvider>
            <ChildContent buttonId="show-2nd-banner" showBannerOnRender />
          </BannerProvider>
        </ChildContent>
      );
      const { component } = renderComponentWithChild(childComponent);

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(2);

      expect(component.container).toMatchSnapshot();

      // remove top checkpoint's banner
      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(1);
      expect(component.container).toMatchSnapshot();

      // remove nested banner checkpoint's banner
      const secondChildButton = component.getByTestId('show-2nd-banner');
      act(() => {
        fireEvent.click(secondChildButton);
      });

      expect(component.queryAllByTestId('rendered-banner')).toHaveLength(0);
      expect(component.container).toMatchSnapshot();
    });
  });
});
