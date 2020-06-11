import React from 'react';
import classNames from 'classnames/bind';

import ModalManager from '../../../modal-manager';
import { BannerProvider } from '../../../banner';

import DisclosureComponent from './DisclosureComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerWithHeaderAdapter = () => (
  <div role="main" className={cx('content-wrapper')}>
    <BannerProvider>
      <ModalManager>
        <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
      </ModalManager>
    </BannerProvider>
  </div>
);

export default ModalManagerWithHeaderAdapter;
