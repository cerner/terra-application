import React from 'react';
import Button from 'terra-button';

import ApplicationStatusOverlay from '../../../../application-status-overlay';

import Card from './Card';

const StatusOverlayCard = () => {
  const statusOverlayTimeoutRef = React.useRef();
  const [showStatusOverlay, setShowStatusOverlay] = React.useState(false);

  React.useEffect(() => () => {
    clearTimeout(statusOverlayTimeoutRef.current);
  }, []);

  return (
    <Card title="Status Overlay">
      <p>The ApplicationStatusOverlay can be rendered to present a status view over the Page content.</p>
      <p>Pressing the below button will cause an ApplicationStatusOverlay ('no-data' variant) to be presented for five seconds.</p>
      <Button
        text="Show Status Overlay"
        onClick={() => {
          setShowStatusOverlay(true);
          statusOverlayTimeoutRef.current = setTimeout(() => { setShowStatusOverlay(false); }, 5000);
        }}
      />
      {showStatusOverlay
        && (
        <ApplicationStatusOverlay
          variant="no-data"
          message="This status view will dismiss in 5 seconds"
        />
        )}
    </Card>
  );
};

export default StatusOverlayCard;
