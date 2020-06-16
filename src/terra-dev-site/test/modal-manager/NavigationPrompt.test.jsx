import React from 'react';
import classNames from 'classnames/bind';

import ModalManager from '../../../modal-manager';
import { NotificationBannerProvider } from '../../../notification-banner';

import DisclosureComponent from './DisclosureComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerWithHeaderAdapter = () => (
  <div role="main" className={cx('content-wrapper')}>
    <NotificationBannerProvider>
      <ModalManager>
        <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
      </ModalManager>
    </NotificationBannerProvider>
  </div>
);

export default ModalManagerWithHeaderAdapter;
