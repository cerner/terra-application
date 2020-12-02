import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';

import { ApplicationIntlContext } from '../application-intl';
import SkipToButton from '../application-container/private/skip-to/SkipToButton';
import { deferExecution } from '../utils/lifecycle-utils';

import styles from './MainContainer.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * A function to be called when a ref has been assigned for the created
   * `<main>` element.
   */
  refCallback: PropTypes.func,
};

/**
 * The MainContainer can be used to create a semantic `<main>` element for the application
 * within which the application's most important and dynamic content will reside. A SkipToButton
 * will be registered to ensure accessibility of this content is maximized.
 *
 * Only one `<main>` element should be present on the DOM at any given time. As a result, the
 * MainContainer should be used with utmost caution. Only use the MainContainer when _not_ using a
 * framework-provided Layout to render Pages. Layouts that feature a `renderPage` prop will render
 * a MainContainer automatically when the `renderPage` prop is used.
 */
const MainContainer = ({ refCallback, ...otherProps }) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const mainElementRef = React.useRef();

  const mainElementClasses = classNames(cx('main-container'), otherProps.className);

  return (
    <>
      <SkipToButton
        isMain
        description={applicationIntl.formatMessage({ id: 'terraApplication.mainContainer.skipToLabel' })}
        onSelect={() => {
          deferExecution(() => mainElementRef.current?.focus());
        }}
      />
      <main
        tabIndex="-1"
        ref={(mainRef) => {
          mainElementRef.current = mainRef;

          if (refCallback) {
            refCallback(mainRef);
          }
        }}
        {...otherProps}
        className={mainElementClasses}
      />
    </>
  );
};

MainContainer.propTypes = propTypes;

export default MainContainer;
