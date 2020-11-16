import React from 'react';
import ExampleForAccessibilityTesting from './ExampleForAccessibilityTesting';
import ApplicationBase from '../../../application-base';
import useNotificationBanners from '../../../notification-banner/private/useNotificationBanners';

const Example = () => {
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  return (
    <ApplicationBase>
      <NotificationBannerProvider>
        <NotificationBanners />
        <ExampleForAccessibilityTesting id="1" />
      </NotificationBannerProvider>
    </ApplicationBase>
  );
};

export default Example;
