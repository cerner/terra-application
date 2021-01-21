import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import StatusLayout from '../../shared/StatusLayout';

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
    <StatusLayout variant={variant} message={message}>
      {children}
    </StatusLayout>
  </div>
);

WorkspaceContentStatusOverlay.propTypes = propTypes;

export default WorkspaceContentStatusOverlay;
