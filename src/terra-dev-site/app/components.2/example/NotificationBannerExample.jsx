import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import IconHighPriority from 'terra-icon/lib/icon/IconHighPriority';
import NotificationBanner from 'terra-application/lib/notification-banner';

import styles from './NotificationBanner.module.scss';

const cx = classNamesBind.bind(styles);

const Example = () => {
  const [showAlertBanner, setShowAlertBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [showWarningBanner, setShowWarningBanner] = useState(false);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(false);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(false);
  const [showAdvisoryBanner, setShowAdvisoryBanner] = useState(false);
  const [showInfoBanner, setShowInfoBanner] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [showCustomBanner, setShowCustomBanner] = useState(false);

  return (
    <>
      {showSuccessBanner && (
        <NotificationBanner
          type="success"
          onRequestDismiss={() => setShowSuccessBanner(false)}
        />
      )}
      {showCustomBanner && (
        <NotificationBanner
          type="custom"
          custom={{ bannerTitle: 'Something happened....', colorClass: cx('custom'), icon: <IconHighPriority /> }}
          onRequestDismiss={() => setShowCustomBanner(false)}
        />
      )}
      {showUnsatisfiedBanner && (
        <NotificationBanner
          type="unsatisfied"
          onRequestDismiss={() => setShowUnsatisfiedBanner(false)}
        />
      )}
      {showAlertBanner && (
        <NotificationBanner
          type="alert"
          onRequestDismiss={() => setShowAlertBanner(false)}
        />
      )}
      {showErrorBanner && (
        <NotificationBanner
          type="error"
          description="Please try again."
          onRequestDismiss={() => setShowErrorBanner(false)}
        />
      )}
      {showWarningBanner && (
        <NotificationBanner
          type="warning"
          onRequestDismiss={() => setShowWarningBanner(false)}
        />
      )}
      {showUnverifiedBanner && (
        <NotificationBanner
          type="unverified"
          onRequestDismiss={() => setShowUnverifiedBanner(false)}
        />
      )}
      {showInfoBanner && (
        <NotificationBanner
          type="info"
          description={<div>This banner describes whats up and its description rendered in a div.</div>}
          onRequestDismiss={() => setShowInfoBanner(false)}
        />
      )}
      {showAdvisoryBanner && (
        <NotificationBanner
          type="advisory"
          onRequestDismiss={() => setShowAdvisoryBanner(false)}
        />
      )}
      <p>Show Banner Options: </p>
      <button onClick={() => setShowAlertBanner(!showAlertBanner)} type="button">Show/Hide Alert Banner</button>
      <button onClick={() => setShowErrorBanner(!showErrorBanner)} type="button">Show/Hide Error Banner</button>
      <button onClick={() => setShowWarningBanner(!showWarningBanner)} type="button">Show/Hide Warning Banner</button>
      <button onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)} type="button">Show/Hide Unsatisfied Banner</button>
      <button onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)} type="button">Show/Hide Unverified Banner</button>
      <button onClick={() => setShowAdvisoryBanner(!showAdvisoryBanner)} type="button">Show/Hide Advisory Banner</button>
      <button onClick={() => setShowInfoBanner(!showInfoBanner)} type="button">Show/Hide Info Banner</button>
      <button onClick={() => setShowSuccessBanner(!showSuccessBanner)} type="button">Show/Hide Success Banner</button>
      <button onClick={() => setShowCustomBanner(!showCustomBanner)} type="button">Show/Hide Custom Banner</button>
    </>
  );
};

export default Example;
