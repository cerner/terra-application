import { useRef, useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';

const propTypes = {
  /**
   * A boolean value indicating whether the loading overlay should be visible or not.
   */
  isOpen: PropTypes.bool,
  /**
   * A string indicating the background style for the overlay. One of: `dark`, `light`, `clear`.
   */
  backgroundStyle: PropTypes.oneOf(['dark', 'light', 'clear']),
};

const defaultProps = {
  backgroundStyle: 'clear',
};

const ApplicationLoadingOverlay = ({ isOpen, backgroundStyle }) => {
  const uuid = uuidv4();
  const idRef = useRef(uuid);
  const applicationLoadingOverlay = useContext(ApplicationLoadingOverlayContext);

  useLayoutEffect(() => {
    const overlayId = idRef.current;

    if (isOpen) {
      applicationLoadingOverlay.show(overlayId, { backgroundStyle });
    } else {
      applicationLoadingOverlay.hide(overlayId);
    }

    return () => {
      applicationLoadingOverlay.hide(overlayId);
    };
  }, [isOpen, backgroundStyle, idRef, applicationLoadingOverlay]);

  return null;
};

ApplicationLoadingOverlay.propTypes = propTypes;
ApplicationLoadingOverlay.defaultProps = defaultProps;

export default ApplicationLoadingOverlay;
