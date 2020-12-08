import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

const Card = ({
  label, children,
}) => (
  <div className={cx('card')}>
    { label && (
      <div className={cx('card-header')}>
        <div className={cx('label-container')}>
          {label}
        </div>
      </div>
    )}
    <div className={cx('card-body')}>
      {children}
    </div>
  </div>
);

Card.propTypes = propTypes;

export default Card;
