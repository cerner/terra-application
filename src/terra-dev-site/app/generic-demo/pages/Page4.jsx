import React from 'react';
import Button from 'terra-button';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from '../../../../disclosure-manager';
import NavigationPrompt from '../../../../navigation-prompt';
import ApplicationBlockingOverlay from '../../../../application-blocking-overlay/ApplicationBlockingOverlay';
import NotificationDialog from '../../../../notification-dialog/NotificationDialog';

import useDeferredInitializer from '../shared/useDeferredInitializer';

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
  const [showNotificationDialog, setShowNotificationDialog] = React.useState(false);

  return (
    <ApplicationPage
      title="Page 4"
      onRequestClose={onRequestClose}
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
    </ApplicationPage>
  );
};

export default Page4;
