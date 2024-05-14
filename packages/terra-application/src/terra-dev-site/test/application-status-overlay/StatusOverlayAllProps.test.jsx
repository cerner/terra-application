import React from 'react';
import ApplicationStatusOverlay, { ApplicationStatusOverlayProvider } from '../../../application-status-overlay';

const ApplicationStatusOverlayAllProps = () => {
  const StatusViewButtons = [
    {
      text: 'Action 1',
      key: 1,
    }, {
      text: 'Action 2',
      key: 2,
    },
  ];

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ height: '500px' }}>
      <ApplicationStatusOverlayProvider>
        <ApplicationStatusOverlay buttonAttrs={StatusViewButtons} message="Status View with all props" variant="no-data" />
      </ApplicationStatusOverlayProvider>
    </div>
  );
};

export default ApplicationStatusOverlayAllProps;
