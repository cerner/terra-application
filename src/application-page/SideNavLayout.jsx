import React from 'react';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import List, { Item as ListItem } from 'terra-list';

import { ActiveBreakpointContext } from '../breakpoints';
import { NavigationPromptCheckpoint } from '../navigation-prompt';

import PageLayoutContainer from './PageLayoutContainer';
import PageLayoutHeader from './PageLayoutHeader';

import styles from './SideNavLayout.module.scss';

const cx = classNames.bind(styles);

const flatLayoutBreakpoints = ['medium', 'large', 'huge', 'enormous'];

const propTypes = {};

const DefaultSideNavPanel = ({ activePageKey, onRequestActivatePage, items }) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const hasChevron = activeBreakpoint === 'tiny' || activeBreakpoint === 'small';

  return (
    <ContentContainer
      header={<PageLayoutHeader title="Side Nav (?)" />}
      fill
    >
      <List dividerStyle="standard" role="listbox" aria-label="It's Side Navigation">
        {items.map((item) => (
          <ListItem
            key={item.key}
            hasChevron={hasChevron}
            isSelectable
            isSelected={activePageKey === item.key}
            onSelect={() => {
              onRequestActivatePage(item.key);
            }}
          >
            <div style={{ padding: '1rem' }}>{item.text}</div>
          </ListItem>
        ))}
      </List>
    </ContentContainer>
  );
};

const SideNavLayout = ({
  sidebar, activePageKey, children, onRequestActivatePage,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  React.useEffect(() => {
    if (activePageKey) {
      return;
    }

    const pageKeys = React.Children.map(children, (child) => (child.key));

    if (flatLayoutBreakpoints.indexOf(activeBreakpoint) >= 0) {
      onRequestActivatePage(pageKeys[0]);
    }
  }, [activePageKey, activeBreakpoint, children, onRequestActivatePage]);

  return (
    <div
      className={cx('side-nav-container', {
        'side-nav-is-open': !activePageKey,
      })}
    >
      <div className={cx('side-nav-sidebar')}>
        {sidebar || (
          <DefaultSideNavPanel
            activePageKey={activePageKey}
            onRequestActivatePage={onRequestActivatePage}
            items={React.Children.map(children, (child) => ({ key: child.key, text: child.props.description }))}
          />
        )}
      </div>
      <div className={cx('side-nav-body')}>
        {React.Children.map(children, (child) => (
          <div
            key={child.key}
            style={{
              height: '100%', overflow: 'auto', position: 'relative', display: child.key === activePageKey ? 'block' : 'none',
            }}
          >
            {React.cloneElement(child, { isActive: child.key === activePageKey, onRequestActivatePage })}
          </div>
        ))}
      </div>
    </div>
  );
};

SideNavLayout.propTypes = propTypes;

const SideNavPage = ({
  isActive, children, render, cleanupRenderIfPossible, onRequestActivatePage,
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
    pageContent = render({ isActive });
  } else {
    pageContent = children;
  }

  const isCompact = flatLayoutBreakpoints.indexOf(activeBreakpoint) < 0;

  return (
    <NavigationPromptCheckpoint onPromptChange={(prompts) => { registeredPromptsRef.current = prompts ? prompts.length : 0; }}>
      <PageLayoutContainer>
        {React.cloneElement(pageContent, { onRequestDismiss: isCompact ? () => { onRequestActivatePage(undefined); } : undefined })}
      </PageLayoutContainer>
    </NavigationPromptCheckpoint>
  );
};

export default SideNavLayout;
export { SideNavPage };
