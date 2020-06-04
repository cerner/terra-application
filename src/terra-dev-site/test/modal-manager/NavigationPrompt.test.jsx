import React from 'react';
import classNames from 'classnames/bind';

import ModalManager from '../../../modal-manager';
import BannerCheckpoint from '../../../banner/BannerCheckpoint';

import DisclosureComponent from './DisclosureComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerWithHeaderAdapter = () => (
  <div role="main" className={cx('content-wrapper')}>
    <BannerCheckpoint>
      <ModalManager>
        <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
      </ModalManager>
    </BannerCheckpoint>
  </div>
);

export default ModalManagerWithHeaderAdapter;
