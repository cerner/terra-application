import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import NotificationBanner from 'terra-application/lib/notification-banner';
import styles from './CustomBannerVariant.module.scss';

const cx = classNamesBind.bind(styles);

const Example = () => {
  const [showHazardHighBanner, setShowHazardHighBanner] = useState(false);
  const [showHazardMediumBanner, setShowHazardMediumBanner] = useState(false);
  const [showHazardLowBanner, setShowHazardLowBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(false);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(false);
  const [showCustomBanner, setShowCustomBanner] = useState(false);

  return (
    <>
      {showUnsatisfiedBanner && (
        <NotificationBanner
          variant="unsatisfied"
          onRequestClose={() => setShowUnsatisfiedBanner(false)}
        />
      )}
      {showHazardHighBanner && (
        <NotificationBanner
          variant="hazard-high"
          onRequestClose={() => setShowHazardHighBanner(false)}
        />
      )}
      {showErrorBanner && (
        <NotificationBanner
          variant="error"
          description="Please try again."
          onRequestClose={() => setShowErrorBanner(false)}
        />
      )}
      {showHazardMediumBanner && (
        <NotificationBanner
          variant="hazard-medium"
          onRequestClose={() => setShowHazardMediumBanner(false)}
        />
      )}
      {showUnverifiedBanner && (
        <NotificationBanner
          variant="unverified"
          onRequestClose={() => setShowUnverifiedBanner(false)}
        />
      )}
      {showHazardLowBanner && (
        <NotificationBanner
          variant="hazard-low"
          onRequestClose={() => setShowHazardLowBanner(false)}
        />
      )}
      {showCustomBanner && (
        <NotificationBanner
          variant="custom"
          description="This is a custom banner."
          onRequestClose={() => setShowCustomBanner(false)}
          custom={{
            signalWord: 'Check this out!',
            customIconClass: cx('custom-notification-banner-icon'),
          }}
        />
      )}
      <p>Show Banner Options: </p>
      <button
        onClick={() => setShowHazardHighBanner(!showHazardHighBanner)}
        type="button"
      >
        Show/Hide Hazard-High Banner
      </button>
      <button
        onClick={() => setShowHazardMediumBanner(!showHazardMediumBanner)}
        type="button"
      >
        Show/Hide Hazard-Medium Banner
      </button>
      <button
        onClick={() => setShowHazardLowBanner(!showHazardLowBanner)}
        type="button"
      >
        Show/Hide Hazard-Low Banner
      </button>
      <button
        onClick={() => setShowErrorBanner(!showErrorBanner)}
        type="button"
      >
        Show/Hide Error Banner
      </button>
      <button
        onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)}
        type="button"
      >
        Show/Hide Unsatisfied Banner
      </button>
      <button
        onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)}
        type="button"
      >
        Show/Hide Unverified Banner
      </button>
      <button
        onClick={() => setShowCustomBanner(!showCustomBanner)}
        type="button"
      >
        Show/Hide Custom Banner
      </button>
    </>
  );
};

export default Example;
