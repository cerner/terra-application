import React from 'react';
import PropTypes from 'prop-types';
import { BannerRegistrationContext } from '../../../notification-banner';
import useNotificationBanners from '../../../notification-banner/ProviderUsingAriaPolite';
import ExampleForAccessibilityTesting from './ExampleForAccessibilityTesting';

const Example = ({ id }) => {
  const { bannerProviderValue, banners } = useNotificationBanners();

  return (
    <BannerRegistrationContext.Provider value={bannerProviderValue}>
      {/* {banners} */}
      <h1>Adding aria-live=polite to wrapper around all banners</h1>
      <ExampleForAccessibilityTesting id={id} />
    </BannerRegistrationContext.Provider>
  );
};

Example.propTypes = {
  /**
   * Unique ID to append to the IDs in the example to pass accessibility when multiple
   * are rendered on one page.
   */
  id: PropTypes.string,
};

Example.defaultProps = {
  id: '1',
};

export default Example;
