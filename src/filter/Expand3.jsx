import React, {
  useState,
} from 'react';
import classNames from 'classnames/bind';
import Inline3 from './Inline3';
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

const Expand3 = ({ disclosureManager }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onClose = (event, keys) => {
    // const keys = metaArray.map((metaData) => {
    //   return metaData.key;
    // })
    setSelectedKeys(keys);
  };

  return (
    <button
      type="button"
      aria-haspopup
      tabIndex="0"
      className={cx('frame')}
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'modal',
          dimensions: { height: '420', width: '320' },
          content: {
            key: 'magic-muffin-filter3',
            component: <Inline3 onChange={onClose} data={selectData} selected={selectedKeys} />,
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

Expand3.propTypes = propTypes;

export default withDisclosureManager(Expand3);
