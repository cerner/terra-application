import React, { useState } from 'react';
import ApplicationStatusOverlay, {ApplicationStatusOverlayProvider} from '../../../application-status-overlay/ApplicationStatusOverlay';

const ApplicationStatusOverlayVariant = () => {
  const [variantType, setVariantType] = useState();
  const [showStatusOverlay, setShowStatusOverlay] = useState(false);

  return (
    <>
      <button
        id="reset-button"
        type="button"
        onClick={() => {
          setShowStatusOverlay(false);
        }}
      >
        Reset
      </button>
      <button
        id="no-data-button"
        type="button"
        onClick={() => {
          setShowStatusOverlay(true);
          setVariantType('no-data');
        }}
      >
        Show No Data Status View
      </button>
      <button
        id="error-button"
        type="button"
        onClick={() => {
          setShowStatusOverlay(true);
          setVariantType('error');
        }}
      >
        Show Error Status View
      </button>
      <button
        id="no-matching-results-button"
        type="button"
        onClick={() => {
          setShowStatusOverlay(true);
          setVariantType('no-matching-results');
        }}
      >
        Show No Matching Results Status View
      </button>
      <button
        id="not-authorized-button"
        type="button"
        onClick={() => {
          setShowStatusOverlay(true);
          setVariantType('not-authorized');
        }}
      >
        Show Not Authorized Status View
      </button>
      <ApplicationStatusOverlayProvider id="test-status-view-container">
        {showStatusOverlay && <ApplicationStatusOverlay variant={variantType} />}
      </ApplicationStatusOverlayProvider>
    </>
  );
};

export default ApplicationStatusOverlayVariant;
