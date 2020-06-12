import React from 'react';
import classNames from 'classnames/bind';
import { ActiveBreakpointContext } from '../breakpoints';
import { NavigationPromptCheckpoint } from '../navigation-prompt';

import PageLayout from './PageLayout';
import PageLayoutContainer from './PageLayoutContainer';
import styles from './SideNavLayout.module.scss';

const cx = classNames.bind(styles);

const flatLayoutBreakpoints = ['medium', 'large', 'huge', 'enormous'];

const propTypes = {};

const SideNavLayout = ({
  sidebar, activeItemKey, itemKeys, children, onChangeActiveItem,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  React.useEffect(() => {
    if (activeItemKey) {
      return;
    }

    if (flatLayoutBreakpoints.indexOf(activeBreakpoint) >= 0) {
      onChangeActiveItem(itemKeys[0]);
    }
  }, [activeItemKey, activeBreakpoint, itemKeys, onChangeActiveItem]);

  return (
    <div
      className={cx('side-nav-container', {
        'side-nav-is-open': !activeItemKey,
      })}
    >
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
            {React.cloneElement(child, { isActive: child.props.sideNavKey === activeItemKey, onChangeActiveItem })}
          </div>
        ))}
      </div>
    </div>
  );
};

SideNavLayout.propTypes = propTypes;

const SideNavPage = ({
  isActive, sideNavKey, children, render, cleanupRenderIfPossible, rootPageTitle, onChangeActiveItem,
}) => {
  const [hasActivated, setHasActivated] = React.useState();
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
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

  let pageContent;

  if (render) {
    pageContent = render({ sideNavKey, isActive });
  } else {
    pageContent = children;
  }

  const isCompact = flatLayoutBreakpoints.indexOf(activeBreakpoint) < 0;

  return (
    <NavigationPromptCheckpoint onPromptChange={(prompts) => { registeredPromptsRef.current = prompts ? prompts.length : 0; }}>
      <PageLayoutContainer>
        {React.cloneElement(pageContent, { onRequestDismiss: isCompact ? () => { onChangeActiveItem(undefined); } : undefined })}
      </PageLayoutContainer>
    </NavigationPromptCheckpoint>
  );
};

export default SideNavLayout;
export { SideNavPage };
