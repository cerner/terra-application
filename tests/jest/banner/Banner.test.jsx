import React from 'react';
import { render } from '@testing-library/react';

import BannerRegistrationContext from '../../../src/banner/private/BannerRegistrationContext';
import Banner from '../../../src/banner';

const reactUseContext = React.useContext;

describe('Banner', () => {
  const registerBannerMock = jest.fn();
  const unregisterBannerMock = jest.fn();

  beforeAll(() => {
    React.useContext = (contextValue) => {
      if (BannerRegistrationContext === contextValue) {
        return {
          registerBanner: registerBannerMock,
          unregisterBanner: unregisterBannerMock,
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

  it('registers an banner to the banner-list onmount', () => {
    render(<Banner type="alert" />);

    expect(registerBannerMock).toHaveBeenCalledTimes(1);
    expect(registerBannerMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ type: 'alert' }));
  });

  it('un-registers an banner from the banner-list onmount', () => {
    render(<Banner type="alert" />).unmount();

    expect(unregisterBannerMock).toHaveBeenCalledTimes(1);
    expect(unregisterBannerMock).toHaveBeenCalledWith(expect.any(String), 'alert');
  });
});
