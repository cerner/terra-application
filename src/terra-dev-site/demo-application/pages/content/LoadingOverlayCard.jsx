import React from 'react';
import Button from 'terra-button';

import ApplicationLoadingOverlay from '../../../../application-loading-overlay';

import Card from './Card';

const LoadingOverlayCard = () => {
  const loadingOverlayTimeoutRef = React.useRef();
  const [showLoadingOverlay, setShowLoadingOverlay] = React.useState(false);

  React.useEffect(() => () => {
    clearTimeout(loadingOverlayTimeoutRef.current);
  }, []);

  return (
    <Card title="Loading Overlay">
      <p>The ApplicationLoadingOverlay can be rendered to present a loading overlay over the Page content.</p>
      <p>While rendered, the Page actions will be automatically disabled.</p>
      <p>Pressing the below button will cause the ApplicationLoadingOverlay to be presented for five seconds.</p>
      <Button
        text="Show Loading Overlay"
        onClick={() => {
          setShowLoadingOverlay(true);
          loadingOverlayTimeoutRef.current = setTimeout(() => { setShowLoadingOverlay(false); }, 5000);
        }}
      />
      {showLoadingOverlay
        && <ApplicationLoadingOverlay backgroundStyle="light" />}
    </Card>
  );
};

export default LoadingOverlayCard;
