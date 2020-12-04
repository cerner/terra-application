import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const CardLayout = ({ children, overflowIsDisabled }) => (
  <div
    className={cx('card-layout', { 'overflow-disabled': overflowIsDisabled })}
    data-application-overflow-container
    tabIndex="0"
  >
    {/* <div className={cx('width-normalizer')}> */}
    {children}
    {/* </div> */}
  </div>
);

CardLayout.propTypes = propTypes;

export default CardLayout;
