import React, { useState } from 'react';
import ApplicationPageStatus from '../../../../lib/application-page-status/ApplicationPageStatus';
import ApplicationPageStatusProvider from '../../../../lib/application-page-status/ApplicationPageStatusProvider';

const ApplicationPageStatusVariant = () => {
  const [variantType, setVariantType] = useState();
  const [showPageStatus, setShowPageStatus] = useState(false);

  return (
    <>
      <button
        id="reset-button"
        type="button"
        onClick={() => {
          setShowPageStatus(false);
        }}
      >
        Reset
      </button>
      <button
        id="no-data-button"
        type="button"
        onClick={() => {
          setShowPageStatus(true);
          setVariantType('no-data');
        }}
      >
        Show No Data Status View
      </button>
      <button
        id="error-button"
        type="button"
        onClick={() => {
          setShowPageStatus(true);
          setVariantType('error');
        }}
      >
        Show Error Status View
      </button>
      <button
        id="no-matching-results-button"
        type="button"
        onClick={() => {
          setShowPageStatus(true);
          setVariantType('no-matching-results');
        }}
      >
        Show No Matching Results Status View
      </button>
      <button
        id="not-authorized-button"
        type="button"
        onClick={() => {
          setShowPageStatus(true);
          setVariantType('not-authorized');
        }}
      >
        Show Not Authorized Status View
      </button>
      <ApplicationPageStatusProvider>
        {showPageStatus && <ApplicationPageStatus variant={variantType} />}
      </ApplicationPageStatusProvider>
    </>
  );
};

export default ApplicationPageStatusVariant;
