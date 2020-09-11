import React from 'react';

import Button from 'terra-button';
import NotificationBanner from '../../../../application-notification/NotificationBanner';

const BannerPresenter = () => {
  const [showAlertBanner, setShowAlertBanner] = React.useState(false);
  const [showWarningBanner, setShowWarningBanner] = React.useState(false);

  return (
    <>
      <div>
        <Button
          text="Show Alert Banner"
          onClick={() => {
            setShowAlertBanner(true);
          }}
        />
        <Button
          text="Show Warning Banner"
          onClick={() => {
            setShowWarningBanner(true);
          }}
        />
      </div>
      {showAlertBanner && (
        <NotificationBanner
          type="alert"
          id="chart-review-page-alert-banner"
          onRequestDismiss={() => setShowAlertBanner(false)}
          description={<div>Please do not break</div>}
        />
      )}
      {showWarningBanner && (
        <NotificationBanner
          type="warning"
          id="chart-review-page-warning-banner"
          onRequestDismiss={() => setShowWarningBanner(false)}
          bannerAction={{
            text: 'Custom Dismiss',
            onClick: () => {
              setShowWarningBanner(false);
            },
          }}
        />
      )}
    </>
  );
};

export default BannerPresenter;
