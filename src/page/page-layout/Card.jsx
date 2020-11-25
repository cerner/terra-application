import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  fill: PropTypes.bool,
  minHeightFill: PropTypes.bool,
};

const Card = ({
  title, children, fill, minHeightFill,
}) => (
  <>
    <div className={cx('card', { fill, 'min-height-fill': minHeightFill })}>
      <div className={cx('card-header')}>
        <div className={cx('title-container')}>
          {title}
        </div>
      </div>
      <div className={cx('card-body')} data-application-overflow-container="true">
        {children}
      </div>
    </div>
    <div style={{ height: '10px', visibility: 'hidden' }} />
  </>
);

Card.propTypes = propTypes;

export default Card;
