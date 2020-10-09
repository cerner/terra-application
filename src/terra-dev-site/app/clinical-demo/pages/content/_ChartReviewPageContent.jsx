import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import Button from 'terra-button';

import IconRight from 'terra-icon/lib/icon/IconRight';

import BannerPresenter from '../../shared/BannerPresenter';
import PendingActionToggle from '../../shared/PendingActionToggle';

import styles from '../common-page-styles.module.scss';

const cx = classNames.bind(styles);

const ChartSummaryPageContent = ({ onShowAllergies, onShowOrders }) => (
  <div style={{ padding: '1rem' }}>
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
        Allergies
        </div>
        <div className={cx('action-container')}>
          <Button variant="de-emphasis" isReversed text="Allergy Profile" icon={<IconRight />} onClick={onShowAllergies} />
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
        Orders
        </div>
        <div className={cx('action-container')}>
          <Button variant="de-emphasis" isReversed text="Order Profile" icon={<IconRight />} onClick={onShowOrders} />
        </div>
      </div>
      <List dividerStyle="standard">
        <Item className={cx('list-item')}>Acetaminophen</Item>
        <Item className={cx('list-item')}>Morphine</Item>
        <Item className={cx('list-item')}>Lisinopril</Item>
        <Item className={cx('list-item')}>Alegra</Item>
      </List>
    </div>
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
        Problems
        </div>
      </div>
      <List dividerStyle="standard">
        <Item className={cx('list-item')}>Pain</Item>
        <Item className={cx('list-item')}>Brain Pain</Item>
        <Item className={cx('list-item')}>Back Pain</Item>
        <Item className={cx('list-item')}>Leg Pain</Item>
        <Item className={cx('list-item')}>Arm Pain</Item>
        <Item className={cx('list-item')}>Chest Pain</Item>
        <Item className={cx('list-item')}>Shoulder Pain</Item>
        <Item className={cx('list-item')}>Neck Pain</Item>
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

export default ChartSummaryPageContent;
