import React from 'react';
import Button from 'terra-button';
import IconWarning from 'terra-icon/lib/icon/IconWarning';

import NavigationPrompt from '../../../../navigation-prompt';

import Card from './Card';

const PendingActionsCard = () => {
  const [hasPendingAction1, setHasPendingAction1] = React.useState(false);
  const [hasPendingAction2, setHasPendingAction2] = React.useState(false);

  return (
    <Card title="Pending Actions">
      <p>NavigationPrompts are used to register unsaved state with framework. Multiple NavigationPrompts can be rendered at the same time.</p>
      <p>Performing destructive actions (like logging out) while NavigationPrompts are activated will result in the user being prompted to confirm or deny the action.</p>
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
      {hasPendingAction1 ? <NavigationPrompt description="Pending Action 1" /> : undefined}
      {hasPendingAction2 ? <NavigationPrompt description="Pending Action 2" /> : undefined}
    </Card>
  );
};

export default PendingActionsCard;