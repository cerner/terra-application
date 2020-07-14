import React from 'react';
import PropTypes from 'prop-types';
import { useNotificationBanners } from '../../../notification-banner';

import ExampleForAccessibilityTesting from './ExampleForAccessibilityTesting';

const Example = ({ id }) => {
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  return (
    <NotificationBannerProvider>
      <h1>Using Terra Alert out of the Box</h1>
      <NotificationBanners />
      <ExampleForAccessibilityTesting id={id} />
    </NotificationBannerProvider>
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
