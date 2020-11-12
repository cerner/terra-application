import React, { useState } from 'react';
// import TabContext from '../../../workspace/TabContext';
import { useActiveMainPage } from '../../../application-container';
import NotificationBanner from '../../../notification-banner/NotificationBanner';

const MockContent = ({ initialCount = 0, title = '', id }) => {
  const activeMainPage = useActiveMainPage();

  const [clickCount, setClickCount] = useState(initialCount);
  const [showAlertBanner, setShowAlertBanner] = useState(false);
  // const { isActive } = React.useContext(TabContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{`${title}'s Numer of Clicks: ${clickCount}`}</h1>
      <button onClick={() => setClickCount(clickCount + 1)}>Click Me</button>
      <button onClick={() => setShowAlertBanner(true)}>Show Banner</button>
      {showAlertBanner && (
        <NotificationBanner
          variant="hazard-high"
          id="chart-review-page-alert-banner"
          onRequestClose={() => setShowAlertBanner(false)}
        />
      )}
      <p>
        Active Main Page Key:
        {' '}
        {activeMainPage?.pageKey}
      </p>
      <p>
        Active Main Page Label:
        {' '}
        {activeMainPage?.pageLabel}
      </p>
      <p>
        Active Main Page MetaData:
        {' '}
        {`${JSON.stringify(activeMainPage?.pageMetaData)}`}
      </p>
    </div>
  );
};

export default MockContent;
