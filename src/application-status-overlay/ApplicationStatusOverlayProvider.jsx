import React, { useMemo } from 'react';
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

  const registeredStatusOverlayKeys = Object.keys(registeredStatusOverlay);
  const registeredButtonAttrs = registeredStatusOverlayKeys.map(key => (registeredStatusOverlay[key] && registeredStatusOverlay[key].buttonAttrs));
  const registeredMessage = registeredStatusOverlayKeys.map(key => (registeredStatusOverlay[key] && registeredStatusOverlay[key].message));
  const registeredTitle = registeredStatusOverlayKeys.map(key => (registeredStatusOverlay[key] && registeredStatusOverlay[key].title));
  const registeredVariant = registeredStatusOverlayKeys.map(key => (registeredStatusOverlay[key] && registeredStatusOverlay[key].variant));

  let className = cx('container');
  if (customProps.className) {
    className = [className, customProps.className].join(' ');
  }

  // In the event when multiple ApplicationStatusOverlay's are provided, the last rendered wins
  const lastIndex = registeredStatusOverlayKeys.length - 1;
  const statusView = (lastIndex >= 0) && (
    <StatusView
      buttonAttrs={registeredButtonAttrs[lastIndex]}
      className={cx('status-view')}
      message={registeredMessage[lastIndex]}
      title={registeredTitle[lastIndex]}
      variant={registeredVariant[lastIndex]}
    />
  );

  return (
    <div
      {...customProps}
      className={className}
    >
      {statusView}
      <Scroll refCallback={scrollRefCallback}>
        <ApplicationStatusOverlayContext.Provider value={contextValue}>
          {children}
        </ApplicationStatusOverlayContext.Provider>
      </Scroll>
    </div>
  );
};

ApplicationStatusOverlayProvider.propTypes = propTypes;

export default ApplicationStatusOverlayProvider;
