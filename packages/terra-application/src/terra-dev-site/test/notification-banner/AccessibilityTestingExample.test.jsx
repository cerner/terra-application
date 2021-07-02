import React from 'react';
import ExampleForAccessibilityTesting from './ExampleForAccessibilityTesting';
import useNotificationBanners from 'terra-application/lib/notification-banner/private/useNotificationBanners';

const Example = () => {
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  return (
    <NotificationBannerProvider>
      <NotificationBanners />
      <ExampleForAccessibilityTesting id="1" />
    </NotificationBannerProvider>
  );
};

export default Example;
