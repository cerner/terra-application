import React from 'react';
import classNames from 'classnames/bind';
import DisclosureComponent from './DisclosureComponent';
import SlidePanelManager from '../../../slide-panel-manager';
import styles from './SlidePanelManagerDefault.test.module.scss';

const cx = classNames.bind(styles);

const SlidePanelManagerDefault = () => (
  <div role="main" className={cx('content-wrapper')}>
    <SlidePanelManager
      navigationPromptResolutionOptions={{
        title: 'Test Title',
        startMessage: 'Test Start Message',
        content: <div>Test Content</div>,
        endMessage: 'Test End Message',
        acceptButtonText: 'Test Accept Text',
        rejectButtonText: 'Test Reject Text',
      }}
    >
      <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerDefault;
