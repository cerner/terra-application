import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import 'terra-base';
import { IntlProvider } from 'react-intl';

import BannerRegistrationContext from '../../../../src/notification-banner/private/BannerRegistrationContext';
import NotificationBanner from '../../../../src/notification-banner';
import useNotificationBanners from '../../../../src/notification-banner/private/useNotificationBanners';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { messages } from '../../../../aggregated-translations/en'; // aggregation is pre-jest step so this will exist

jest.mock('terra-base');
global.console.warn = jest.fn();

let keyValue = 0;
const mockBannerProps = { variant: 'error' };

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
        Toggle Notification Banner
      </button>
      {hasBanner ? <NotificationBanner {...mockBannerProps} key={keyValue} /> : null}
      {children}
    </div>
  );
};

const renderComponentWithChild = (childrenContent) => {
  let childContext;

  const ExampleWithBannerProvider = () => {
    const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

    return (
      <IntlProvider locale="en" messages={messages}>
        <NotificationBannerProvider>
          <NotificationBanners />
          <BannerRegistrationContext.Consumer>
            {(context) => {
              childContext = context;
              return childrenContent;
            }}
          </BannerRegistrationContext.Consumer>
        </NotificationBannerProvider>
      </IntlProvider>
    );
  };
  const component = render(<ExampleWithBannerProvider />);

  return { component, context: childContext };
};

describe('useNotificationBanners', () => {
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

  describe('NotificationBannerProvider.registerNotificationBanner', () => {
    it('provides registerNotificationBanner callback in context', () => {
      const { context } = renderComponentWithChild();

      expect(context).toBeDefined();
      expect(context).toHaveProperty('registerNotificationBanner', expect.any(Function));
    });

    it('does not register banner if no id is provided', () => {
      const { component, context } = renderComponentWithChild();
      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(0);

      expect(() => context.registerNotificationBanner(undefined, mockBannerProps)).toThrowError('A banner cannot be registered without an identifier.');

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(0);
    });

    it('registers banner when id is provided', () => {
      expect.assertions(3);
      const { component, context } = renderComponentWithChild();
      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(0);

      expect(() => act(() => {
        context.registerNotificationBanner('mockID', mockBannerProps);
      })).not.toThrowError('A banner cannot be registered without an identifier.');

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);
    });

    it('registers banner when rendered after mount', () => {
      const { component } = renderComponentWithChild(<ChildContent />);

      expect(component.container).toMatchSnapshot();

      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);
      expect(component.container).toMatchSnapshot();
    });
  });

  describe('NotificationBannerProvider.unregisterNotificationBanner', () => {
    it('provides unregisterNotificationBanner callback in context', () => {
      const { context } = renderComponentWithChild();

      expect(context).toBeDefined();
      expect(context).toHaveProperty('unregisterNotificationBanner', expect.any(Function));
    });

    it('does not unregister notification banner if no id is provided', () => {
      const { component, context } = renderComponentWithChild(<ChildContent showBannerOnRender />);

      // eslint-disable-next-line no-console
      console.warn.mockClear(); // clear terra-responsive-element will be deprecated warning

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);

      expect(() => context.unregisterNotificationBanner(undefined)).toThrowError('A banner cannot be unregistered without an identifier or banner variant.');

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);
    });

    it('does not unregister notification banner if banner variant is not provided', () => {
      const { component, context } = renderComponentWithChild(<ChildContent showBannerOnRender />);

      // eslint-disable-next-line no-console
      console.warn.mockClear(); // clear terra-responsive-element will be deprecated warning

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);

      // context.unregisterNotificationBanner('mockID', undefined);
      expect(() => context.unregisterNotificationBanner('mockID', undefined)).toThrowError('A banner cannot be unregistered without an identifier or banner variant.');

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);
    });

    it('unregisters notification banner when id is provided', () => {
      const { component } = renderComponentWithChild(<ChildContent showBannerOnRender />);
      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);

      expect(component.container).toMatchSnapshot();

      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(0);
      expect(component.container).toMatchSnapshot();
    });
  });

  describe(('Nested Notification Banner Provider'), () => {
    it('registers notification banner with top-level Banner Provider', () => {
      const ChildComponent = () => {
        const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();
        return (
          <ChildContent>
            <NotificationBannerProvider>
              <NotificationBanners />
              <ChildContent buttonId="show-2nd-banner" />
            </NotificationBannerProvider>
          </ChildContent>
        );
      };
      const { component } = renderComponentWithChild(<ChildComponent />);
      expect(component.container).toMatchSnapshot();

      // trigger top Provider's banner
      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);
      expect(component.container).toMatchSnapshot();

      // trigger nested banner Provider's banner
      const secondChildButton = component.getByTestId('show-2nd-banner');
      act(() => {
        fireEvent.click(secondChildButton);
      });

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(2);
      expect(component.container).toMatchSnapshot();
    });

    it('unregisters banner with top-level Banner Provider', () => {
      const ChildComponent = () => {
        const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();
        return (
          <ChildContent showBannerOnRender>
            <NotificationBannerProvider>
              <NotificationBanners />
              <ChildContent buttonId="show-2nd-banner" showBannerOnRender />
            </NotificationBannerProvider>
          </ChildContent>
        );
      };
      const { component } = renderComponentWithChild(<ChildComponent />);

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(2);

      expect(component.container).toMatchSnapshot();

      // remove top Provider's banner
      const childButton = component.getByTestId('show-banner');
      act(() => {
        fireEvent.click(childButton);
      });

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(1);
      expect(component.container).toMatchSnapshot();

      // remove nested banner Provider's banner
      const secondChildButton = component.getByTestId('show-2nd-banner');
      act(() => {
        fireEvent.click(secondChildButton);
      });

      expect(component.container.querySelectorAll('[data-terra-application-notification-banner]')).toHaveLength(0);
      expect(component.container).toMatchSnapshot();
    });
  });
});
