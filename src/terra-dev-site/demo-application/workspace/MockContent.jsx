import React, { useState } from 'react';
import TabContext from '../../../workspace/TabContext';
import { useActiveMainPage } from '../../../application-container';

// import WorkspaceContext from '../../../../workspace/WorkspaceContext';
import NotificationBanner from '../../../notification-banner/NotificationBanner';
// import styles from './MockContent.module.scss';

// const cx = classNames.bind(styles);

const MockContent = ({ initialCount = 0, title = '', id }) => {
  const activeMainPage = useActiveMainPage();

  const [waffle, setWaffle] = useState(initialCount);
  const [showAlertBanner, setShowAlertBanner] = useState(false);
  // const { tabId } = React.useContext(TabContext);
  // const { updateNotificationCount } = React.useContext(WorkspaceContext);

  const { isActive } = React.useContext(TabContext);

  return (
    <div style={{ padding: '1rem' }}>
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
