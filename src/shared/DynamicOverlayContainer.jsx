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

  /**
   * The refs for each overlay are kept in a local variable to ensure
   * it expires after each render to ensure that removed overlays do not
   * persist in memory.
   */
  const overlayRefs = [];

  /**
   * This effect ensures that the proper layers are rendered
   * as inert prior to painting to the DOM. This effect will execute
   * after every update of the DynamicOverlayContainer; however, the
   * inner inert logic will abort early if the element is already in
   * its assigned state.
   */
  React.useLayoutEffect(() => {
    contentRef.current.inert = overlays.length !== 0;

    for (let i = overlays.length - 1; i > 0; i -= 1) {
      overlayRefs[i].inert = i !== overlays.length - 1;
    }
  }, [overlayRefs, overlays]);

  return (
    <div className={cx('outer-container')}>
      <div ref={contentRef} className={cx('content-container')}>
        {children}
      </div>
      {overlays.map((overlay, index) => (
        <div
          key={overlay.key}
          ref={(overlayRef) => {
            overlayRefs[index] = overlayRef;
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
