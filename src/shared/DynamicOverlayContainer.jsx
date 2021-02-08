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
  const focusAnchorRef = React.useRef();
  const focusTriggersRef = React.useRef({});

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
    const { activeElement } = document;

    if (overlays.length !== 0) {
      if (contentRef.current.contains(activeElement)) {
        focusTriggersRef.current['__dynamic-overlay-content__'] = activeElement;
        focusAnchorRef.current.focus();
      }

      contentRef.current.inert = true;
    } else {
      contentRef.current.inert = false;

      const cachedActiveElement = focusTriggersRef.current['__dynamic-overlay-content__'];
      if (cachedActiveElement && contentRef.current.contains(cachedActiveElement) && (document.activeElement === focusAnchorRef.current || focusAnchorRef.current.contains(document.activeElement))) {
        cachedActiveElement.focus();

        focusTriggersRef.current['__dynamic-overlay-content__'] = undefined;
      }
    }

    for (let i = 0, count = overlays.length; i < count; i += 1) {
      if (i !== count - 1) {
        if (overlayRefs[i].element.contains(activeElement)) {
          focusTriggersRef.current[overlayRefs[i].key] = activeElement;
          focusAnchorRef.current.focus();
        }

        overlayRefs[i].element.inert = true;
      } else {
        overlayRefs[i].element.inert = false;

        const cachedActiveElement = focusTriggersRef.current[overlayRefs[i].key];
        if (cachedActiveElement && overlayRefs[i].element.contains(cachedActiveElement) && (document.activeElement === focusAnchorRef.current || focusAnchorRef.current.contains(document.activeElement))) {
          cachedActiveElement.focus();

          focusTriggersRef.current[overlayRefs[i].key] = undefined;
        }
      }
    }
  }, [overlayRefs, overlays]);

  return (
    <div className={cx('outer-container')} ref={focusAnchorRef} tabIndex="-1">
      <div ref={contentRef} className={cx('content-container')}>
        {children}
      </div>
      {overlays.map((overlay, index) => (
        <div
          key={overlay.key}
          ref={(overlayRef) => {
            overlayRefs[index] = {
              key: overlay.key,
              element: overlayRef,
            };
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
