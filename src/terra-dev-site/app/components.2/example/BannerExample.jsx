import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import IconHighPriority from 'terra-icon/lib/icon/IconHighPriority';
import Banner from '../../../../banner';

import styles from './Banner.module.scss';

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
        <Banner
          type="success"
          onDismiss={() => setShowSuccessBanner(false)}
        />
      )}
      {showCustomBanner && (
        <Banner
          type="custom"
          custom={{ bannerTitle: 'Something happened....', colorClass: cx('custom'), icon: <IconHighPriority /> }}
          onDismiss={() => setShowCustomBanner(false)}
        />
      )}
      {showUnsatisfiedBanner && (
        <Banner
          type="unsatisfied"
          onDismiss={() => setShowUnsatisfiedBanner(false)}
        />
      )}
      {showAlertBanner && (
        <Banner
          type="alert"
          onDismiss={() => setShowAlertBanner(false)}
        />
      )}
      {showErrorBanner && (
        <Banner
          type="error"
          description="Please try again."
          onDismiss={() => setShowErrorBanner(false)}
        />
      )}
      {showWarningBanner && (
        <Banner
          type="warning"
          onDismiss={() => setShowWarningBanner(false)}
        />
      )}
      {showUnverifiedBanner && (
        <Banner
          type="unverified"
          onDismiss={() => setShowUnverifiedBanner(false)}
        />
      )}
      {showInfoBanner && (
        <Banner
          type="info"
          description={<div>This banner describes whats up and its description rendered in a div.</div>}
          onDismiss={() => setShowInfoBanner(false)}
        />
      )}
      {showAdvisoryBanner && (
        <Banner
          type="advisory"
          onDismiss={() => setShowAdvisoryBanner(false)}
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
