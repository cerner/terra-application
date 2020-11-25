import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const CardLayout = ({ children }) => {
  const [state, setState] = React.useState();

  return (
    <div className={cx('card-layout')}>
      {children}
    </div>
  );
};

CardLayout.propTypes = propTypes;

export default CardLayout;
