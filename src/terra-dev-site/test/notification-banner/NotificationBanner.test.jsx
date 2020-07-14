import React from 'react';
import PropTypes from 'prop-types';
import { BannerRegistrationContext, useNotificationBanners } from '../../../notification-banner';
import NotificationBannerExample from './NotificationBannerExample';

const Example = ({ isInitiallyClosed }) => {
  const { bannerProviderValue, banners } = useNotificationBanners();

  return (
    <div>
      <BannerRegistrationContext.Provider value={bannerProviderValue}>
        {banners}
        <NotificationBannerExample isInitiallyClosed={isInitiallyClosed} />
      </BannerRegistrationContext.Provider>
    </div>
  );
};

Example.propTypes = {
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: PropTypes.bool,
};

Example.defaultProps = {
  isInitiallyClosed: false,
};

export default Example;
