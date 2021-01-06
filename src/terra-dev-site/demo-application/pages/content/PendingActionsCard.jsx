import React from 'react';
import Button from 'terra-button';
import IconWarning from 'terra-icon/lib/icon/IconWarning';

import UnsavedChangesPrompt from '../../../../unsaved-changes-prompt';

import { Card } from '../../../../page';

const PendingActionsCard = () => {
  const [hasPendingAction1, setHasPendingAction1] = React.useState(false);
  const [hasPendingAction2, setHasPendingAction2] = React.useState(false);

  return (
    <Card label="Pending Actions">
      <p>UnsavedChangesPrompts are used to register unsaved state with framework. Multiple UnsavedChangesPrompts can be rendered at the same time.</p>
      <p>Performing destructive actions (like logging out) while UnsavedChangesPrompts are activated will result in the user being prompted to confirm or deny the action.</p>
      <p>
        <Button
          icon={hasPendingAction1 ? <IconWarning /> : undefined}
          text={`${hasPendingAction1 ? 'De-activate' : 'Activate'} Pending Action 1`}
          onClick={() => { setHasPendingAction1(!hasPendingAction1); }}
        />
      </p>
      <p>
        <Button
          icon={hasPendingAction2 ? <IconWarning /> : undefined}
          text={`${hasPendingAction2 ? 'De-activate' : 'Activate'} Pending Action 2`}
          onClick={() => { setHasPendingAction2(!hasPendingAction2); }}
        />
      </p>
      {hasPendingAction1 ? <UnsavedChangesPrompt description="Pending Action 1" /> : undefined}
      {hasPendingAction2 ? <UnsavedChangesPrompt description="Pending Action 2" /> : undefined}
    </Card>
  );
};

export default PendingActionsCard;
