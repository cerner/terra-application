import React from 'react';
import Button from 'terra-button';

import NotificationDialog from '../../../../../notification-dialog/NotificationDialog';

import Card from './Card';

const NotificationDialogCard = () => {
  const [showNotificationDialog, setShowNotificationDialog] = React.useState(false);

  return (
    <Card title="Notification Dialogs">
      <p>NotificationDialogs can be presented due to changes to local state.</p>
      <p>Pressing the below button will cause an example NotificationDialog to be presented.</p>
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
    </Card>
  );
};

export default NotificationDialogCard;
