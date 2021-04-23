import React from 'react';
import PropTypes from 'prop-types';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainer from '../../../src/application-container/ApplicationContainer';
import ActiveMainRegistrationContext from '../../../src/main-container/private/ActiveMainRegistrationContext';
import PrimaryNavigationLayout from '../../../src/primary-navigation-layout/PrimaryNavigationLayout';
import NavigationItem from '../../../src/navigation-item/NavigationItem';
import { useActiveMain } from '../../../src/main-container/ActiveMainContext';
import MockApplication from '../MockApplication';

const MockMainContainer = ({ label, metaData }) => {
  const registration = React.useContext(ActiveMainRegistrationContext);
  const unregisterRef = React.useRef();

  React.useLayoutEffect(() => {
    unregisterRef.current = registration.register({ label, metaData });
  }, [registration, label, metaData]);

  React.useEffect(() => () => {
    unregisterRef.current();
  }, []);

  return <main />;
};

MockMainContainer.propTypes = {
  label: PropTypes.string,
  metaData: PropTypes.object,
};

const ActiveMainConsumer = () => {
  const activeMain = useActiveMain();

  if (!activeMain) {
    return <div data-testid="no-main" />;
  }

  return (
    <div>
      <div data-testid={`label-${activeMain.label}`} />
      {activeMain.metaData ? <div data-testid={`meta-${activeMain.metaData.testKey}`} /> : undefined}
    </div>
  );
};

test('provides active main registration context', async () => {
  const view = render((
    <MockApplication>
      <ApplicationContainer>
        <MockMainContainer label="test-main" />
        <ActiveMainConsumer />
      </ApplicationContainer>
    </MockApplication>
  ));

  // expect label to be present
  await waitFor(() => expect(screen.queryByTestId('label-test-main')).toBeInTheDocument());

  view.rerender((
    <MockApplication>
      <ApplicationContainer>
        <MockMainContainer label="test-main-2" metaData={{ testKey: 'test-value-2' }} />
        <ActiveMainConsumer />
      </ApplicationContainer>
    </MockApplication>
  ));

  // expect new label and metaData to be present
  await waitFor(() => expect(screen.queryByTestId('label-test-main-2')).toBeInTheDocument());
  await waitFor(() => expect(screen.queryByTestId('meta-test-value-2')).toBeInTheDocument());

  view.rerender((
    <MockApplication>
      <ApplicationContainer>
        <MockMainContainer
          key="force-update"
          label="test-main-3"
          metaData={{ testKey: 'test-value-3' }}
        />
        <ActiveMainConsumer />
      </ApplicationContainer>
    </MockApplication>
  ));

  // expect re-mountings to execute cleanup without error
  await waitFor(() => expect(screen.queryByTestId('label-test-main-3')).toBeInTheDocument());
  await waitFor(() => expect(screen.queryByTestId('meta-test-value-3')).toBeInTheDocument());

  view.rerender((
    <MockApplication>
      <ApplicationContainer>
        <ActiveMainConsumer />
      </ApplicationContainer>
    </MockApplication>
  ));

  // Expect removals to be cleaned up without error
  await waitFor(() => expect(screen.queryByTestId('no-main')).toBeInTheDocument());
});

test('supports nested providers within navigation items', async () => {
  const view = render((
    <MockApplication>
      <ApplicationContainer>
        <PrimaryNavigationLayout id="test-navigation" activeNavigationKey="1">
          <NavigationItem
            navigationKey="1"
            label="1"
          >
            <MockMainContainer label="test-main-1" />
            <ActiveMainConsumer />
          </NavigationItem>
          <NavigationItem
            navigationKey="2"
            label="2"
          >
            <MockMainContainer label="test-main-2" />
            <ActiveMainConsumer />
          </NavigationItem>
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </MockApplication>
  ));

  await waitFor(() => expect(screen.queryByTestId('label-test-main-1')).toBeInTheDocument());

  view.rerender((
    <MockApplication>
      <ApplicationContainer>
        <PrimaryNavigationLayout id="test-navigation" activeNavigationKey="2">
          <NavigationItem
            navigationKey="1"
            label="1"
          >
            <MockMainContainer label="test-main-1" />
            <ActiveMainConsumer />
          </NavigationItem>
          <NavigationItem
            navigationKey="2"
            label="2"
          >
            <MockMainContainer label="test-main-2" />
            <ActiveMainConsumer />
          </NavigationItem>
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </MockApplication>
  ));

  // expect active main to change on navigation
  await waitFor(() => expect(screen.queryByTestId('label-test-main-2')).toBeInTheDocument());

  view.rerender((
    <MockApplication>
      <ApplicationContainer>
        <PrimaryNavigationLayout id="test-navigation" activeNavigationKey="1">
          <NavigationItem
            navigationKey="1"
            label="1"
          >
            <MockMainContainer label="test-main-1" />
            <ActiveMainConsumer />
          </NavigationItem>
          <NavigationItem
            navigationKey="2"
            label="2"
          >
            <MockMainContainer label="test-main-2" />
            <ActiveMainConsumer />
          </NavigationItem>
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </MockApplication>
  ));

  // expect returning to previous mains triggers activation logic
  await waitFor(() => expect(screen.queryByTestId('label-test-main-1')).toBeInTheDocument());
});
