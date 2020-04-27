import React, {
  useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';

import ModalPresenter from './ModalPresenter';
import PendingActionToggle from './PendingActionToggle';
import LoadingOverlayPresenter from './LoadingOverlayPresenter';
import ErrorThrower from './ErrorThrower';

import styles from './AppPage.module.scss';

const cx = classNames.bind(styles);

const AppPage = ({ pageName }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  useEffect(() => {
    if (isInitialized) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setIsInitialized(true);
    }, window.TEST_APP_TIMEOUT);

    return () => {
      clearTimeout(timeout);
    };
  }, [isInitialized]);

  if (!isInitialized) {
    return <ApplicationLoadingOverlay isOpen backgroundStyle="clear" />;
  }

  return (
    <div className={cx('page-content', theme.className)}>
      <h1>{pageName}</h1>
      <h3>Configuration Properties</h3>
      <p>
        Active Breakpoint:
        {' '}
        <span>{activeBreakpoint}</span>
      </p>
      <p>
        Intl Locale:
        {' '}
        <span>{applicationIntl.locale}</span>
      </p>
      <ErrorThrower />
      <LoadingOverlayPresenter />
      <ModalPresenter />
      <PendingActionToggle />
      <h3>Themeing</h3>
      <p>The div below uses the theme context to apply styling.</p>
      <div className={cx('themed-block')} />
    </div>
  );
};

AppPage.propTypes = {
  pageName: PropTypes.string,
};

export default AppPage;
