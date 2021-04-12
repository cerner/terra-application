import React from 'react';
import Button from 'terra-button';

import { Card } from '../../../../../page';

const LoadingOverlayCard = ({ onSetLoading }) => {
  const loadingOverlayTimeoutRef = React.useRef();

  React.useEffect(() => () => {
    clearTimeout(loadingOverlayTimeoutRef.current);
  }, []);

  return (
    <Card label="Loading Overlay">
      <p>The Page can render a loading state using the isLoading prop.</p>
      <Button
        text="Show Loading Overlay"
        onClick={() => {
          onSetLoading(true);
          loadingOverlayTimeoutRef.current = setTimeout(() => { onSetLoading(false); }, 5000);
        }}
      />
    </Card>
  );
};

export default LoadingOverlayCard;
