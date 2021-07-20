import React from 'react';
import classNames from 'classnames/bind';
import styles from './example.module.scss';

const cx = classNames.bind(styles);

const TagComp = () => (
  <h1 className={cx('body')}>
    I am a test
  </h1>
);

export default TagComp;
