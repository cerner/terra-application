import React, {
  useState,
} from 'react';
import classNames from 'classnames/bind';
import Inline2 from './Inline2';
import selectData from './mock-select';
import {
  withDisclosureManager,
  disclosureManagerShape,
} from '../disclosure-manager';

import styles from './Expand.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  disclosureManager: disclosureManagerShape,
};

const Expand2 = ({ disclosureManager }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onClose = (event, keys) => {
    // const keys = metaArray.map((metaData) => {
    //   return metaData.key;
    // })
    setSelectedKeys(keys);
  };

  return (
    <button
      aria-haspopup
      tabIndex="0"
      // role="select"
      className={cx('frame')}
      type="button"
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'modal',
          dimensions: { height: '420', width: '320' },
          content: {
            key: 'magic-muffin-filter2',
            component: <Inline2 onChange={onClose} data={selectData} selected={selectedKeys} />,
          },
        });
      }}
    >
      <div
        className={cx('display')}
      >
        {selectedKeys.join(' ')}
      </div>
      <div className={cx('arrow-icon')} />
    </button>
  );
};

Expand2.propTypes = propTypes;

export default withDisclosureManager(Expand2);
