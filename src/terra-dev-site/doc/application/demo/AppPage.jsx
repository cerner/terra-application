import React, {
  useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';

import ModalPresenter from './ModalPresenter';
import PendingActionToggle from './PendingActionToggle';
import LoadingOverlayPresenter from './LoadingOverlayPresenter';
import Expand from '../../../../filter/Expand';
import Expand2 from '../../../../filter/Expand2';
import Expand3 from '../../../../filter/Expand3';
import SingleListbox from '../../../../filter/SingleListbox';
import NativeSelect from '../../../../filter/NativeSelect';

import styles from './AppPage.module.scss';

const cx = classNames.bind(styles);

const AppPage = ({ pageName }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);
  const applicationIntl = useContext(ApplicationIntlContext);

  const [hasError, setHasError] = useState(false);

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

  if (hasError) {
    throw new Error(`${pageName} threw an error to test the application's error handling`);
  }

  return (
    <div className={cx('page-content')}>
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
      <h3>Error Handling</h3>
      <p>Press the button below to throw an exception that will be caught and handled by the framework</p>
      <button type="button" onClick={() => { setHasError(true); }}>Throw Error</button>
      <LoadingOverlayPresenter />
      <ModalPresenter />
      <PendingActionToggle />
      <p>Multi-select Filtered Dialog</p>
      <Expand />
      <p>Single-select Filtered Dialog</p>
      <Expand2 />
      <p>Multi-select Non-filtered Dialog</p>
      <Expand3 />
      <p>Single-select Non-filtered Inline</p>
      <SingleListbox
        {...{ style: { height: '300px', width: '200px' } }}
        columnData={{
          id: 'box-face-1',
          onSearch: () => {},
          onSelectItem: () => {},
          items: [{
            key: 'opt',
            node: 'option 1',
            metaData: { key: 'opt' },
          },
          {
            key: 'opt2',
            node: 'option 2',
            metaData: { key: 'opt2' },
          }],
        }}
      />
      <p>Single Select Native</p>
      <NativeSelect />
    </div>
  );
};

AppPage.propTypes = {
  pageName: PropTypes.string,
};

export default AppPage;
