import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import IconHighPriority from 'terra-icon/lib/icon/IconHighPriority';
import NotificationBanner from '../../../notification-banner';

import styles from './NotificationBanner.module.scss';

const cx = classNamesBind.bind(styles);

const Example = ({ isInitiallyClosed, id }) => {
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
        <NotificationBanner
          type="success"
          id={`success-banner-${id}`}
          onRequestDismiss={() => setShowSuccessBanner(false)}
          action={<button type="button" onClick={() => {}}>Fake Action</button>}
        />
      )}
      {showCustomBanner && (
        <NotificationBanner
          type="custom"
          id={`custom-banner-${id}`}
          custom={{ bannerTitle: 'Something happened....', colorClass: cx('custom'), icon: <IconHighPriority /> }}
        />
      )}
      {showAlertBanner && <NotificationBanner type="alert" id={`alert-banner-${id}`} />}
      {showErrorBanner && <NotificationBanner type="error" id={`error-banner-${id}`} description="Something happened..." />}
      {showUnsatisfiedBanner && <NotificationBanner type="unsatisfied" id={`unsatisfied-banner-${id}`} />}
      {showWarningBanner && (
        <NotificationBanner
          type="warning"
          id={`warning-banner-${id}`}
          onRequestDismiss={() => setShowWarningBanner(false)}
        />
      )}
      {showUnverifiedBanner && <NotificationBanner type="unverified" id={`unverified-banner-${id}`} />}
      {showInfoBanner && (
        <NotificationBanner
          type="info"
          id={`info-banner-${id}`}
          description={<div>This banner describes whats up and its description rendered in a div.</div>}
        />
      )}
      {showAdvisoryBanner && <NotificationBanner type="advisory" id={`advisory-banner-${id}`} />}
      <p>Show Banner Options: </p>
      <button onClick={() => setShowAlertBanner(!showAlertBanner)} type="button" id={`toggle-alert-banner-${id}`}>Show/Hide Alert Banner</button>
      <button onClick={() => setShowErrorBanner(!showErrorBanner)} type="button" id={`toggle-error-banner-${id}`}>Show/Hide Error Banner</button>
      <button onClick={() => setShowWarningBanner(!showWarningBanner)} type="button" id={`toggle-warning-banner-${id}`}>Show/Hide Warning Banner</button>
      <button onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)} type="button" id={`toggle-unsatisfied-banner-${id}`}>Show/Hide Unsatisfied Banner</button>
      <button onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)} type="button" id={`toggle-unverified-banner-${id}`}>Show/Hide Unverified Banner</button>
      <button onClick={() => setShowAdvisoryBanner(!showAdvisoryBanner)} type="button" id={`toggle-advisory-banner-${id}`}>Show/Hide Advisory Banner</button>
      <button onClick={() => setShowInfoBanner(!showInfoBanner)} type="button" id={`toggle-info-banner-${id}`}>Show/Hide Info Banner</button>
      <button onClick={() => setShowSuccessBanner(!showSuccessBanner)} type="button" id={`toggle-success-banner-${id}`}>Show/Hide Success Banner</button>
      <button onClick={() => setShowCustomBanner(!showCustomBanner)} type="button" id={`toggle-custom-banner-${id}`}>Show/Hide Custom Banner</button>
    </>
  );
};

Example.propTypes = {
  /**
   * Unique ID to append to the IDs in the example to pass accessibility when multiple
   * are rendered on one page.
   */
  id: PropTypes.string,
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: PropTypes.bool,
};

Example.defaultProps = {
  id: '1',
  isInitiallyClosed: false,
};

export default Example;
