import React from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button';

import PendingActionToggle from '../../shared/PendingActionToggle';
import BannerPresenter from '../../shared/BannerPresenter';

import styles from '../common-page-styles.module.scss';

const cx = classNames.bind(styles);

const Page1Content = ({ onDisclosePage2 }) => (
  <div style={{ padding: '1rem' }}>
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
          Page Disclosure
        </div>
      </div>
      <div style={{ padding: '10px' }}>
        <Button text="Show Page 2" onClick={(onDisclosePage2)} />
      </div>
    </div>
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
        Pending Actions
        </div>
      </div>
      <div style={{ padding: '1rem' }}>
        <PendingActionToggle />
      </div>
    </div>
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
        Notifications
        </div>
      </div>
      <div style={{ padding: '1rem' }}>
        <BannerPresenter />
      </div>
    </div>
  </div>
);

export default Page1Content;
