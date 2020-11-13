import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import Menu from 'terra-menu';
import IconRollup from 'terra-icon/lib/icon/IconRollup';

import { ActiveBreakpointContext } from '../../breakpoints';
import { useTransientPresentationState } from '../../utils/transient-presentation';

import PageMenu, { MenuItem, MenuItemDivider } from '../PageMenu';
import PageActions, { Action } from '../PageActions';
import PageContext from './PageContext';

import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const collapsingActionsBreakpoints = ['tiny', 'small', 'medium'];

const propTypes = {};

const PageHeader = ({
  actions, menu, onBack, label, hasLoadingOverlay,
}) => {
  const [showMenu, setShowMenu] = useTransientPresentationState(false);
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const moreActionsButtonRef = React.useRef();
  const pageContext = React.useContext(PageContext);

  const renderActionsInMenu = collapsingActionsBreakpoints.indexOf(activeBreakpoint) !== -1;

  function renderActionButtons() {
    if (renderActionsInMenu || !actions) {
      return undefined;
    }

    return React.Children.map(actions.props.children, (childAction) => (
      <Button
        refCallback={childAction.props.refCallback}
        key={childAction.props.actionKey}
        className={cx(['header-button'])}
        isIconOnly
        icon={childAction.props.icon}
        text={childAction.props.label}
        variant={ButtonVariants.UTILITY}
        onClick={(event) => { event.preventDefault(); childAction.props.onSelect(); }}
        isDisabled={hasLoadingOverlay || childAction.props.isDisabled}
      />
    ));
  }

  function renderMenuButton() {
    if (!menu && (!renderActionsInMenu || !actions)) {
      return undefined;
    }

    return (
      <Button
        refCallback={(ref) => {
          moreActionsButtonRef.current = ref;

          if (renderActionsInMenu && actions) {
            React.Children.forEach(actions.props.children, (childAction) => {
              if (childAction.props.refCallback) {
                childAction.props.refCallback(ref);
              }
            });
          }
        }}
        className={cx('header-button')}
        isIconOnly
        icon={<IconRollup />}
        text="More Actions"
        variant={ButtonVariants.UTILITY}
        onClick={(event) => { event.preventDefault(); setShowMenu(true); }}
        isDisabled={hasLoadingOverlay}
      />
    );
  }

  function renderMenu() {
    const renderActionMenuItems = () => {
      if (!renderActionsInMenu || !actions) {
        return [];
      }

      return React.Children.map(actions.props.children, (childAction) => (
        <Menu.Item
          key={childAction.props.actionKey}
          text={childAction.props.label}
          onClick={() => {
            setShowMenu(false);

            childAction.props.onSelect();
          }}
        />
      ));
    };

    const renderMenuItems = (children) => React.Children.toArray(children).map((child) => {
      if (child.type === MenuItem) {
        console.log(`${child.props.itemKey} Is Checked: ${child.props.isChecked}`);

        return (
          <Menu.Item
            key={child.props.itemKey}
            text={child.props.label}
            isSelected={child.props.isChecked}
            isSelectable={!child.props.isDisabled}
            onClick={!child.props.isDisabled ? () => {
              if (!child.props.persistMenuAfterSelect) {
                setShowMenu(false);
              }

              child.props.onSelect();
            } : undefined}
          />
        );
      }

      if (child.type === MenuItemDivider) {
        return (
          <Menu.Divider key={child.key} />
        );
      }
    });

    let menuItems = renderActionMenuItems();
    if (menu) {
      if (menuItems.length) {
        menuItems.push(<Menu.Divider key="page-menu-actions-divider" />);
      }

      menuItems = menuItems.concat(renderMenuItems(menu.props.children));
    }

    return (
      <Menu
        isOpen
        targetRef={() => moreActionsButtonRef.current}
        onRequestClose={() => { setShowMenu(false); }}
        contentWidth="240"
        headerTitle={`${label} Menu`} // TODO INTL
      >
        {menuItems}
      </Menu>
    );
  }

  return (
    <div className={cx('page-layout-header')}>
      {onBack || pageContext?.containerStartActions ? (
        <div className={cx('back-button-container')}>
          {pageContext?.containerStartActions ? (
            <>
              {pageContext?.containerStartActions}
              <div className={cx('actions-divider')} />
            </>
          ) : null}
          {onBack ? (
            <Button
              className={cx(['header-button', 'back-button'])}
              icon={<span className={cx('back')} />}
              text="Back"
              onClick={onBack}
              variant={ButtonVariants.UTILITY}
            />
          ) : null}
        </div>
      ) : null}
      <div className={cx('label-container')}>
        {label}
      </div>
      <div className={cx('actions-container')}>
        {renderActionButtons()}
        {renderMenuButton()}
        {showMenu && renderMenu()}
        {pageContext?.containerEndActions ? (
          <>
            <div className={cx('actions-divider')} />
            {pageContext?.containerEndActions}
          </>
        ) : null}
      </div>
    </div>
  );
};

PageHeader.propTypes = propTypes;

export default PageHeader;
