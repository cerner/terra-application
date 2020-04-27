import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideNavContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const SideNavContainer = ({ sideNav, activeItemKey, children }) => (
  <div className={cx('side-nav-container')}>
    <div className={cx('side-nav-sidebar')}>
      {sideNav}
    </div>
    <div className={cx('side-nav-body')}>
      {React.Children.map(children, (child) => (
        <div
          key={child.props.sideNavKey}
          style={{
            height: '100%', overflow: 'auto', position: 'relative', display: child.props.sideNavKey === activeItemKey ? 'block' : 'none',
          }}
        >
          {React.cloneElement(child, { isActive: child.props.sideNavKey === activeItemKey })}
        </div>
      ))}
    </div>
  </div>
);

SideNavContainer.propTypes = propTypes;

const SideNavContent = ({
  isActive, sideNavKey, children, render,
}) => {
  const [hasActivated, setHasActivated] = React.useState();

  React.useLayoutEffect(() => {
    if (isActive) {
      setHasActivated(true);
    }
  }, [isActive]);

  if (!hasActivated && render) {
    return null;
  }

  if (render) {
    return render({ sideNavKey, isActive });
  }

  return children;
};

export default SideNavContainer;
export { SideNavContent };
