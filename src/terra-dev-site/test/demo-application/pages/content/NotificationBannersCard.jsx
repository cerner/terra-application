import React from 'react';
import Button from 'terra-button';

import NotificationBanner from '../../../../../notification-banner/NotificationBanner';

import { Card } from '../../../../../page';

const NotificationBannersCard = () => {
  const [showAlertBanner, setShowAlertBanner] = React.useState(false);
  const [showWarningBanner, setShowWarningBanner] = React.useState(false);

  const hideAlertBanner = React.useCallback(() => { setShowAlertBanner(false); }, []);
  const hideWarningBanner = React.useCallback(() => { setShowWarningBanner(false); }, []);

  return (
    <Card label="Notification Banners">
      <p>Notification banners are presented by the Page to guarantee their presentation order and visibility.</p>
      <p>
        <Button
          text="Show High-Hazard Banner"
          onClick={() => {
            setShowAlertBanner(true);
          }}
        />
      </p>
      <p>
        <Button
          text="Show Medium-Hazard Banner"
          onClick={() => {
            setShowWarningBanner(true);
          }}
        />
      </p>
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
    </Card>
  );
};

export default NotificationBannersCard;
