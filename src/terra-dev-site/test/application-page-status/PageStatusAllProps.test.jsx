import React from 'react';
import ApplicationPageStatus from '../../../../lib/application-page-status/ApplicationPageStatus';
import ApplicationPageStatusProvider from '../../../../lib/application-page-status/ApplicationPageStatusProvider';

const ApplicationPageStatusAllProps = () => {
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
    <ApplicationPageStatusProvider>
      <ApplicationPageStatus buttonAttrs={StatusViewButtons} message="Status View with all props" title="All props test" variant="no-data" />
    </ApplicationPageStatusProvider>
  );
};

export default ApplicationPageStatusAllProps;
