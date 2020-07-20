import React from 'react';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list';
import Button from 'terra-button';
import IconRight from 'terra-icon/lib/icon/IconRight';
import Popup from 'terra-popup';

import BannerPresenter from '../../shared/BannerPresenter';
import PendingActionToggle from '../../../demo/PendingActionToggle';

import styles from '../common-page-styles.module.scss';

const cx = classNames.bind(styles);

const OrderProfilePageContent = ({ onShowAllergies, onShowDetails, onSaveOrders }) => {
  const [showPopup, setShowPopup] = React.useState(false);
  const popupButtonRef = React.useRef();

  return (
    <div style={{ padding: '1rem' }}>
      <div className={cx('card')}>
        <div className={cx('card-header')}>
          <div className={cx('title-container')}>
          Active Orders
          </div>
          <div className={cx('action-container')}>
            <Button variant="de-emphasis" isReversed text="Allergy Profile" icon={<IconRight />} onClick={onShowAllergies} />
          </div>
        </div>
        <List dividerStyle="standard">
          <Item className={cx('list-item')}>
            <div className={cx('order-action-item')}>
              <div className={cx('text')}>Acetaminophen</div>
              <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { onShowDetails('Acetaminophen'); }} /></div>
            </div>
          </Item>
          <Item className={cx('list-item')}>
            <div className={cx('order-action-item')}>
              <div className={cx('text')}>Morphine</div>
              <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { onShowDetails('Morphine'); }} /></div>
            </div>
          </Item>
          <Item className={cx('list-item')}>
            <div className={cx('order-action-item')}>
              <div className={cx('text')}>Lisinopril</div>
              <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { onShowDetails('Lisinopril'); }} /></div>
            </div>
          </Item>
          <Item className={cx('list-item')}>
            <div className={cx('order-action-item')}>
              <div className={cx('text')}>Alegra</div>
              <div className={cx('action')}><Button variant="de-emphasis" text="Details" onClick={() => { onShowDetails('Alegra'); }} /></div>
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
            <div>Popup content goes here</div>
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
            onClick={onSaveOrders}
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
  );
};

export default OrderProfilePageContent;
