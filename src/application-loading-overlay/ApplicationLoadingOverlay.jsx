import { useRef, useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';

const propTypes = {
  /**
   * A string indicating the background style for the overlay. One of: `dark`, `light`, `clear`.
   */
  backgroundStyle: PropTypes.oneOf(['dark', 'light', 'clear']),
};

const defaultProps = {
  backgroundStyle: 'clear',
};

const ApplicationLoadingOverlay = ({ backgroundStyle }) => {
  const idRef = useRef(uuidv4());
  const applicationLoadingOverlay = useContext(ApplicationLoadingOverlayContext);

  useLayoutEffect(() => {
    const overlayId = idRef.current;

    applicationLoadingOverlay.show(overlayId, { backgroundStyle });

    return () => {
      applicationLoadingOverlay.hide(overlayId);
    };
  }, [backgroundStyle, idRef, applicationLoadingOverlay]);

  return null;
};

ApplicationLoadingOverlay.propTypes = propTypes;
ApplicationLoadingOverlay.defaultProps = defaultProps;

export default ApplicationLoadingOverlay;
