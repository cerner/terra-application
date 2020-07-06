import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import List, { Item as ListItem } from 'terra-list';

import { ActiveBreakpointContext } from '../breakpoints';

import ApplicationPageContainer from './ApplicationPageContainer';
import PageLayoutHeader from './_PageHeader';

import styles from './SideNavigationPageContainer.module.scss';

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

const SideNavigationPageContainer = ({
  sidebar, activePageKey, children, onRequestActivatePage,
}) => {
  const [isInitialized, setIsInitialized] = React.useState(false);

  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const sideNavBodyRef = React.useRef();
  const pageContainerPortalsRef = React.useRef({});
  const lastActivePageKeyRef = React.useRef();

  React.useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  React.useLayoutEffect(() => {
    const pageNodeForActivePage = pageContainerPortalsRef.current[activePageKey];

    if (sideNavBodyRef.current.contains(pageNodeForActivePage?.element)) {
      return;
    }

    if (lastActivePageKeyRef.current) {
      pageContainerPortalsRef.current[lastActivePageKeyRef.current].scrollOffset = pageContainerPortalsRef.current[lastActivePageKeyRef.current].element.querySelector('#application-page-main').scrollTop;
      sideNavBodyRef.current.removeChild(pageContainerPortalsRef.current[lastActivePageKeyRef.current].element);
    }

    if (pageNodeForActivePage?.element) {
      sideNavBodyRef.current.appendChild(pageNodeForActivePage.element);

      const pageMainElement = pageNodeForActivePage.element.querySelector('#application-page-main');
      if (pageMainElement) {
        pageMainElement.scrollTop = pageNodeForActivePage.scrollOffset || 0;
      }

      lastActivePageKeyRef.current = activePageKey;
    } else {
      lastActivePageKeyRef.current = undefined;
    }
  }, [activePageKey]);

  React.useEffect(() => {
    if (activePageKey) {
      return;
    }

    const pageKeys = React.Children.map(children, (child) => (child.key));

    // Cleanup nodes for removed children
    const danglingPageKeys = Object.keys(pageContainerPortalsRef.current).filter((pageKey) => !pageKeys.includes(pageKey));
    danglingPageKeys.forEach((pageKey) => {
      delete pageContainerPortalsRef.current[pageKey];
    });

    if (flatLayoutBreakpoints.indexOf(activeBreakpoint) >= 0) {
      onRequestActivatePage(pageKeys[0]);
    }
  }, [activePageKey, activeBreakpoint, children, onRequestActivatePage]);

  function activatePage(pageKey) {
    if (pageKey === activePageKey) {
      return;
    }

    onRequestActivatePage(pageKey);
  }

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
            onRequestActivatePage={activatePage}
            items={React.Children.map(children, (child) => ({ key: child.key, text: child.props.description }))}
          />
        )}
      </div>
      <div ref={sideNavBodyRef} className={cx('side-nav-body')}>
        {isInitialized && React.Children.map(children, (child) => {
          let portalElement = pageContainerPortalsRef.current[child.key]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.style.position = 'relative';
            portalElement.style.height = '100%';
            portalElement.style.width = '100%';
            portalElement.id = `side-nav-${child.key}`;
            pageContainerPortalsRef.current[child.key] = {
              element: portalElement,
            };
          }

          return (
            React.cloneElement(child, { isActive: child.key === activePageKey, onRequestActivatePage: activatePage, portalElement })
          );
        })}
      </div>
    </div>
  );
};

SideNavigationPageContainer.propTypes = propTypes;

const NavigationPage = ({
  isActive, children, render, onRequestActivatePage, portalElement,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  let pageContent;

  if (render) {
    pageContent = render();
  } else {
    pageContent = children;
  }

  const isCompact = flatLayoutBreakpoints.indexOf(activeBreakpoint) < 0;

  return ReactDOM.createPortal((
    <ApplicationPageContainer>
      {React.cloneElement(pageContent, { onRequestClose: isCompact ? () => { onRequestActivatePage(undefined); } : undefined })}
    </ApplicationPageContainer>
  ), portalElement);
};

export default SideNavigationPageContainer;
export { NavigationPage };
