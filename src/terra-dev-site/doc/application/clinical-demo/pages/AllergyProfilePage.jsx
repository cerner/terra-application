import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import PageLayout from 'terra-application/lib/application-page/PageLayout';
import IconAdd from 'terra-icon/lib/icon/IconAdd';

import useDeferredInitializer from '../useDeferredInitializer';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import AddAllergyModal from '../modals/AddAllergyModal';
import PendingActionToggle from '../../demo/PendingActionToggle';

import styles from './ChartReviewPage.module.scss';

const cx = classNames.bind(styles);

const AllergiesPage = ({ onRequestDismiss }) => {
  const isInitialized = useDeferredInitializer();
  const [showAddAllergyModal, setShowAddAllergyModal] = React.useState(false);

  const pageActions = [{
    key: 'action-add-allergy',
    text: 'Print',
    icon: <IconAdd />,
    onSelect: () => { setShowAddAllergyModal(true); },
    isDisabled: !isInitialized,
  }];

  return (
    <PageLayout
      pageTitle="Allergy Profile"
      onBack={onRequestDismiss}
      pageActions={pageActions}
    >
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
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
        {showAddAllergyModal && <AddAllergyModal onRequestDismiss={() => { setShowAddAllergyModal(false); }} />}
      </div>
    </PageLayout>
  );
};

export default AllergiesPage;
