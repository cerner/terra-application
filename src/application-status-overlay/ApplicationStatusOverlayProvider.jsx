import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import StatusView from 'terra-status-view';
import ApplicationStatusOverlayContext from './ApplicationStatusOverlayContext';
import styles from './ApplicationStatusOverlayProvider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to be rendered within the context of the ApplicationStatusOverlayProvider.
   * Components rendered here are able to interact with ApplicationStatusOverlayProvider through
   * the ApplicationStatusOverlayContext.
   */
  children: PropTypes.node,
  /**
   * A function to be called with the current ref of the scrollable element rendered within the
   * ApplicationStatusOverlayProvider.
   */
  scrollRefCallback: PropTypes.func,
};

const ApplicationStatusOverlayProvider = ({ children, scrollRefCallback, ...customProps }) => {
  const [registeredStatusOverlay, setRegisteredStatusOverlay] = React.useState({});

  const refContainer = React.useRef();

  const contextValue = useMemo(() => ({
    show: (key, data) => {
      setRegisteredStatusOverlay(state => (
        {
          ...state,
          [`${key}`]: data,
        }
      ));
    },
    hide: (key) => {
      setRegisteredStatusOverlay((state) => {
        const newRegisteredStatusOverlay = { ...state };
        delete newRegisteredStatusOverlay[key];

        return newRegisteredStatusOverlay;
      });
    },
  }), []);

  const disableContainerChildrenFocus = () => {
    if (refContainer.current && refContainer.current.querySelector('[data-status-overlay-container-content]')) {
      refContainer.current.querySelector('[data-status-overlay-container-content]').setAttribute('inert', '');
    }
  };

  const enableContainerChildrenFocus = () => {
    if (refContainer.current && refContainer.current.querySelector('[data-status-overlay-container-content]')) {
      refContainer.current.querySelector('[data-status-overlay-container-content]').removeAttribute('inert');
      refContainer.current.querySelector('[data-status-overlay-container-content]').removeAttribute('aria-hidden');
    }
  };

  const registeredStatusOverlayKeys = Object.keys(registeredStatusOverlay);
  // In the event when multiple ApplicationStatusOverlay's are provided, the last rendered wins
  const lastRegisteredStatusOverlayKey = (registeredStatusOverlayKeys.length > 0) && registeredStatusOverlayKeys[registeredStatusOverlayKeys.length - 1];

  const registeredButtonAttrs = registeredStatusOverlay[lastRegisteredStatusOverlayKey] && registeredStatusOverlay[lastRegisteredStatusOverlayKey].buttonAttrs;
  const registeredMessage = registeredStatusOverlay[lastRegisteredStatusOverlayKey] && registeredStatusOverlay[lastRegisteredStatusOverlayKey].message;
  const registeredTitle = registeredStatusOverlay[lastRegisteredStatusOverlayKey] && registeredStatusOverlay[lastRegisteredStatusOverlayKey].title;
  const registeredVariant = registeredStatusOverlay[lastRegisteredStatusOverlayKey] && registeredStatusOverlay[lastRegisteredStatusOverlayKey].variant;

  useEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
      // eslint-disable-next-line global-require
      require('wicg-inert/dist/inert');
    }
  });

  useEffect(() => {
    if (registeredStatusOverlayKeys.length > 0) {
      disableContainerChildrenFocus();
    } else {
      enableContainerChildrenFocus();
    }
  }, [registeredStatusOverlayKeys]);

  let className = cx('container');
  if (customProps.className) {
    className = [className, customProps.className].join(' ');
  }

  const statusView = (registeredStatusOverlayKeys.length > 0) && (
    <StatusView
      buttonAttrs={registeredButtonAttrs}
      className={cx('status-view')}
      message={registeredMessage}
      title={registeredTitle}
      variant={registeredVariant}
    />
  );

  return (
    <div {...customProps} ref={refContainer} className={className}>
      {statusView}
      <Scroll refCallback={scrollRefCallback}>
        <ApplicationStatusOverlayContext.Provider value={contextValue}>
          <div data-status-overlay-container-content className={cx('container-content')}>
            {children}
          </div>
        </ApplicationStatusOverlayContext.Provider>
      </Scroll>
    </div>
  );
};

ApplicationStatusOverlayProvider.propTypes = propTypes;

export default ApplicationStatusOverlayProvider;
