import React from 'react';
import PropTypes from 'prop-types';

import ApplicationBase from '@cerner/terra-application/lib/application-base';
import ApplicationContainer from '@cerner/terra-application/lib/application-container';
import MainContainer, { useActiveMain } from '@cerner/terra-application/lib/main-container';

const ActiveMainConsumer = ({ label }) => {
  const activeMain = useActiveMain();

  if (!activeMain) {
    return <div><p>No Active Main</p></div>;
  }

  return (
    <div>
      {label ? <p>{label}</p> : undefined}
      <p>
        Active Main Label:
        {' '}
        <span>{activeMain.label}</span>
      </p>
      <p>
        Active Main Metadata:
        {' '}
        <span>{JSON.stringify(activeMain.metaData)}</span>
      </p>
    </div>
  );
};

ActiveMainConsumer.propTypes = {
  label: PropTypes.string,
};

const MainContainerSimple = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer>
      <MainContainer
        id="test-main-content"
        label="Test Main Content"
        metaData={{ test: 'data' }}
      >
        <p>Main Content</p>
        <button type="button">Focusable Button</button>
      </MainContainer>
      <ActiveMainConsumer label="Active Main Consumer" />
    </ApplicationContainer>
  </ApplicationBase>
);

export default MainContainerSimple;
