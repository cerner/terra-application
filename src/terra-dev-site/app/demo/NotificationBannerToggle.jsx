import React, { useState } from 'react';
import NotificationBanner from 'terra-application/lib/notification-banner';

const NotificationBannerToggle = () => {
  const [hasHazardHighBanner, setHasHazardHighBanner] = useState(false);
  const [hasHazardLowBanner, setHasHazardLowBanner] = useState(false);

  return (
    <div>
      <h3>Notification Banners</h3>
      <p>The NotificationBanner component is used to register a notification with framework to present to the user.</p>
      <button
        type="button"
        onClick={() => { setHasHazardHighBanner(!hasHazardHighBanner); }}
        disabled={hasHazardHighBanner}
      >
        Render Hazard-High Notification Banner
      </button>
      <button
        type="button"
        onClick={() => { setHasHazardLowBanner(!hasHazardLowBanner); }}
        disabled={hasHazardLowBanner}
      >
        Render Hazard-Low Notification Banner
      </button>
      {hasHazardHighBanner && (
        <NotificationBanner
          variant="hazard-high"
          onRequestClose={() => { setHasHazardHighBanner(!hasHazardHighBanner); }}
        />
      )}
      {hasHazardLowBanner && (
        <NotificationBanner
          variant="hazard-medium"
          onRequestClose={() => { setHasHazardLowBanner(!hasHazardLowBanner); }}
        />
      )}
    </div>
  );
};

export default NotificationBannerToggle;
