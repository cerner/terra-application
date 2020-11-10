import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconChevronLeft from 'terra-icon/lib/icon/IconChevronLeft';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import Popup from 'terra-popup';
import WorkspaceContext from './WorkspaceContext';
import TabContainer from './_TabContainer';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  activeTabKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onRequestActivate: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

const createList = (options, currentSize, onRequestSizeChange, onDismissMenu) => {
  return (
    <ul className={cx('list')} key="derpy-list">
      {options.map(option => (
        <li
          className={cx('item', 'is-actionable')}
          key={option.key}
          onClick={() => { onDismissMenu(); onRequestSizeChange(option.key); }}
        >
          <span style={{ opacity: currentSize !== option.key ? 0 : 1, marginRight: '5px' }}><IconCheckmark /></span>
          {option.text}
        </li>
      ))}
    </ul>
  );
};

const Tabs = ({
  id,
  activeTabKey,
  children,
  onRequestActivate,
  ariaLabel,
  currentSize, // new
  onRequestSizeChange, // new
  onRequestDismiss, // new
  sizeOptions, // new
  ...customProps
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const workspacePortalsRef = useRef({});
  const workspaceLastKeyRef = useRef();
  const workspaceRef = useRef();
  const sizeMenuRef = useRef();

  React.useLayoutEffect(() => {
    const activeNode = workspacePortalsRef.current[activeTabKey];
    if (!workspaceRef.current || workspaceRef.current.contains(activeNode?.element)) {
      return;
    }
    if (workspaceLastKeyRef.current) {
      const lastNode = workspacePortalsRef.current[workspaceLastKeyRef.current].element;
      if (lastNode) {
        workspaceRef.current.removeChild(lastNode);
      }
    }

    if (activeNode?.element) {
      workspaceRef.current.appendChild(activeNode.element);
      workspaceLastKeyRef.current = activeTabKey;
    } else {
      workspaceLastKeyRef.current = undefined;
    }
  }, [activeTabKey]);

  const tabData = React.Children.map(children, child => {
    const tabId = `${id}-${child.props.tabKey}`;
    const panelId = `${tabId}-panel`
    return {
      id: tabId,
      associatedPanelId: panelId,
      label: child.props.label,
      icon: child.props.icon,
      isSelected: child.props.tabKey == activeTabKey,
      onSelect: onRequestActivate,
      metaData: child.props.metaData,
    };
  });

  // TODO: event emitter listener?
  const path = 'currentPath';
  const workspaceContext = React.useMemo(() => (
    {
      pagePath: path, // active secondary page key
      // updateNotificationCount,
      // metaData, // unless memoized?
    }
  ), [path]);

  const createDismissButton = () => {
    if (onRequestDismiss) {
      return (
        <button
          aria-label="start"
          className={cx('start-button')}
          onClick={onRequestDismiss}
        >
          <IconChevronLeft />
        </button>
      );
    }
    return null;
  };

  const createSizeButton = () => {
    if (sizeOptions) {
      return (
        <>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cx('end-button')}
            ref={sizeMenuRef}
          >
            <IconAdd />
          </button>
          <Popup
            isOpen={isMenuOpen}
            targetRef={() => sizeMenuRef.current}
            onRequestClose={() => setIsMenuOpen(false)}
            contentHeight="auto"
            contentWidth="auto"
          >
            {createList(sizeOptions, currentSize, onRequestSizeChange, () => setIsMenuOpen(false))}
          </Popup>
        </>
      );
    }
    return null;
  };

  const tabsClassNames = cx([
    'tabs',
    { 'body-fill': true },
    customProps.className,
  ]);

  return (
    <div
      {...customProps}
      id={id}
      className={tabsClassNames} 
      role="none"
    >
      <div role="none" className={cx('header')}>
        {createDismissButton()}
        <div className={cx('fill-element')} />
        {createSizeButton()}
      </div>
      <div role="none" className={cx('header2')}>
        <TabContainer ariaLabel={ariaLabel} tabData={tabData} />
      </div>
      <div role="none" className={cx('body')} ref={workspaceRef}>
        <WorkspaceContext.Provider value={workspaceContext}>
          {React.Children.map(children, child => {
            let portalElement = workspacePortalsRef.current[child.props.tabKey]?.element;
            if (!portalElement) {
              portalElement = document.createElement('div');
              portalElement.setAttribute("role", "none"); 
              portalElement.style.position = 'relative';
              portalElement.style.height = '100%';
              portalElement.style.width = '100%';
              workspacePortalsRef.current[child.props.tabKey] = {
                element: portalElement,
              };
            }

            return (
              React.cloneElement(child, {
                key: child.props.tabKey,
                id: `${id}-${child.props.tabKey}`,
                associatedPanelId: `${id}-${child.props.tabKey}-panel`,
                isActive: child.props.tabKey === activeTabKey,
                portalElement,
              })
            );
          })}
        </WorkspaceContext.Provider>
      </div>
    </div>
  );
};

Tabs.propTypes = propTypes;

export default Tabs;
