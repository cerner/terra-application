import React from 'react';
import Button from 'terra-button';
import LegacyLayout from '../../../layouts/LegacyLayout';
import ApplicationStatusOverlay from '../../../application-status-overlay/ApplicationStatusOverlay';
import ApplicationLoadingOverlay from '../../../application-loading-overlay/ApplicationLoadingOverlay';

const NavELayout = () => {
  const [showStatusOverlay, setShowStatusOverlay] = React.useState(false);
  const [showLoadingOverlay, setShowLoadingOverlay] = React.useState(false);
  const [statusTimeoutLength, setStatusTimeoutLength] = React.useState(5);

  const statusOverlayTimeoutRef = React.useRef();
  const loadingOverlayTimeoutRef = React.useRef();
  const countdownTimeoutRef = React.useRef();

  React.useLayoutEffect(() => () => {
    clearTimeout(statusOverlayTimeoutRef.current);
    clearTimeout(loadingOverlayTimeoutRef.current);
    clearTimeout(countdownTimeoutRef.current);
  }, []);

  React.useEffect(() => {
    if (showStatusOverlay) {
      countdownTimeoutRef.current = setTimeout(() => {
        setStatusTimeoutLength(state => state - 1);
      }, 1000);
    }
    return () => {
      if (!showStatusOverlay) {
        setStatusTimeoutLength(5);
      }
    };
  }, [showStatusOverlay, statusTimeoutLength]);

  return (
    <LegacyLayout>
      <div style={{ padding: '1rem' }}>
        <h2>
          Legacy Layout
        </h2>
        <p>The LegacyLayout can be used to integrate components that are written with terra-application v1 APIs with the new v2 layouts.</p>
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
              message={`This status view will dismiss in ${statusTimeoutLength || 5} seconds`}
            />
          )}
        <Button
          text="Show Loading Overlay"
          onClick={() => {
            setShowLoadingOverlay(true);
            loadingOverlayTimeoutRef.current = setTimeout(() => { setShowLoadingOverlay(false); }, 5000);
          }}
        />
        {showLoadingOverlay && (
          <ApplicationLoadingOverlay backgroundStyle="light" isOpen />
        )}
      </div>
    </LegacyLayout>
  );
};

export default NavELayout;
