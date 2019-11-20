import React from 'react';
import classNames from 'classnames/bind';

import ModalManager from '../../../modal-manager';

import DisclosureComponent from './DisclosureComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerWithHeaderAdapter = () => (
  <div role="main" className={cx('content-wrapper')}>
    <ModalManager
      navigationPromptResolutionOptions={{
        title: 'Test Title',
        startMessage: 'Test Start Message',
        content: <div>Test Content</div>,
        endMessage: 'Test End Message',
        acceptButtonText: 'Test Accept Text',
        rejectButtonText: 'Test Reject Text',
      }}
    >
      <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
    </ModalManager>
  </div>
);

export default ModalManagerWithHeaderAdapter;
