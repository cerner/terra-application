import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import styles from './PageLayoutHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const PageLayoutHeader = ({ onBack, title }) => (
  <div className={cx('page-layout-header')}>
    {onBack ? (
      <div className={cx('back-button-container')}>
        <Button
          className={cx(['header-button', 'back-button'])}
          data-terra-action-header="back-button"
          isIconOnly
          icon={<span className={cx('back')} />}
          text="Back"
          onClick={onBack}
          variant={ButtonVariants.UTILITY}
        />
      </div>
    ) : null}
    <div className={cx('title-container')}>
      {title}
    </div>
  </div>
);

PageLayoutHeader.propTypes = propTypes;

export default PageLayoutHeader;
