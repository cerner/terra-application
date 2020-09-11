import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';

import styles from './ModalHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const ModalHeader = ({
  title, onClose,
}) => (
  <div className={cx('modal-header')}>
    <div className={cx('title-container')}>
      {title}
    </div>
    <div className={cx('actions-container')}>
      {onClose ? (
        <Button
          className={cx(['header-button'])}
          icon={<IconClose />}
          text="Close"
          onClick={onClose}
          variant={ButtonVariants.UTILITY}
        />
      ) : null}
    </div>
  </div>
);

ModalHeader.propTypes = propTypes;

export default ModalHeader;
