import React from 'react';
import useNotificationBanners from 'terra-application/lib/notification-banner/private/useNotificationBanners';
import ExampleForAccessibilityTesting from './ExampleForAccessibilityTesting';

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
