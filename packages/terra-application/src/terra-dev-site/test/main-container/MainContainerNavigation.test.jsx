import React from 'react';
import PropTypes from 'prop-types';

import ApplicationBase from '../../../application-base';
import ApplicationContainer from '../../../application-container';
import MainContainer, { useActiveMain } from '../../../main-container';
import PrimaryNavigationLayout, { NavigationItem } from '../../../primary-navigation-layout';

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

const MainContainerNavigation = () => {
  const [
    activeNavigationItemKey,
    setActiveNavigationItemKey,
  ] = React.useState('1');

  return (
    <ApplicationBase locale="en-US">
      <ApplicationContainer>
        <div>
          <p>Active Main At Root</p>
          <ActiveMainConsumer label="Root Main Consumer" />
        </div>
        <PrimaryNavigationLayout
          id="main-container-navigation-integration"
          titleConfig={{
            title: 'MainContainer Navigation Testing',
          }}
          activeNavigationKey={activeNavigationItemKey}
          onSelectNavigationItem={(key) => { setActiveNavigationItemKey(key); }}
          userConfig={{
            name: 'Demo User',
            detail: 'demouser',
          }}
        >
          <NavigationItem
            navigationKey="1"
            label="Nav 1"
          >
            <MainContainer
              id="nav-1-main-content"
              label="Nav 1 Main Content"
              metaData={{ test: 'nav 1 data' }}
            >
              <p>Nav 1 - Main Content</p>
              <button type="button">Focusable Button</button>
            </MainContainer>
            <ActiveMainConsumer label="Nav 1 Main Consumer" />
          </NavigationItem>
          <NavigationItem
            navigationKey="2"
            label="Nav 2"
          >
            <MainContainer
              id="nav-2-main-content"
              label="Nav 2 Main Content"
              metaData={{ test: 'nav 2 data' }}
            >
              <p>Nav 2 - Main Content</p>
              <button type="button">Focusable Button</button>
            </MainContainer>
            <ActiveMainConsumer label="Nav 2 Main Consumer" />
          </NavigationItem>
          <NavigationItem
            navigationKey="3"
            label="Nav 3"
          >
            <MainContainer
              id="nav-3-main-content"
              label="Nav 3 Main Content"
              metaData={{ test: 'nav 3 data' }}
            >
              <p>Nav 3 - Main Content</p>
              <button type="button">Focusable Button</button>
            </MainContainer>
            <ActiveMainConsumer label="Nav 3 Main Consumer" />
          </NavigationItem>
          <NavigationItem
            navigationKey="4"
            label="Nav 4"
          >
            <p>Nav 4 - No Main</p>
            <button type="button">Focusable Button</button>
            <ActiveMainConsumer label="Nav 4 Main Consumer" />
          </NavigationItem>
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default MainContainerNavigation;
