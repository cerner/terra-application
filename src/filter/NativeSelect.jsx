import React, {
  useState,
} from 'react';
import classNames from 'classnames/bind';

import styles from './NativeSelect.module.scss';
const cx = classNames.bind(styles);

const NativeSelect = () => {
  return (
    <div className={cx('outer')}>
      <select value="volvo" onChange={event => console.log(event.currentTarget.value)} className={cx('select')}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default NativeSelect;
