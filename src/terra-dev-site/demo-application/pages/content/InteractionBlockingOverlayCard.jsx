import React from 'react';
import Button from 'terra-button';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';

import InteractionBlockingOverlay from '../../../../interaction-blocking-overlay';

import { Card } from '../../../../page';

const InteractionBlockingOverlayCard = () => {
  const blockingOverlayTimeoutRef = React.useRef();
  const [showInteractionBlockingOverlay, setShowInteractionBlockingOverlay] = React.useState(false);

  React.useEffect(() => () => {
    clearTimeout(blockingOverlayTimeoutRef.current);
  }, []);

  return (
    <Card label="Interaction Blocking Overlay">
      <p>The InteractionBlockingOverlay can be rendered to prevent user interaction with the entire application.</p>
      <p>This can be useful for preventing user interaction while saving changes or during other workflows that should not be interrupted.</p>
      <p>Pressing the below button will cause the InteractionBlockingOverlay to be presented for five seconds.</p>
      <Button
        text="Show Interaction Blocking Overlay"
        icon={showInteractionBlockingOverlay ? <IconSpinner /> : undefined}
        onClick={() => {
          setShowInteractionBlockingOverlay(true);

          blockingOverlayTimeoutRef.current = setTimeout(() => {
            setShowInteractionBlockingOverlay(false);
          }, 5000);
        }}
      />
      {showInteractionBlockingOverlay
        && <InteractionBlockingOverlay label="InteractionBlockingOverlay Demo" />}
    </Card>
  );
};

export default InteractionBlockingOverlayCard;
