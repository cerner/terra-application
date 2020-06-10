import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import Button from 'terra-button';
import PageLayout from 'terra-application/lib/application-page/PageLayout';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconRight from 'terra-icon/lib/icon/IconRight';
import IconAdd from 'terra-icon/lib/icon/IconAdd';

import styles from './ChartSummaryPage.module.scss';

const cx = classNames.bind(styles);

const OrdersPage = ({ onDismissPage }) => {
  const [showDetails, setShowDetails] = React.useState(undefined);

  const pageActions = [{
    key: 'action-add-order',
    text: 'Add Order',
    icon: <IconAdd />,
    onSelect: () => alert('Add Order'),
  }, {
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => alert('Print Order'),
  }];

  return (
    <PageLayout
      pageTitle="Orders"
      onBack={onDismissPage}
      pageActions={pageActions}
    >
      <div style={{ padding: '1rem' }}>
        <div className={cx('card')}>
          <div className={cx('card-header')}>
            <div className={cx('title-container')}>
              Active Orders
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
      </div>
      {showDetails && (
        <PageLayout pageTitle={`${showDetails} Details`} onBack={() => { setShowDetails(undefined); }}>
          <div style={{ padding: '1rem' }}>
            <h1>Details here</h1>
          </div>
        </PageLayout>
      )}
    </PageLayout>
  );
};

export default OrdersPage;
