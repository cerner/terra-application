import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import Button from 'terra-button';
import PageLayout from 'terra-application/lib/application-page/PageLayout';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconTag from 'terra-icon/lib/icon/IconTag';
import IconRight from 'terra-icon/lib/icon/IconRight';

import useDeferredInitializer from './useDeferredInitializer';
import AllergiesPage from './AllergiesPage';
import OrdersPage from './OrdersPage';

import styles from './ChartSummaryPage.module.scss';
import ApplicationLoadingOverlay from '../../../../../../application-loading-overlay';

const cx = classNames.bind(styles);

const ChartSummaryPage = ({ onDismissPage }) => {
  const isInitialized = useDeferredInitializer();

  const [showAllergiesProfile, setShowAllergiesProfile] = React.useState(false);
  const [showOrderProfile, setShowOrderProfile] = React.useState(false);

  const pageActions = [{
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => alert('Chart Review Printing'),
    isDisabled: !isInitialized,
  }, {
    key: 'action-tag',
    text: 'Tag',
    icon: <IconTag />,
    onSelect: () => alert('Chart Review Tagging'),
    isDisabled: !isInitialized,
  }];

  return (
    <PageLayout
      pageTitle="Chart Review"
      onBack={onDismissPage}
      pageActions={pageActions}
    >
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      <div style={{ padding: '1rem' }}>
        <div className={cx('card')}>
          <div className={cx('card-header')}>
            <div className={cx('title-container')}>
              Allergies
            </div>
            <div className={cx('action-container')}>
              <Button variant="de-emphasis" isReversed text="Allergy Profile" icon={<IconRight />} onClick={() => { setShowAllergiesProfile(true); }} />
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
              <Button variant="de-emphasis" isReversed text="Order Profile" icon={<IconRight />} onClick={() => { setShowOrderProfile(true); }} />
            </div>
          </div>
          <List dividerStyle="standard">
            <Item className={cx('list-item')}>Acetaminophen</Item>
            <Item className={cx('list-item')}>Morphine</Item>
            <Item className={cx('list-item')}>Lisinopril</Item>
            <Item className={cx('list-item')}>Alegra</Item>
          </List>
        </div>
      </div>
      {showAllergiesProfile && <AllergiesPage onDismissPage={() => { setShowAllergiesProfile(false); }} />}
      {showOrderProfile && <OrdersPage onDismissPage={() => { setShowOrderProfile(false); }} />}
    </PageLayout>
  );
};

export default ChartSummaryPage;
