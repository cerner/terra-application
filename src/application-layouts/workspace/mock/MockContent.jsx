import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TabContext from '../../../workspace/TabContext';
import WorkspaceContext from '../../../workspace/WorkspaceContext';
import NotificationBanner from '../../../notification-banner/NotificationBanner';
import styles from './MockContent.module.scss';

const cx = classNames.bind(styles);

const MockContent = ({initialCount = 0, title = '', id}) => {
  const [waffle, setWaffle] = useState(initialCount);
  const [showAlertBanner, setShowAlertBanner] = useState(false);
  const { tabId } = React.useContext(TabContext);
  const { updateNotificationCount } = React.useContext(WorkspaceContext);

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
      <button onClick={() => updateNotificationCount(tabId, waffle)}>Update Notifications</button>
      <div className={cx('row')}>
        <div className={cx('solo')}>
          <span className={cx('inner')}>
            Donkey
          </span>
        </div>
        <div className={cx('solo', 'is-active')}>
          <span className={cx('inner')}>
            Puppy
          </span>
        </div>
        <div className={cx('solo')}>
          <span className={cx('inner')}>
            Wolverine
          </span>
        </div>
        <div className={cx('solo')}>
          <span className={cx('inner')}>
            Penguin
          </span>
        </div>
        <div className={cx('solo')}>
          <span className={cx('inner')}>
            Potato
          </span>
        </div>
        <div className={cx('solo')}>
          <span className={cx('inner')}>
            Wallaby
          </span>
        </div>
      </div>
      <div className={cx('container')}>
        stuff
      </div>
    </div>
  );
};

export default MockContent;
