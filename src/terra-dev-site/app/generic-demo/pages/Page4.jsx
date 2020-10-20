import React from 'react';
import Button from 'terra-button';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from '../../../../disclosure-manager';
import NavigationPrompt from '../../../../navigation-prompt';
import ApplicationBlockingOverlay from '../../../../application-blocking-overlay/ApplicationBlockingOverlay';
import NotificationDialog from '../../../../notification-dialog/NotificationDialog';
import NavigationContext from '../../../../navigation/NavigationContext';
import InertContext from '../../../../layers/InertContext';

import Page5 from './Page5';

let incrementer = 0;

const DisclosedComponent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);
  const [id, setId] = React.useState(() => incrementer++);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
  const [showBlockingOverlay, setShowBlockingOverlay] = React.useState(false);

  React.useEffect(() => {
    if (showBlockingOverlay) {
      setTimeout(() => {
        setShowBlockingOverlay(false);
      }, 5000);
    }
  }, [showBlockingOverlay]);

  return (
    <div>
      <DisclosureManagerHeaderAdapter
        title={`Disclosed Component ${id}`}
        collapsibleMenuView={(
          <CollapsibleMenuView>
            <CollapsibleMenuView.Item
              text={`${id}`}
              key={id}
              shouldCloseOnClick={false}
            />
          </CollapsibleMenuView>
        )}
      />
      <h2>Hello world</h2>
      <p>{id}</p>
      <Button
        text="Disclose Modal"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: `${Math.random()}`,
              component: <DisclosedComponent />,
            },
          });
        }}
      />
      <Button
        text="Abort"
        onClick={() => {
          disclosureManager.closeDisclosure();
        }}
      />
      <Button
        text={`Unsaved Changes - ${hasUnsavedChanges ? 'Yes' : 'No'}`}
        onClick={() => { setHasUnsavedChanges(state => !state); }}
      />
      {hasUnsavedChanges && <NavigationPrompt description={id} />}
      <Button
        text="Show Blocking Overlay"
        onClick={() => { setShowBlockingOverlay(state => !state); }}
      />
      {showBlockingOverlay && <ApplicationBlockingOverlay />}
    </div>
  );
};

const Page4 = ({ onRequestClose }) => {
  const disclosureManager = React.useContext(DisclosureManagerContext);
  const navigationContext = React.useContext(NavigationContext);
  const inertContext = React.useContext(InertContext);

  const [showNotificationDialog, setShowNotificationDialog] = React.useState(false);
  const [pageIsVisible, setPageIsVisible] = React.useState(true);
  const [showPage5, setShowPage5] = React.useState(false);

  React.useEffect(() => {
    if (pageIsVisible && navigationContext.isActive) {
      console.log('Page 4 is visible');
    } else {
      console.log('Page 4 is not visible');
    }
  }, [pageIsVisible, navigationContext.isActive]);

  React.useEffect(() => {
    if (inertContext) {
      console.log('Page 4 is inert');
    } else {
      console.log('Page 4 is not inert');
    }
  }, [inertContext]);

  return (
    <ApplicationPage
      title="Page 4"
      onRequestClose={onRequestClose}
      onInactiveStateChnage={(isVisible) => {
        setPageIsVisible(isVisible);
      }}
    >
      <Button
        text="Disclose Modal"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: `${Math.random()}`,
              component: <DisclosedComponent />,
            },
          });
        }}
      />
      <Button
        text="Show Notification Dialog"
        onClick={() => {
          setShowNotificationDialog(true);
        }}
      />
      <Button
        text="Show Page 5"
        onClick={() => {
          setShowPage5(true);
        }}
      />
      {showNotificationDialog && (
        <NotificationDialog
          variant="hazard-high"
          dialogTitle="Drug Dosage Risk"
          startMessage="A wrong drug dosage can occur if the suggested cycle (e.g. daily) does not match the intended cycle (e.g. weekly)."
          endMessage="Change the suggested cycle or the intended cycle so they match."
          acceptAction={{
            text: 'OK',
            onClick: () => { setShowNotificationDialog(false); },
          }}
          emphasizedAction="accept"
        />
      )}
      {showPage5 && (
        <Page5 onRequestClose={() => { setShowPage5(false); }} />
      )}
    </ApplicationPage>
  );
};

export default Page4;
