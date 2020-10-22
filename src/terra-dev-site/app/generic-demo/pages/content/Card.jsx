import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../common-page-styles.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const Card = ({ title, children }) => (
  <div className={cx('card')}>
    <div className={cx('card-header')}>
      <div className={cx('title-container')}>
        {title}
      </div>
    </div>
    <div className={cx('card-body')}>
      {children}
    </div>
  </div>
);

Card.propTypes = propTypes;

export default Card;
