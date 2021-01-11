import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DynamicOverlayContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  overlays: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
  })),
  children: PropTypes.node,
};

const defaultProps = {
  overlays: [],
};

const DynamicOverlayContainer = ({ overlays, children }) => {
  const contentRef = React.useRef();
  const overlayRefs = React.useRef([]);

  React.useLayoutEffect(() => {
    if (overlays.length === 0) {
      contentRef.current.inert = false;
    } else {
      contentRef.current.inert = true;

      const overlayKeys = overlays.map(overlay => overlay.key);

      for (let i = overlayKeys.length - 1; i > 0; i -= 1) {
        overlayRefs.current[overlayKeys[i]].inert = i !== overlayKeys.length - 1;
      }
    }
  }, [overlays]);

  return (
    <div className={cx('outer-container')}>
      <div ref={contentRef} className={cx('content-container')}>
        {children}
      </div>
      {overlays.map((overlay) => (
        <div
          key={overlay.key}
          ref={(overlayRef) => {
            overlayRefs.current[overlay.key] = overlayRef;
          }}
          className={cx('overlay-container')}
        >
          {overlay.component}
        </div>
      ))}
    </div>
  );
};

DynamicOverlayContainer.propTypes = propTypes;
DynamicOverlayContainer.defaultProps = defaultProps;

export default DynamicOverlayContainer;
