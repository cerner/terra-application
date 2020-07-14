import React from 'react';
import PropTypes from 'prop-types';
import { BannerRegistrationContext, useNotificationBanners } from '../../../notification-banner';

import ExampleForAccessibilityTesting from './ExampleForAccessibilityTesting';

const Example = ({ id, children }) => {
  const { bannerProviderValue, banners } = useNotificationBanners();

  return (
    <BannerRegistrationContext.Provider value={bannerProviderValue}>
      {banners}
      <h1>Using Terra Alert out of the Box</h1>
      <ExampleForAccessibilityTesting id={id} />
      {children}
    </BannerRegistrationContext.Provider>
  );
};

Example.propTypes = {
  /**
   * Unique ID to append to the IDs in the example to pass accessibility when multiple
   * are rendered on one page.
   */
  id: PropTypes.string,
  children: PropTypes.any,
};

Example.defaultProps = {
  id: '1',
};

export default Example;
