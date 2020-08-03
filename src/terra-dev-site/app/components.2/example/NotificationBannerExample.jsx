import React, { useState } from 'react';
import NotificationBanner from 'terra-application/lib/notification-banner';

const Example = () => {
  const [showAlertBanner, setShowAlertBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [showWarningBanner, setShowWarningBanner] = useState(false);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(false);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(false);
  const [showAdvisoryBanner, setShowAdvisoryBanner] = useState(false);

  return (
    <>
      {showUnsatisfiedBanner && (
        <NotificationBanner
          type="unsatisfied"
          onRequestClose={() => setShowUnsatisfiedBanner(false)}
        />
      )}
      {showAlertBanner && (
        <NotificationBanner
          type="alert"
          onRequestClose={() => setShowAlertBanner(false)}
        />
      )}
      {showErrorBanner && (
        <NotificationBanner
          type="error"
          description="Please try again."
          onRequestClose={() => setShowErrorBanner(false)}
        />
      )}
      {showWarningBanner && (
        <NotificationBanner
          type="warning"
          onRequestClose={() => setShowWarningBanner(false)}
        />
      )}
      {showUnverifiedBanner && (
        <NotificationBanner
          type="unverified"
          onRequestClose={() => setShowUnverifiedBanner(false)}
        />
      )}
      {showAdvisoryBanner && (
        <NotificationBanner
          type="advisory"
          onRequestClose={() => setShowAdvisoryBanner(false)}
        />
      )}
      <p>Show Banner Options: </p>
      <button onClick={() => setShowAlertBanner(!showAlertBanner)} type="button">Show/Hide Alert Banner</button>
      <button onClick={() => setShowErrorBanner(!showErrorBanner)} type="button">Show/Hide Error Banner</button>
      <button onClick={() => setShowWarningBanner(!showWarningBanner)} type="button">Show/Hide Warning Banner</button>
      <button onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)} type="button">Show/Hide Unsatisfied Banner</button>
      <button onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)} type="button">Show/Hide Unverified Banner</button>
      <button onClick={() => setShowAdvisoryBanner(!showAdvisoryBanner)} type="button">Show/Hide Advisory Banner</button>
    </>
  );
};

export default Example;
