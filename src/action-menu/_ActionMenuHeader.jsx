import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';

import { ApplicationIntlContext } from '../application-intl';

import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The label text to display for the header.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function for close button selection.
   * Returns the event e.e. onClose(event).
   */
  onClose: PropTypes.func,
};

const ActionMenuHeader = ({
  label,
  onClose,
}) => {
  const theme = React.useContext(ThemeContext);
  const intl = React.useContext(ApplicationIntlContext);

  return (
    <div className={cx('action-header', theme.className)}>
      <div aria-hidden className={cx('title')}>
        {label}
      </div>
      <div className={cx('close-button')}>
        {onClose ? (
          <Button
            icon={<IconClose />}
            text={intl.formatMessage({ id: 'terraApplication.actionMenu.headerCloseButtonLabel' })}
            onClick={onClose}
            variant="utility"
          />
        ) : undefined}
      </div>
    </div>
  );
};

ActionMenuHeader.propTypes = propTypes;

export default ActionMenuHeader;
