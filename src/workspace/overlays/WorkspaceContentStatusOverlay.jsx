import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import StatusIndicator from '../../shared/StatusIndicator';

import styles from './WorkspaceContentStatusOverlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  variant: PropTypes.oneOf(['no-data', 'no-matching-results', 'not-authorized', 'error']),
  message: PropTypes.string,
  children: PropTypes.node,
};

const WorkspaceContentStatusOverlay = ({ variant, message, children }) => (
  <div
    className={cx('status-overlay')}
    role="status"
    data-testid="workspace-content-status"
  >
    <StatusIndicator variant={variant} message={message}>
      {children}
    </StatusIndicator>
  </div>
);

WorkspaceContentStatusOverlay.propTypes = propTypes;

export default WorkspaceContentStatusOverlay;
