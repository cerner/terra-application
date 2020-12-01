import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import Popup from 'terra-popup';
import TabContainer from './_TabContainer';
import {
  ActionMenu,
  ActionMenuRadio,
} from '../action-menu';

import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const sizeOptionShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
});

const propTypes = {
  id: PropTypes.string.isRequired,
  activeTabKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onRequestActivate: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  activeSize: PropTypes.string,
  onRequestSizeChange: PropTypes.func,
  onRequestDismiss: PropTypes.func,
  sizeOptions: PropTypes.arrayOf(sizeOptionShape),
};

const getTabId = (id, tabKey) => `${id}-${tabKey}`;

const getAssociatedPanelId = (id, tabKey) => `${getTabId(id, tabKey)}-panel`;

const createOptions = (options, size, onRequestSizeChange, onDismissMenu) => options.map(option => (
  <ActionMenuRadio
    key={option.key}
    actionKey={option.key}
    label={option.text}
    isChecked={option.key === size}
    isDisabled={option.isDisabled}
    onAction={() => { onDismissMenu(); onRequestSizeChange(option.key); }}
  />
));

const Tabs = ({
  id,
  activeTabKey,
  children,
  onRequestActivate,
  ariaLabel,
  activeSize,
  onRequestSizeChange,
  onRequestDismiss,
  sizeOptions,
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

  const tabData = React.Children.map(children, child => ({
    id: getTabId(id, child.props.tabKey),
    associatedPanelId: getAssociatedPanelId(id, child.props.tabKey),
    label: child.props.label,
    icon: child.props.icon,
    isIconOnly: child.props.isIconOnly,
    isSelected: child.props.tabKey == activeTabKey,
    onSelect: onRequestActivate,
    metaData: child.props.metaData,
  }));

  const createDismissButton = () => {
    if (onRequestDismiss) {
      return (
        <Button
          className={cx('active-button')}
          icon={<IconPanelRight />}
          text="Toggle Workspace" // TODO INTL
          onClick={onRequestDismiss}
          variant="utility"
        />
      );
    }
    return null;
  };

  const createSizeButton = () => {
    if (!sizeOptions || !sizeOptions.length) {
      return undefined;
    }
    return (
      <>
        <Button
          className={cx('menu-button')}
          icon={<IconRollup />}
          text="Workspace Size Menu" // TODO INTL
          onClick={() => setIsMenuOpen(true)}
          variant="utility"
          refCallback={node => sizeMenuRef.current = node}
        />
        <Popup
          isOpen={isMenuOpen}
          targetRef={() => sizeMenuRef.current}
          onRequestClose={() => { setIsMenuOpen(false); }}
          contentHeight="auto"
          contentWidth="240"
          contentAttachment="top right"
          isContentFocusDisabled
        >
          <ActionMenu
            id="monkey-derp"
            ariaLabel="Pick A Size!!"
          >
            {createOptions(sizeOptions, activeSize, onRequestSizeChange, () => setIsMenuOpen(false))}
          </ActionMenu>
        </Popup>
      </>
    );
  };

  const tabsClassNames = cx([
    'tabs',
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
        {React.Children.map(children, child => {
          let portalElement = workspacePortalsRef.current[child.props.tabKey]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.setAttribute('role', 'none');
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
              id: getTabId(id, child.props.tabKey),
              associatedPanelId: getAssociatedPanelId(id, child.props.tabKey),
              isActive: child.props.tabKey === activeTabKey,
              portalElement,
            })
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = propTypes;

export default Tabs;