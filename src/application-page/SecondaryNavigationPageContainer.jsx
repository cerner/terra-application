import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import List, { Item as ListItem } from 'terra-list';
import Button, { ButtonVariants } from 'terra-button';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';
import IconLeftPane from 'terra-icon/lib/icon/IconLeftPane';

import { ActiveBreakpointContext } from '../breakpoints';

import BasePageContainer from './_BasePageContainer';
import PageContainerContext from './PageContainerContext';
import PageLayoutHeader from './_PageHeader';
import ResizeHandle from './workspace/ResizeHandle';
import MockWorkspace from './workspace/MockWorkspace';

import styles from './SecondaryNavigationPageContainer.module.scss';

const cx = classNames.bind(styles);

const flatLayoutBreakpoints = ['medium', 'large', 'huge', 'enormous'];

const propTypes = {};

const DefaultSideNavPanel = ({ activePageKey, onRequestActivatePage, items }) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const hasChevron = activeBreakpoint === 'tiny' || activeBreakpoint === 'small';

  return (
    <ContentContainer
      header={<PageLayoutHeader title="Side Nav" />}
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

const SecondaryNavigationPageContainer = ({
  sidebar, activePageKey, children, onRequestActivatePage, enableWorkspace,
}) => {
  const [workspaceSize, setWorkspaceSize] = React.useState(350);
  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(true);
  const [sideNavIsVisible, setSideNavIsVisible] = React.useState(true);

  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const sideNavBodyRef = React.useRef();
  const pageContainerPortalsRef = React.useRef({});
  const lastActivePageKeyRef = React.useRef();

  const pageContainerContextValue = React.useMemo(() => ({
    rightActionComponent: enableWorkspace ? (
      <Button
        icon={workspaceIsVisible ? <IconPanelRight /> : <IconPanelLeft />}
        text="Toggle Workspace"
        onClick={() => { setWorkspaceIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : undefined,
    leftActionComponent: (
      <Button
        icon={<IconLeftPane />}
        text="Toggle Side Nav"
        onClick={() => { setSideNavIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ),
  }), [enableWorkspace, workspaceIsVisible]);

  React.useLayoutEffect(() => {
    const pageNodeForActivePage = pageContainerPortalsRef.current[activePageKey];

    if (!sideNavBodyRef.current) {
      return;
    }

    if (sideNavBodyRef.current.contains(pageNodeForActivePage?.element)) {
      return;
    }

    if (lastActivePageKeyRef.current) {
      pageContainerPortalsRef.current[lastActivePageKeyRef.current].scrollOffset = pageContainerPortalsRef.current[lastActivePageKeyRef.current].element.querySelector('#application-page-main')?.scrollTop || 0;
      sideNavBodyRef.current.removeChild(pageContainerPortalsRef.current[lastActivePageKeyRef.current].element);
    }

    if (pageNodeForActivePage?.element) {
      sideNavBodyRef.current.appendChild(pageNodeForActivePage.element);

      const pageMainElement = pageNodeForActivePage.element.querySelector('#application-page-main');
      if (pageMainElement) {
        pageMainElement.scrollTop = pageNodeForActivePage.scrollOffset || 0;
      }

      lastActivePageKeyRef.current = activePageKey;

      setTimeout(() => {
        document.body.focus();
      }, 0);
    } else {
      lastActivePageKeyRef.current = undefined;
    }
  }, [activePageKey]);

  React.useEffect(() => {
    if (activePageKey) {
      return;
    }

    const pageKeys = React.Children.map(children, (child) => (child.props.pageKey));

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
      <div className={cx('side-nav-sidebar')} style={{ display: sideNavIsVisible ? 'block' : 'none' }}>
        {sidebar || (
          <DefaultSideNavPanel
            activePageKey={activePageKey}
            onRequestActivatePage={activatePage}
            items={React.Children.map(children, (child) => ({ key: child.props.pageKey, text: child.props.description }))}
          />
        )}
      </div>
      <div ref={sideNavBodyRef} className={cx('side-nav-body')}>
        <PageContainerContext.Provider value={pageContainerContextValue}>
          {React.Children.map(children, (child) => {
            let portalElement = pageContainerPortalsRef.current[child.props.pageKey]?.element;
            if (!portalElement) {
              portalElement = document.createElement('div');
              portalElement.style.position = 'relative';
              portalElement.style.height = '100%';
              portalElement.style.width = '100%';
              portalElement.id = `side-nav-${child.props.pageKey}`;
              pageContainerPortalsRef.current[child.props.pageKey] = {
                element: portalElement,
              };
            }

            return (
              React.cloneElement(child, {
                isActive: child.props.pageKey === activePageKey, onRequestActivatePage: activatePage, portalElement, enableWorkspace,
              })
            );
          })}

        </PageContainerContext.Provider>
      </div>
      {enableWorkspace && (
        <div className={cx('workspace')} style={{ display: workspaceIsVisible ? 'block' : 'none', width: `${workspaceSize}px` }}>
          <div
            style={{
              height: '100%', overflow: 'hidden', width: '100%', position: 'relative',
            }}
          >
            <MockWorkspace onDismiss={() => { setWorkspaceIsVisible(false); }} />
          </div>
          <ResizeHandle
            onResizeStop={(position) => {
              setWorkspaceSize((currentSize) => {
                let newSize = currentSize + -1 * position;

                if (newSize < 50) {
                  newSize = 50;
                } else if (newSize > 500) {
                  newSize = 500;
                }

                return newSize;
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

SecondaryNavigationPageContainer.propTypes = propTypes;

const NavigationPage = ({
  isActive, children, render, onRequestActivatePage, portalElement, preload,
}) => {
  const hasActivatedRef = React.useRef(isActive || preload);

  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  React.useEffect(() => {
    if (isActive || preload) {
      hasActivatedRef.current = true;
    }
  }, [isActive, preload]);

  if (!isActive && !preload && !hasActivatedRef.current) {
    return null;
  }

  let pageContent;

  if (render) {
    pageContent = render({ isActive });
  } else {
    pageContent = children;
  }

  const isCompact = flatLayoutBreakpoints.indexOf(activeBreakpoint) < 0;

  return ReactDOM.createPortal((
    <BasePageContainer>
      {React.cloneElement(pageContent, { onRequestClose: isCompact ? () => { onRequestActivatePage(undefined); } : undefined })}
    </BasePageContainer>
  ), portalElement);
};

export default SecondaryNavigationPageContainer;
export { NavigationPage };
