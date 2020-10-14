import React, { useState } from 'react';
import TabContext from '../../../workspace/TabContext';
import WorkspaceContext from '../../../workspace/WorkspaceContext';
import NotificationBanner from '../../../notification-banner/NotificationBanner';

const MockContent = ({initialCount = 0, title = '', id}) => {
  const [waffle, setWaffle] = useState(initialCount);
  const [showAlertBanner, setShowAlertBanner] = useState(false);
  const { tabId } = React.useContext(TabContext);
  const { updateNotificationCount } = React.useContext(WorkspaceContext);

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
      <button onClick={() => updateNotificationCount(tabId, waffle)}>Update Notifications</button>
    </div>
  );
};

export default MockContent;
