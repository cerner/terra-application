import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import StatusView from 'terra-status-view';
import ApplicationPageStatusContext from './ApplicationPageStatusContext';
import styles from './ApplicationPageStatusProvider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to be rendered within the context of the ApplicationPageStatusProvider.
   * Components rendered here are able to interact with ApplicationPageStatusProvider through
   * the ApplicationPageStatusContext.
   */
  children: PropTypes.node,
  /**
   * A function to be called with the current ref of the scrollable element rendered within the
   * ApplicationPageStatusProvider.
   */
  scrollRefCallback: PropTypes.func,
};

const ApplicationPageStatusProvider = ({ children, scrollRefCallback, ...customProps }) => {
  const [registeredPageStatus, setRegisteredPageStatus] = React.useState({});

  const contextValue = useMemo(() => ({
    show: (key, data) => {
      setRegisteredPageStatus(state => (
        {
          ...state,
          [`${key}`]: data,
        }
      ));
    },
    hide: (key) => {
      setRegisteredPageStatus((state) => {
        const newRegisteredPageStatus = { ...state };
        delete newRegisteredPageStatus[key];

        return newRegisteredPageStatus;
      });
    },
  }), []);

  const registeredPageStatusKeys = Object.keys(registeredPageStatus);
  const registeredButtonAttrs = registeredPageStatusKeys.map(key => (registeredPageStatus[key] && registeredPageStatus[key].buttonAttrs));
  const registeredMessage = registeredPageStatusKeys.map(key => (registeredPageStatus[key] && registeredPageStatus[key].message));
  const registeredTitle = registeredPageStatusKeys.map(key => (registeredPageStatus[key] && registeredPageStatus[key].title));
  const registeredVariant = registeredPageStatusKeys.map(key => (registeredPageStatus[key] && registeredPageStatus[key].variant));

  let className = cx('container');
  if (customProps.className) {
    className = [className, customProps.className].join(' ');
  }

  // In the event when multiple ApplicationPageStatus's are provided, the last rendered wins
  const lastIndex = registeredPageStatusKeys.length - 1;
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
        <ApplicationPageStatusContext.Provider value={contextValue}>
          {children}
        </ApplicationPageStatusContext.Provider>
      </Scroll>
    </div>
  );
};

ApplicationPageStatusProvider.propTypes = propTypes;

export default ApplicationPageStatusProvider;
