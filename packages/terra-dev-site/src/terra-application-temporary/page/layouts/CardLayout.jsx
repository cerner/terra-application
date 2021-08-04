import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const CardLayout = ({ children }) => {
  let cardContent;

  if (React.Children.count(children) === 1) {
    cardContent = children;
  } else {
    cardContent = React.Children.map(children, (child) => (
      <div className={cx('card-container')}>
        {child}
      </div>
    ));
  }

  return (
    <div
      className={cx('card-layout')}
      data-application-overflow-container
      tabIndex="0"
    >
      {cardContent}
    </div>
  );
};

CardLayout.propTypes = propTypes;

export default CardLayout;
