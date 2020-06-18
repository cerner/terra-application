import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import Button from 'terra-button';
import PageLayout from 'terra-application/lib/application-page/PageLayout';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconRight from 'terra-icon/lib/icon/IconRight';

import AllergyProfilePage from './AllergyProfilePage';
import AddOrderModal from '../modals/AddOrderModal';
import PrintModal from '../modals/PrintModal';
import useDeferredInitializer from '../useDeferredInitializer';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import PendingActionToggle from '../../demo/PendingActionToggle';

import styles from './ChartReviewPage.module.scss';

const cx = classNames.bind(styles);

const OrdersPage = ({ onRequestDismiss }) => {
  const isInitialized = useDeferredInitializer();

  const [showDetails, setShowDetails] = React.useState(undefined);
  const [showAllergiesProfile, setShowAllergiesProfile] = React.useState(false);
  const [showAddOrderModal, setShowAddOrderModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);

  const pageActions = [{
    key: 'action-add-order',
    text: 'Add Order',
    icon: <IconAdd />,
    onSelect: () => { setShowAddOrderModal(true); },
    isDisabled: !isInitialized,
  }, {
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => { setShowPrintModal(true); },
    isDisabled: !isInitialized,
  }];

  return (
    <PageLayout
      pageTitle="Order Profile"
      onBack={onRequestDismiss}
      pageActions={pageActions}
    >
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      <div style={{ padding: '1rem' }}>
        <div className={cx('card')}>
          <div className={cx('card-header')}>
            <div className={cx('title-container')}>
              Active Orders
            </div>
            <div className={cx('action-container')}>
              <Button variant="de-emphasis" isReversed text="Allergy Profile" icon={<IconRight />} onClick={() => { setShowAllergiesProfile(true); }} />
            </div>
          </div>
          <List dividerStyle="standard">
            <Item className={cx('list-item')}>
              <div className={cx('order-action-item')}>
                <div className={cx('text')}>Acetaminophen</div>
                <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { setShowDetails('Acetaminophen'); }} /></div>
              </div>
            </Item>
            <Item className={cx('list-item')}>
              <div className={cx('order-action-item')}>
                <div className={cx('text')}>Morphine</div>
                <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { setShowDetails('Morphine'); }} /></div>
              </div>
            </Item>
            <Item className={cx('list-item')}>
              <div className={cx('order-action-item')}>
                <div className={cx('text')}>Lisinopril</div>
                <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { setShowDetails('Lisinopril'); }} /></div>
              </div>
            </Item>
            <Item className={cx('list-item')}>
              <div className={cx('order-action-item')}>
                <div className={cx('text')}>Alegra</div>
                <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { setShowDetails('Alegra'); }} /></div>
              </div>
            </Item>
          </List>
        </div>
        <div className={cx('card')}>
          <div className={cx('card-header')}>
            <div className={cx('title-container')}>
              Inactive Orders
            </div>
          </div>
          <List dividerStyle="standard">
            <Item className={cx('list-item')}>Advil</Item>
            <Item className={cx('list-item')}>Aspirin</Item>
            <Item className={cx('list-item')}>Multivitamin</Item>
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
      </div>
      {showDetails && (
        <PageLayout pageTitle={`${showDetails} Details`} onBack={() => { setShowDetails(undefined); }}>
          <div style={{ padding: '1rem' }}>
            <h1>
              {showDetails}
              {' '}
              details here...
            </h1>
          </div>
        </PageLayout>
      )}
      {showAllergiesProfile && <AllergyProfilePage onRequestDismiss={() => { setShowAllergiesProfile(false); }} />}
      {showAddOrderModal && <AddOrderModal onRequestDismiss={() => { setShowAddOrderModal(false); }} />}
      {showPrintModal && <PrintModal onRequestDismiss={() => { setShowPrintModal(false); }} />}
    </PageLayout>
  );
};

export default OrdersPage;
