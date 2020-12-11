import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import Popup from 'terra-popup';
import Tabs from './subcomponents/_Tabs';
import {
  ActionMenu,
  ActionMenuDivider,
  ActionMenuItem,
  ActionMenuGroup,
  ActionMenuRadio,
} from '../action-menu';

import styles from './Workspace.module.scss';

const cx = classNames.bind(styles);

const sizeOptionShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
});

const propTypes = {
  /**
   * The itemKey associated to the active WorkspaceItem.
   */
  activeItemKey: PropTypes.string.isRequired,
  /**
   * The size string value matching the active size option.
   */
  activeSize: PropTypes.string,
  /**
   * The accessible label of the workspace.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * The child WorkspaceItems.
   */
  children: PropTypes.node.isRequired,
  /**
   * The unique identifier used of accessibility mappings.
   */
  id: PropTypes.string.isRequired,
  /**
   * Whether or not the face up dismiss button should be displayed.
   * Also requires the onRequestDismiss prop.
   */
  isDismissButtonVisible: PropTypes.bool,
  /**
   * The function callback triggering when a item is selected.
   * Returns the associated metaData. e.g. onRequestActivate(event, metaData)
   */
  onRequestActivate: PropTypes.func.isRequired,
  /**
   * The function callback triggering when the close toggle button is selected..
   * The presence of this callback indicates the visibility of the close toggle button.
   * Returns the event e.g. onRequestActivate(event)
   */
  onRequestDismiss: PropTypes.func,
  /**
   * The function callback triggering when a size is selected from the size menu.
   * Returns the size key e.g. onRequestSizeChange(option.key)
   */
  onRequestSizeChange: PropTypes.func,
  /**
   * The array containing size objects to map in the size menu.
   */
  sizeOptions: PropTypes.arrayOf(sizeOptionShape),
};

const getTabId = (id, itemKey) => `${id}-${itemKey}`;

const getAssociatedPanelId = (id, itemKey) => `${getTabId(id, itemKey)}-panel`;

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

const Workspace = ({
  id,
  activeItemKey,
  ariaLabel,
  activeSize,
  children,
  isDismissButtonVisible,
  onRequestActivate,
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
    const activeNode = workspacePortalsRef.current[activeItemKey];
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
      workspaceLastKeyRef.current = activeItemKey;
    } else {
      workspaceLastKeyRef.current = undefined;
    }
  }, [activeItemKey]);

  const tabData = React.Children.map(children, child => ({
    id: getTabId(id, child.props.itemKey),
    associatedPanelId: getAssociatedPanelId(id, child.props.itemKey),
    label: child.props.label,
    isSelected: child.props.itemKey == activeItemKey,
    onSelect: onRequestActivate,
    metaData: child.props.metaData,
  }));

  const createDismissButton = () => {
    if (isDismissButtonVisible && onRequestDismiss) {
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
    return undefined;
  };

  const createSizeButton = () => {
    let dismissItem;
    let sizeItems;
    let dividerItem;

    if (sizeOptions && sizeOptions.length) {
      sizeItems = createOptions(sizeOptions, activeSize, onRequestSizeChange, () => setIsMenuOpen(false));
    }

    if (onRequestDismiss) {
      dismissItem = (
        <ActionMenuItem
          actionKey="workspace-dimiss-action"
          label="Dismiss Workspace"
          onAction={() => { setIsMenuOpen(false); onRequestDismiss(); }}
        />
      );
    }

    if (!sizeItems && !dismissItem) {
      return;
    }

    if (sizeOptions && dismissItem) {
      sizeItems = (
        <ActionMenuGroup>
          {sizeItems}
        </ActionMenuGroup>
      );
      dividerItem = <ActionMenuDivider />;
    }

    return (
      <>
        <Button
          className={cx('menu-button')}
          icon={<IconSettings />}
          text="Workspace Size Menu" // TODO INTL
          onClick={() => setIsMenuOpen(true)}
          variant="utility"
          refCallback={node => sizeMenuRef.current = node}
        />
        <Popup
          isArrowDisplayed
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
            {sizeItems}
            {dividerItem}
            {dismissItem}
          </ActionMenu>
        </Popup>
      </>
    );
  };

  const workspaceClassNames = cx([
    'workspace',
    customProps.className,
  ]);

  return (
    <div
      {...customProps}
      id={id}
      className={workspaceClassNames}
      role="none"
    >
      <div role="none" className={cx('header')}>
        {createDismissButton()}
        <div className={cx('fill-element')} />
        {createSizeButton()}
      </div>
      <div role="none" className={cx('header2', { 'has-dismiss-button': onRequestDismiss && isDismissButtonVisible })}>
        <Tabs ariaLabel={ariaLabel} tabData={tabData} />
      </div>
      <div role="none" className={cx('body')} ref={workspaceRef}>
        {React.Children.map(children, child => {
          let portalElement = workspacePortalsRef.current[child.props.itemKey]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.setAttribute('role', 'none');
            portalElement.style.position = 'relative';
            portalElement.style.height = '100%';
            portalElement.style.width = '100%';
            workspacePortalsRef.current[child.props.itemKey] = {
              element: portalElement,
            };
          }

          return (
            React.cloneElement(child, {
              key: child.props.itemKey,
              id: getTabId(id, child.props.itemKey),
              associatedPanelId: getAssociatedPanelId(id, child.props.itemKey),
              isActive: child.props.itemKey === activeItemKey,
              portalElement,
            })
          );
        })}
      </div>
    </div>
  );
};

Workspace.propTypes = propTypes;

export default Workspace;
