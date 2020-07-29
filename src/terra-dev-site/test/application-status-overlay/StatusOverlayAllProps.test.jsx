import React from 'react';
import ApplicationStatusOverlay from '../../../../lib/application-status-overlay/ApplicationStatusOverlay';
import ApplicationStatusOverlayProvider from '../../../../lib/application-status-overlay/ApplicationStatusOverlayProvider';

const ApplicationStatusOverlayAllProps = () => {
  const StatusViewButtons = [
    {
      text: 'Action 1',
      key: 1,
      size: 'medium',
    }, {
      text: 'Action 2',
      key: 2,
      size: 'medium',
    },
  ];

  return (
    <ApplicationStatusOverlayProvider>
      <ApplicationStatusOverlay buttonAttrs={StatusViewButtons} message="Status View with all props" variant="no-data" />
    </ApplicationStatusOverlayProvider>
  );
};

export default ApplicationStatusOverlayAllProps;
