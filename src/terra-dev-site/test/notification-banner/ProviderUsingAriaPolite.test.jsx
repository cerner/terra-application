import React from 'react';
import PropTypes from 'prop-types';
import NotificationBannerProvider from '../../../notification-banner/ProviderUsingAriaPolite';
import ExampleForAccessibilityTesting from './ExampleForAccessibilityTesting';

const Example = ({ id }) => (
  <NotificationBannerProvider>
    <h1>Adding aria-live=polite to wrapper around all banners</h1>
    <ExampleForAccessibilityTesting id={id} />
  </NotificationBannerProvider>
);

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
