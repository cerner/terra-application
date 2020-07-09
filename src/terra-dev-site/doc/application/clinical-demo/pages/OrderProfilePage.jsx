import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import Button from 'terra-button';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconRight from 'terra-icon/lib/icon/IconRight';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import IconModified from 'terra-icon/lib/icon/IconModified';
import Popup from 'terra-popup';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import ApplicationBlockingOverlay from '../../../../../application-blocking-overlay/ApplicationBlockingOverlay';
import ApplicationLoadingOverlay from '../../../../../application-loading-overlay';

import AllergyProfilePage from './AllergyProfilePage';
import AddOrderModal from '../modals/AddOrderModal';
import PrintModal from '../modals/PrintModal';
import useDeferredInitializer from '../shared/useDeferredInitializer';
import BannerPresenter from '../shared/BannerPresenter';
import HeaderActionPopup from '../shared/HeaderActionPopup';
import PendingActionToggle from '../../demo/PendingActionToggle';

import styles from './ChartReviewPage.module.scss';

const cx = classNames.bind(styles);

const OrdersPage = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();

  const [showPopup, setShowPopup] = React.useState(false);
  const [saveOrders, setSaveOrders] = React.useState(false);

  const popupButtonRef = React.useRef();
  const popupAction1ButtonRef = React.useRef();
  const popupAction2ButtonRef = React.useRef();

  const [showDetails, setShowDetails] = React.useState(undefined);
  const [showAllergiesProfile, setShowAllergiesProfile] = React.useState(false);
  const [showAddOrderModal, setShowAddOrderModal] = React.useState(false);
  const [showPrintModal, setShowPrintModal] = React.useState(false);
  const [showPopup1, setShowPopup1] = React.useState(false);
  const [showPopup2, setShowPopup2] = React.useState(false);

  React.useEffect(() => {
    if (!saveOrders) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setSaveOrders(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [saveOrders]);

  const pageActions = [{
    key: 'action-add-order',
    text: 'Add Order',
    icon: <IconAdd />,
    onSelect: () => { setShowAddOrderModal(true); },
    isDisabled: !isInitialized,
  }, {
    key: 'action-popup-1',
    text: 'Popup 1',
    icon: <IconModified />,
    onSelect: () => { setShowPopup1(true); },
    buttonRefCallback: (ref) => { popupAction1ButtonRef.current = ref; },
    isDisabled: !isInitialized,
  }, {
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => { setShowPrintModal(true); },
    isDisabled: !isInitialized,
  }, {
    key: 'action-popup-2',
    text: 'Popup 2',
    icon: <IconTrash />,
    onSelect: () => { setShowPopup2(true); },
    buttonRefCallback: (ref) => { popupAction2ButtonRef.current = ref; },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Order Profile"
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      {(!isInitialized || saveOrders)
        && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {saveOrders
        && <ApplicationBlockingOverlay />}
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
              Popup
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
        <div className={cx('card')}>
          <div className={cx('card-header')}>
            <div className={cx('title-container')}>
              Save
            </div>
          </div>
          <div style={{ padding: '1rem' }}>
            <p>Saving orders will block user input for five seconds.</p>
            <Button
              text="Save Orders"
              onClick={() => {
                setSaveOrders(true);
              }}
            />
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
      {showDetails
        && (
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
      {showAllergiesProfile
        && <AllergyProfilePage onRequestClose={() => { setShowAllergiesProfile(false); }} />}
      {showAddOrderModal
        && <AddOrderModal onRequestClose={() => { setShowAddOrderModal(false); }} />}
      {showPrintModal
        && <PrintModal onRequestClose={() => { setShowPrintModal(false); }} />}
      {showPopup1 && (
        <HeaderActionPopup
          title="Popup 1"
          targetRef={() => popupAction1ButtonRef.current}
          onRequestClose={() => { setShowPopup1(false); }}
        >
          <div>Popup Action 1</div>
        </HeaderActionPopup>
      )}
      {showPopup2 && (
        <HeaderActionPopup
          title="Popup 2"
          targetRef={() => popupAction2ButtonRef.current}
          onRequestClose={() => { setShowPopup2(false); }}
        >
          <div>Popup Action 2</div>
        </HeaderActionPopup>
      )}
    </ApplicationPage>
  );
};

export default OrdersPage;
