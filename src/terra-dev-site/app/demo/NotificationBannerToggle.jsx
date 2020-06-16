import React, { useState } from 'react';
import NotificationBanner from 'terra-application/lib/notification-banner';

const NotificationBannerToggle = () => {
  const [hasAlertBanner, setHasAlertBanner] = useState(false);
  const [hasWarningBanner, setHasWarningBanner] = useState(false);

  return (
    <div>
      <h3>Notification Banners</h3>
      <p>The NotificationBanner component is used to register a notification with framework to present to the user.</p>
      <button type="button" onClick={() => { setHasAlertBanner(!hasAlertBanner); }} disabled={hasAlertBanner}>
        Render Alert Notification Banner
      </button>
      <button type="button" onClick={() => { setHasWarningBanner(!hasWarningBanner); }} disabled={hasWarningBanner}>
        Render Warning Notification Banner
      </button>
      {hasAlertBanner ? <NotificationBanner type="alert" onRequestDismiss={() => { setHasAlertBanner(!hasAlertBanner); }} /> : undefined}
      {hasWarningBanner ? <NotificationBanner type="warning" onRequestDismiss={() => { setHasWarningBanner(!hasWarningBanner); }} /> : undefined}
    </div>
  );
};

export default NotificationBannerToggle;
