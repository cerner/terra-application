import React, { useState } from 'react';
import NotificationBanner from '../../../notification-banner/NotificationBanner';

const MockContent = ({initialCount = 0, title = ''}) => {
  const [waffle, setWaffle] = useState(initialCount);
  const [showAlertBanner, setShowAlertBanner] = useState(false);

  return (
    <div>
      <h1>{`${title}'s Numer of Clicks: ${waffle}`}</h1>
      <button onClick={() => setWaffle(waffle + 1)}>Click Me</button>
      <button onClick={() => setShowAlertBanner(true)}>Show Banner</button>
      {showAlertBanner && (
        <NotificationBanner
          variant="hazard-high"
          id="chart-review-page-alert-banner"
          onRequestClose={() => setShowAlertBanner(false)}
        />
      )}
    </div>
  );
};

export default MockContent;
