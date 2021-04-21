import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';

import { ApplicationIntlContext } from '../application-intl';
import SkipToButton from '../application-container/private/skip-to/SkipToButton';
import useActiveMainPageRegistry from '../application-container/private/active-main-page/useActiveMainPageRegistry';
import { deferExecution } from '../utils/lifecycle-utils';

import styles from './MainContainer.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * A function to be called when a ref has been assigned for the created
   * `<main>` element.
   */
  refCallback: PropTypes.func,
  // TODO DOC
  mainKey: PropTypes.string,
  mainLabel: PropTypes.string,
  mainMetaData: PropTypes.shape({}),
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
const MainContainer = ({
  refCallback, mainKey, mainLabel, mainMetaData, ...otherProps
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const mainElementRef = React.useRef();

  // TODO figure out this awkward mapping. Page-prefixed stuff is weird here.
  const mainPageData = mainKey ? { pageKey: mainKey, label: mainLabel, metaData: mainMetaData } : undefined;
  useActiveMainPageRegistry(mainPageData);

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
        className={classNames(cx('main-container'), otherProps.className)}
      />
    </>
  );
};

MainContainer.propTypes = propTypes;

export default MainContainer;
