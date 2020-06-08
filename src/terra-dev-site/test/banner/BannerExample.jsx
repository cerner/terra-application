import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import IconHighPriority from 'terra-icon/lib/icon/IconHighPriority';
import Banner from '../../../banner';

import styles from './Banner.module.scss';

const cx = classNamesBind.bind(styles);

const Example = ({ isInitiallyClosed }) => {
  const [showAlertBanner, setShowAlertBanner] = useState(!isInitiallyClosed);
  const [showErrorBanner, setShowErrorBanner] = useState(!isInitiallyClosed);
  const [showWarningBanner, setShowWarningBanner] = useState(!isInitiallyClosed);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(!isInitiallyClosed);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(!isInitiallyClosed);
  const [showAdvisoryBanner, setShowAdvisoryBanner] = useState(!isInitiallyClosed);
  const [showInfoBanner, setShowInfoBanner] = useState(!isInitiallyClosed);
  const [showSuccessBanner, setShowSuccessBanner] = useState(!isInitiallyClosed);
  const [showCustomBanner, setShowCustomBanner] = useState(!isInitiallyClosed);

  return (
    <>
      {showSuccessBanner && (
        <Banner
          type="success"
          id="success-banner"
          onDismiss={() => setShowSuccessBanner(false)}
          action={<button type="button" onClick={() => {}}>Fake Action</button>}
        />
      )}
      {showCustomBanner && (
        <Banner
          type="custom"
          id="custom-banner"
          custom={{ bannerTitle: 'Something happened....', colorClass: cx('custom'), icon: <IconHighPriority /> }}
        />
      )}
      {showAlertBanner && <Banner type="alert" id="alert-banner" />}
      {showErrorBanner && <Banner type="error" id="error-banner" description="Something happened..." />}
      {showUnsatisfiedBanner && <Banner type="unsatisfied" id="unsatisfied-banner" />}
      {showWarningBanner && (
        <Banner
          type="warning"
          id="warning-banner"
          onDismiss={() => setShowWarningBanner(false)}
        />
      )}
      {showUnverifiedBanner && <Banner type="unverified" id="unverified-banner" />}
      {showInfoBanner && (
        <Banner
          type="info"
          id="info-banner"
          description={<div>This banner describes whats up and its description rendered in a div.</div>}
        />
      )}
      {showAdvisoryBanner && <Banner type="advisory" id="advisory-banner" />}
      <p>Show Banner Options: </p>
      <button onClick={() => setShowAlertBanner(!showAlertBanner)} type="button" id="toggle-alert-banner">Show/Hide Alert Banner</button>
      <button onClick={() => setShowErrorBanner(!showErrorBanner)} type="button" id="toggle-error-banner">Show/Hide Error Banner</button>
      <button onClick={() => setShowWarningBanner(!showWarningBanner)} type="button" id="toggle-warning-banner">Show/Hide Warning Banner</button>
      <button onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)} type="button" id="toggle-unsatisfied-banner">Show/Hide Unsatisfied Banner</button>
      <button onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)} type="button" id="toggle-unverified-banner">Show/Hide Unverified Banner</button>
      <button onClick={() => setShowAdvisoryBanner(!showAdvisoryBanner)} type="button" id="toggle-advisory-banner">Show/Hide Advisory Banner</button>
      <button onClick={() => setShowInfoBanner(!showInfoBanner)} type="button" id="toggle-info-banner">Show/Hide Info Banner</button>
      <button onClick={() => setShowSuccessBanner(!showSuccessBanner)} type="button" id="toggle-success-banner">Show/Hide Success Banner</button>
      <button onClick={() => setShowCustomBanner(!showCustomBanner)} type="button" id="toggle-custom-banner">Show/Hide Custom Banner</button>
    </>
  );
};

Example.propTypes = {
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: PropTypes.bool,
};

Example.defaultProps = {
  isInitiallyClosed: false,
};

export default Example;
