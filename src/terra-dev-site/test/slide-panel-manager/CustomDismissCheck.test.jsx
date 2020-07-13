import React from 'react';
import classNames from 'classnames/bind';
import DisclosureComponent from './DisclosureComponent';
import SlidePanelManager from '../../../slide-panel-manager';
import styles from './SlidePanelManagerDefault.test.module.scss';

const cx = classNames.bind(styles);

const CustomDismissCheck = () => (
  <div role="main" className={cx('content-wrapper')}>
    <SlidePanelManager>
      <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter useCustomDismissCheck />
    </SlidePanelManager>
  </div>
);

export default CustomDismissCheck;
