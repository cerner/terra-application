import React from 'react';
import { render } from '@testing-library/react';

import BannerRegistrationContext from '../../../src/notification-banner/private/BannerRegistrationContext';
import NotificationBanner from '../../../src/notification-banner';

const reactUseContext = React.useContext;

describe('NotificationBanner', () => {
  const registerNotificationBannerMock = jest.fn();
  const unregisterNotificationBannerMock = jest.fn();

  beforeAll(() => {
    React.useContext = (contextValue) => {
      if (BannerRegistrationContext === contextValue) {
        return {
          registerNotificationBanner: registerNotificationBannerMock,
          unregisterNotificationBanner: unregisterNotificationBannerMock,
        };
      }
      return reactUseContext(contextValue);
    };
  });

  afterAll(() => {
    // Restore Reacts useContext method after each test.
    React.useContext = reactUseContext;
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('registers a notification banner to the banner-list onmount', () => {
    render(<NotificationBanner variant="hazard-high" />);

    expect(registerNotificationBannerMock).toHaveBeenCalledTimes(1);
    expect(registerNotificationBannerMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ variant: 'hazard-high' }));
  });

  it('un-registers a notification from the banner-list unmount', () => {
    render(<NotificationBanner variant="hazard-high" />).unmount();

    expect(unregisterNotificationBannerMock).toHaveBeenCalledTimes(1);
    expect(unregisterNotificationBannerMock).toHaveBeenCalledWith(expect.any(String), 'hazard-high');
  });

  it('throws error when BannerRegistrationContext has not been provided', () => {
    React.useContext = reactUseContext;
    // eslint-disable-next-line no-console
    console.error = jest.fn().mockImplementation(error => error); // catch virtual error on console
    expect(() => render(<NotificationBanner variant="hazard-high" />))
      .toThrowError(/A NotificationBanner was not rendered within the context of a NotificationBannerProvider/);
  });
});
