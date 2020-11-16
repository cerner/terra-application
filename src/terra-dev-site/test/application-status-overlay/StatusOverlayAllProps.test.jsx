import React from 'react';
import ApplicationBase from '../../../application-base';
import ApplicationStatusOverlay from '../../../../lib/application-status-overlay/ApplicationStatusOverlay';
import ApplicationStatusOverlayProvider from '../../../../lib/application-status-overlay/ApplicationStatusOverlayProvider';

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
    <ApplicationBase>
      <ApplicationStatusOverlayProvider>
        <ApplicationStatusOverlay buttonAttrs={StatusViewButtons} message="Status View with all props" variant="no-data" />
      </ApplicationStatusOverlayProvider>
    </ApplicationBase>
  );
};

export default ApplicationStatusOverlayAllProps;
