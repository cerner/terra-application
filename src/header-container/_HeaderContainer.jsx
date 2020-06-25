import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import styles from './HeaderContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The header element to be placed within the header area of the container.
   */
  header: PropTypes.node,
  /**
   * The children to be placed within the main content area of the container.
   */
  children: PropTypes.node,
};

const defaultProps = {
  header: undefined,
  children: undefined,
};

const HeaderContainer = ({
  header,
  children,
  ...customProps
}) => {
  const contentLayoutClassNames = cx([
    'header-container',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={contentLayoutClassNames}>
      {header && <div className={cx('header')}>{header}</div>}
      <div className={cx('main')}>
        {/* <div className={cx('normalizer')}> */}
        {children}
        {/* </div> */}
      </div>
    </div>
  );
};

HeaderContainer.propTypes = propTypes;
HeaderContainer.defaultProps = defaultProps;

export default HeaderContainer;
