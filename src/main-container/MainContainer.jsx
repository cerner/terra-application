import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';

import { ApplicationIntlContext } from '../application-intl';
import SkipToLink from '../application-container/private/skip-to-links/SkipToLink';
import NavigationItemContext from '../navigation-item/NavigationItemContext';

import ActiveMainRegistrationContext from './private/ActiveMainRegistrationContext';

import styles from './MainContainer.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The elements to render within the main element.
   */
  children: PropTypes.node,
  /**
   * A string label describing the content within the main element. This value
   * will be applied to the element as a user-facing aria-label and should be
   * translated, if necessary. It will also be provided to consumers of the
   * ActiveMainContext when this element is active.
   */
  label: PropTypes.string.isRequired,
  /**
   * An object containing meta data related to the main element. This data is
   * provided to consumers of the ActiveMainContext to provide additional
   * information regarding the active main content.
   */
  metaData: PropTypes.object,
  /**
   * A function to be called when a ref has been assigned for the created
   * `<main>` element.
   */
  refCallback: PropTypes.func,
};

/**
 * The MainContainer can be used to create a semantic `<main>` element for the
 * application, within which the application's most important and dynamic
 * content will reside. A SkipToLink will be registered automatically to ensure
 * this content can be accessed quickly.
 */
const MainContainer = ({
  children, refCallback, label, metaData, ...otherProps
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const activeMainRegistration = React.useContext(ActiveMainRegistrationContext);
  const navigationItem = React.useContext(NavigationItemContext);

  const mainElementRef = React.useRef();
  const unregisterActiveMainRef = React.useRef();

  React.useEffect(() => {
    unregisterActiveMainRef.current = activeMainRegistration.register({
      label,
      metaData,
    });
  }, [
    activeMainRegistration,
    label,
    metaData,
    navigationItem.isActive,
    navigationItem.navigationKeys,
  ]);

  React.useEffect(() => () => {
    // A separate effect is used to unregister the active main when it is
    // unmounted to limit registration thrash on updates to props.
    unregisterActiveMainRef.current();
  }, []);

  return (
    <main
      aria-label={label}
      className={classNames(cx('main-container'), otherProps.className)}
      tabIndex="-1"
      ref={(mainRef) => {
        mainElementRef.current = mainRef;

        if (refCallback) {
          refCallback(mainRef);
        }
      }}
      {...otherProps}
    >
      <SkipToLink
        description={applicationIntl.formatMessage({
          id: 'terraApplication.mainContainer.skipToLabel',
        })}
        onSelect={() => {
          mainElementRef.current.focus();
        }}
      />
      {children}
    </main>
  );
};

MainContainer.propTypes = propTypes;

export default MainContainer;
