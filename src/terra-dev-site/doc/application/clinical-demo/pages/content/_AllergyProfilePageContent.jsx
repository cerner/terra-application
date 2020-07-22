import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';

import PendingActionToggle from '../../../demo/PendingActionToggle';
import BannerPresenter from '../../shared/BannerPresenter';

import styles from '../common-page-styles.module.scss';

const cx = classNames.bind(styles);

const AllergyProfilePageContent = () => (
  <div style={{ padding: '1rem' }}>
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
        Active Allergies
        </div>
      </div>
      <List dividerStyle="standard">
        <Item className={cx('list-item')}>Latex</Item>
        <Item className={cx('list-item')}>Peanut</Item>
        <Item className={cx('list-item')}>Shellfish</Item>
        <Item className={cx('list-item')}>Penicillin</Item>
      </List>
    </div>
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
        Inactive Allergies
        </div>
      </div>
      <List dividerStyle="standard">
        <Item className={cx('list-item')}>Cat</Item>
        <Item className={cx('list-item')}>Dog</Item>
        <Item className={cx('list-item')}>Catdog</Item>
        <Item className={cx('list-item')}>Seasonal</Item>
      </List>
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

export default AllergyProfilePageContent;
