import React from 'react';

import { ApplicationContainerContext } from '../../../../application-container';

import { Card } from '../../../../page';

const ApplicationInfoCard = () => {
  const applicationContainer = React.useContext(ApplicationContainerContext);

  return (
    <Card title="Application Info">
      <p>Pages can access information about the application through the ApplicationContainerContext.</p>
      <p>
        Application Name:
        {' '}
        <span>{applicationContainer.applicationName}</span>
      </p>
      <p>
        Application Version:
        {' '}
        <span>{applicationContainer.applicationVersion}</span>
      </p>
      <p>
        Application MetaData:
        {' '}
        <span>{JSON.stringify(applicationContainer.applicationMetaData)}</span>
      </p>
    </Card>
  );
};

export default ApplicationInfoCard;
