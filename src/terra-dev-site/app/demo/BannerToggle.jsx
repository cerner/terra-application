import React, { useState } from 'react';
import Banner from 'terra-application/lib/banner';

const BannerToggle = () => {
  const [hasAlertBanner, setHasAlertBanner] = useState(false);
  const [hasWarningBanner, setHasWarningBanner] = useState(false);

  return (
    <div>
      <h3>Banners</h3>
      <p>The Banner component is used to register a notification with framework to present to the user.</p>
      <button type="button" onClick={() => { setHasAlertBanner(!hasAlertBanner); }} disabled={hasAlertBanner}>
        Render Alert Banner
      </button>
      <button type="button" onClick={() => { setHasWarningBanner(!hasWarningBanner); }} disabled={hasWarningBanner}>
        Render Warning Banner
      </button>
      {hasAlertBanner ? <Banner type="alert" onDismiss={() => { setHasAlertBanner(!hasAlertBanner); }} /> : undefined}
      {hasWarningBanner ? <Banner type="warning" onDismiss={() => { setHasWarningBanner(!hasWarningBanner); }} /> : undefined}
    </div>
  );
};

export default BannerToggle;
