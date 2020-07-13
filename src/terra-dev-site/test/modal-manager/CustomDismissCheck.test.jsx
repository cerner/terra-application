import React from 'react';
import classNames from 'classnames/bind';

import ModalManager from '../../../modal-manager';

import DisclosureComponent from './DisclosureComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const CustomDismissCheck = () => (
  <div role="main" className={cx('content-wrapper')}>
    <ModalManager>
      <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter useCustomDismissCheck />
    </ModalManager>
  </div>
);

export default CustomDismissCheck;
