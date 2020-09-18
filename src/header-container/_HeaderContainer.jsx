import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
  containerElement: 'div',
  children: undefined,
};

const HeaderContainer = ({
  header,
  containerElement,
  children,
  ...customProps
}) => {
  const contentLayoutClassNames = cx([
    'header-container',
    customProps.className,
  ]);

  const Container = containerElement;

  return (
    <Container {...customProps} className={contentLayoutClassNames}>
      {header && <div className={cx('header')}>{header}</div>}
      <div className={cx('main')}>
        {children}
      </div>
    </Container>
  );
};

HeaderContainer.propTypes = propTypes;
HeaderContainer.defaultProps = defaultProps;

export default HeaderContainer;
