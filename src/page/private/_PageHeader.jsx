import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import Menu from 'terra-menu';
import IconRollup from 'terra-icon/lib/icon/IconRollup';

import { ActiveBreakpointContext } from '../../breakpoints';
import PageMenu, { MenuItem, MenuItemDivider } from '../PageMenu';

import PageContext from './PageContext';
import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const collapsingActionsBreakpoints = ['tiny', 'small', 'medium'];

const propTypes = {};

const PageHeader = ({
  actions, menu, onBack, title, hasLoadingOverlay,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const moreActionsButtonRef = React.useRef();
  const pageContext = React.useContext(PageContext);

  const renderActionsInMenu = collapsingActionsBreakpoints.indexOf(activeBreakpoint) !== -1;

  function buildMenu() {
    if (menu && menu.type !== PageMenu) {
      throw new Error('[terra-application] Page: `menu` prop must be instance of PageMenu component');
    }

    const renderActions = () => {
      if (!renderActionsInMenu || !actions) {
        return [];
      }

      return actions.map(action => (
        <Menu.Item
          key={action.key}
          text={action.text}
          onClick={() => {
            setShowMenu(false);

            action.onSelect();
          }}
        />
      ));
    };

    const renderMenuItems = (children) => React.Children.toArray(children).map((child) => {
      if (child.type === MenuItem) {
        return (
          <Menu.Item
            key={child.key}
            text={child.props.text}
            subMenuItems={child.props.children ? renderMenuItems(child.props.children) : undefined}
            isSelected={child.props.isChecked}
            isSelectable={!!child.props.isDisabled}
            onClick={() => {
              if (!child.props.persistMenuOnClick && !child.props.children) {
                setShowMenu(false);
              }

              child.props.onSelect();
            }}
          />
        );
      }

      if (child.type === MenuItemDivider) {
        return (
          <Menu.Divider key={child.key} />
        );
      }
    });

    let menuItems = renderActions();
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
        headerTitle={`${title} Menu`} // TODO INTL
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
      <div className={cx('title-container')}>
        {title}
      </div>
      <div className={cx('actions-container')}>
        {!renderActionsInMenu && actions && actions.map((action) => (
          <Button
            refCallback={action.buttonRefCallback}
            key={action.key}
            className={cx(['header-button'])}
            isIconOnly
            icon={action.icon}
            text={action.text}
            variant={ButtonVariants.UTILITY}
            onClick={(event) => { event.preventDefault(); action.onSelect(); }}
            isDisabled={hasLoadingOverlay || action.isDisabled}
          />
        ))}
        {menu || (renderActionsInMenu && actions) ? (
          <Button
            refCallback={(ref) => {
              moreActionsButtonRef.current = ref;

              actions.forEach((action) => {
                if (action.buttonRefCallback) {
                  action.buttonRefCallback(ref);
                }
              });
            }}
            className={cx('header-button')}
            isIconOnly
            icon={<IconRollup />}
            text="More Actions"
            variant={ButtonVariants.UTILITY}
            onClick={(event) => { event.preventDefault(); setShowMenu(true); }}
            isDisabled={hasLoadingOverlay}
          />
        ) : undefined}
        {showMenu && buildMenu()}
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
