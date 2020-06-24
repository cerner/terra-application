import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import Button from 'terra-button';
import ApplicationPage from 'terra-application/lib/application-page/ApplicationPage';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconRight from 'terra-icon/lib/icon/IconRight';

import Popup from 'terra-popup';
import AllergyProfilePage from './AllergyProfilePage';
import AddOrderModal from '../modals/AddOrderModal';
import PrintModal from '../modals/PrintModal';
import useDeferredInitializer from '../useDeferredInitializer';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';
import PendingActionToggle from '../../demo/PendingActionToggle';

import styles from './ChartReviewPage.module.scss';

const cx = classNames.bind(styles);

const OrdersPage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();

  const [showPopup, setShowPopup] = React.useState(false);
  const popupButtonRef = React.useRef();

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
    <ApplicationPage
      title="Order Profile"
      actions={pageActions}
      onRequestClose={onRequestClose}
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
        <div className={cx('card')}>
          <div className={cx('card-header')}>
            <div className={cx('title-container')}>
              Popupu
            </div>
          </div>
          <div style={{ padding: '1rem' }}>
            <Button refCallback={(ref) => { popupButtonRef.current = ref; }} text="Show Popup" onClick={() => { setShowPopup(true); }} />
            {showPopup && (
            <Popup
              isOpen
              targetRef={() => popupButtonRef.current}
              onRequestClose={() => { setShowPopup(false); }}
            >
              <div>Hi mom</div>
            </Popup>
            )}
          </div>
        </div>
      </div>
      {showDetails && (
        <ApplicationPage title={`${showDetails} Details`} onRequestClose={() => { setShowDetails(undefined); }}>
          <div style={{ padding: '1rem' }}>
            <h1>
              {showDetails}
              {' '}
              details here...
            </h1>
          </div>
        </ApplicationPage>
      )}
      {showAllergiesProfile && <AllergyProfilePage onRequestClose={() => { setShowAllergiesProfile(false); }} />}
      {showAddOrderModal && <AddOrderModal onRequestClose={() => { setShowAddOrderModal(false); }} />}
      {showPrintModal && <PrintModal onRequestClose={() => { setShowPrintModal(false); }} />}
    </ApplicationPage>
  );
};

export default OrdersPage;
