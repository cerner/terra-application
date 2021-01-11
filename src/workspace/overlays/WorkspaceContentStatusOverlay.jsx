import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import StatusContent from '../../shared/StatusContent';

import styles from './WorkspaceContentStatusOverlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  variant: PropTypes.oneOf(['default', 'loading']),
};

const defaultProps = {
  variant: 'default',
};

const WorkspaceContentStatusOverlay = ({ variant }) => (
  <div
    className={cx('status-overlay')}
    aria-live="polite"
  >
    <StatusContent variant="no-data" message="This is a message" />
  </div>
);

WorkspaceContentStatusOverlay.propTypes = propTypes;
WorkspaceContentStatusOverlay.defaultProps = defaultProps;

export default WorkspaceContentStatusOverlay;
