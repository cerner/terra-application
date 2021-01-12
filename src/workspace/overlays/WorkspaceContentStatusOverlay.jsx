import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import StatusIndicator from '../../shared/StatusIndicator';

import styles from './WorkspaceContentStatusOverlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  variant: PropTypes.oneOf(['default', 'loading']),
  message: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  variant: 'default',
};

const WorkspaceContentStatusOverlay = ({ variant, message, children }) => (
  <div
    className={cx('status-overlay')}
    aria-live="polite"
  >
    <StatusIndicator variant={variant} message={message}>
      {children}
    </StatusIndicator>
  </div>
);

WorkspaceContentStatusOverlay.propTypes = propTypes;
WorkspaceContentStatusOverlay.defaultProps = defaultProps;

export default WorkspaceContentStatusOverlay;
