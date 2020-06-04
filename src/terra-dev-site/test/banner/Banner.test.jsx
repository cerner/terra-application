import React, { useState } from 'react';

import Banner, { BannerCheckpoint } from '../../../banner';
import { checkPropTypes } from 'prop-types';


const Example = ({ isInitiallyClosed  }) => {
  const [showAlertBanner, setShowAlertBanner] = useState(isInitiallyClosed);
  const [showErrorBanner, setShowErrorBanner] = useState(isInitiallyClosed);
  const [showWarningBanner, setShowWarningBanner] = useState(isInitiallyClosed);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(isInitiallyClosed);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(isInitiallyClosed);
  const [showAdvisoryBanner, setShowAdvisoryBanner] = useState(isInitiallyClosed);
  const [showInfoBanner, setShowInfoBanner] = useState(isInitiallyClosed);
  const [showSuccessBanner, setShowSuccessBanner] = useState(isInitiallyClosed);
  const [showCustomBanner, setShowCustomBanner] = useState(isInitiallyClosed);

  return (
    <BannerCheckpoint>
      {showSuccessBanner && (
        <Banner
          type="success"
          onDismiss={() => {}}
          action={<button type="button" onClick={() => {}}>Fake Action</button>}
        />
      )}
      {showCustomBanner && <Banner type="custom" custom={{ bannerTitle: 'Custom' }} />}
      {showAlertBanner && <Banner type="alert" />}
      {showErrorBanner && <Banner type="error" description="Something happened..." />}
      {showUnsatisfiedBanner && <Banner type="unsatisfied" />}
      {showWarningBanner && <Banner type="warning" onDismiss={() => showWarningBanner(false)} />}
      {showUnverifiedBanner && <Banner type="unverified" />}
      {showInfoBanner && <Banner type="info" description={<div>This banner describes whats up and its description rendered in a div.</div>} />}
      {showAdvisoryBanner && <Banner type="advisory" />}
      <button onClick={() => setShowAlertBanner(!showAlertBanner)} type="button">Show/Hide Alert Banner</button>
      <button onClick={() => setShowErrorBanner(!showErrorBanner)} type="button">Show/Hide Error Banner</button>
      <button onClick={() => setShowWarningBanner(!showWarningBanner)} type="button">Show/Hide Warning Banner</button>
      <button onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)} type="button">Show/Hide Unsatisfied Banner</button>
      <button onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)} type="button">Show/Hide Unverified Banner</button>
      <button onClick={() => setShowAdvisoryBanner(!showAdvisoryBanner)} type="button">Show/Hide Advisory Banner</button>
      <button onClick={() => setShowInfoBanner(!showInfoBanner)} type="button">Show/Hide Info Banner</button>
      <button onClick={() => setShowSuccessBanner(!showSuccessBanner)} type="button">Show/Hide Success Banner</button>
      <button onClick={() => setShowCustomBanner(!showCustomBanner)} type="button">Show/Hide Custom Banner</button>
    </BannerCheckpoint>
  );
};

Example.propTypes = {
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: checkPropTypes.bool,
};

Example.defaultProps = {
  isInitiallyClosed: false,
};

export default Example;
