import React from 'react';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';

import styles from './PageOverlayContainer.module.scss';

const cx = classNames.bind(styles);

const PageOverlayContainer = ({ isLoading, pageStatus, children }) => {
  const contentRef = React.useRef();
  const statusOverlayRef = React.useRef();
  const loadingOverlayRef = React.useRef();

  React.useLayoutEffect(() => {
    if (isLoading) {
      loadingOverlayRef.current.inert = null;
      statusOverlayRef.current.inert = true;
      contentRef.current.inert = true;
    } else if (pageStatus) {
      loadingOverlayRef.current.inert = true;
      statusOverlayRef.current.inert = null;
      contentRef.current.inert = true;
    } else {
      loadingOverlayRef.current.inert = true;
      statusOverlayRef.current.inert = true;
      contentRef.current.inert = null;
    }
  }, [isLoading, pageStatus]);

  const loadingOverlay = (
    <div
      className={cx('loading-overlay')}
      aria-live="polite"
    >
      <div className={cx('content')}>
        <IconSpinner className={cx('icon')} isSpin height="36" width="36" />
        <FormattedMessage id="terraApplication.PageOverlayContainer.loading">
          {loadingMessage => (
            <div className={cx('message')}>{loadingMessage}</div>
          )}
        </FormattedMessage>
      </div>
    </div>
  );

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div ref={contentRef} style={{ height: '100%' }}>
        {children}
      </div>
      <div ref={statusOverlayRef} style={{ height: '100%' }}>
        {pageStatus}
      </div>
      <div ref={loadingOverlayRef} style={{ height: '100%' }}>
        {isLoading ? loadingOverlay : undefined}
      </div>
    </div>
  );
};

export default PageOverlayContainer;
