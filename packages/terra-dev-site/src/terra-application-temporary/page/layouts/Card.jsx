import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { useDynamicHeading, DynamicHeadingProvider } from '../../shared/DynamicHeadingContext';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

const Card = ({
  label, children,
}) => {
  const { level } = useDynamicHeading();

  return (
    <div className={cx('card')}>
      { label && (
      <div className={cx('card-header')}>
        <div className={cx('label-container')} role="heading" aria-level={level}>
          {label}
        </div>
      </div>
      )}
      <div className={cx('card-body')}>
        <DynamicHeadingProvider>
          {children}
        </DynamicHeadingProvider>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
