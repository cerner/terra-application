import React from 'react';
import PropTypes from 'prop-types';
import { NotificationBannerProvider } from '../../../notification-banner';
import NotificationBannerExample from './NotificationBannerExample';

const Example = ({ isInitiallyClosed }) => (
  <NotificationBannerProvider>
    <NotificationBannerExample isInitiallyClosed={isInitiallyClosed} />
  </NotificationBannerProvider>
);

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
