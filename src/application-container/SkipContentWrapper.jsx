import React from 'react';
import classNames from 'classnames/bind';

import { ApplicationIntlContext } from '../application-intl';

import styles from './SkipContentWrapper.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const SkipContentWrapper = ({ children }) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);

  return (
    <div>
      <button
        type="button"
        role="link"
        onClick={onSelectSkipToContent}
        className={cx('skip-content-button')}
      >
        {applicationIntl.formatMessage({ id: 'Terra.applicationNavigation.header.skipToContentTitle' })}
      </button>
      {children}
    </div>
  );
};

SkipContentWrapper.propTypes = propTypes;

export default SkipContentWrapper;
