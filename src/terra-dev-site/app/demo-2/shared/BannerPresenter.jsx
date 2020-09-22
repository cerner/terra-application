import React from 'react';

import Button from 'terra-button';
import NotificationBanner from '../../../../notification-banner/NotificationBanner';

const BannerPresenter = () => {
  const [showAlertBanner, setShowAlertBanner] = React.useState(false);
  const [showWarningBanner, setShowWarningBanner] = React.useState(false);

  const hideAlertBanner = React.useCallback(() => { setShowAlertBanner(false); }, []);
  const hideWarningBanner = React.useCallback(() => { setShowWarningBanner(false); }, []);

  return (
    <>
      <div>
        <Button
          text="Show High-Hazard Banner"
          onClick={() => {
            setShowAlertBanner(true);
          }}
        />
        <Button
          text="Show Medium-Hazard Banner"
          onClick={() => {
            setShowWarningBanner(true);
          }}
        />
      </div>
      {showAlertBanner && (
        <NotificationBanner
          variant="hazard-high"
          id="chart-review-page-alert-banner"
          onRequestClose={hideAlertBanner}
        />
      )}
      {showWarningBanner && (
        <NotificationBanner
          variant="hazard-medium"
          id="chart-review-page-warning-banner"
          onRequestClose={hideWarningBanner}
        />
      )}
    </>
  );
};

export default BannerPresenter;
