import React from 'react';
import classNames from 'classnames/bind';
import { NavigationPromptCheckpoint } from '../navigation-prompt';
import styles from './SideNavLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const SideNavLayout = ({ sidebar, activeItemKey, children }) => (
  <div className={cx('side-nav-container')}>
    <div className={cx('side-nav-sidebar')}>
      {sidebar}
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

SideNavLayout.propTypes = propTypes;

const SideNavPage = ({
  isActive, sideNavKey, children, render, cleanupRenderIfPossible,
}) => {
  const [hasActivated, setHasActivated] = React.useState();
  const registeredPromptsRef = React.useRef(0);

  React.useLayoutEffect(() => {
    if (isActive) {
      setHasActivated(true);
    } else if (render && registeredPromptsRef.current === 0 && cleanupRenderIfPossible) {
      setHasActivated(false);
    }
  }, [isActive, render, cleanupRenderIfPossible]);

  if (!hasActivated && render) {
    return null;
  }

  if (render) {
    return (
      <NavigationPromptCheckpoint
        onPromptChange={(prompts) => { registeredPromptsRef.current = prompts ? prompts.length : 0; }}
      >
        {render({ sideNavKey, isActive })}
      </NavigationPromptCheckpoint>
    );
  }

  return children;
};

export default SideNavLayout;
export { SideNavPage };
