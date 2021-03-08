import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import Menu from 'terra-menu';

import { useTransientPresentationState } from '../../utils/transient-presentation';
import useElementSize, { breakpointFilter } from '../../utils/hooks/useElementSize';

import PageContainerContext from './PageContainerContext';

import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const PageHeader = ({
  actions, toolbar, NotificationBanners, onBack, label, id,
}) => {
  const pageContainerContext = React.useContext(PageContainerContext);
  const [showMenu, setShowMenu] = useTransientPresentationState(false);
  const headerContainerRef = React.useRef();
  const moreActionsButtonRef = React.useRef();

  const { activeBreakpoint } = useElementSize(headerContainerRef, breakpointFilter);

  const actionsAreCollapsed = activeBreakpoint === 'tiny';

  if (actions && React.Children.count(actions.props.children) > 3) {
    throw new Error(`[terra-application] Page ${label} cannot render more than three actions.`);
  }

  function renderActionButtons() {
    if (!actions || (actionsAreCollapsed && React.Children.count(actions.props.children) > 1)) {
      return undefined;
    }

    return React.Children.map(actions.props.children, (childAction) => (
      <Button
        refCallback={childAction.props.refCallback}
        key={childAction.props.actionKey}
        className={cx('header-button', { disabled: childAction.props.isDisabled })}
        isIconOnly
        icon={childAction.props.icon}
        text={childAction.props.label}
        variant={ButtonVariants.UTILITY}
        onClick={(event) => { event.preventDefault(); childAction.props.onSelect(); }}
        isDisabled={childAction.props.isDisabled}
      />
    ));
  }

  function renderMenuButton() {
    if (!actions || !actionsAreCollapsed || React.Children.count(actions.props.children) === 1) {
      return undefined;
    }

    return (
      <Button
        refCallback={(ref) => {
          moreActionsButtonRef.current = ref;

          React.Children.forEach(actions.props.children, (childAction) => {
            if (childAction.props.refCallback) {
              childAction.props.refCallback(ref);
            }
          });
        }}
        className={cx('header-button')}
        isIconOnly
        icon={<IconRollup />}
        text="More Actions"
        variant={ButtonVariants.UTILITY}
        onClick={(event) => { event.preventDefault(); setShowMenu(true); }}
      />
    );
  }

  function renderMenu() {
    return (
      <Menu
        isOpen
        targetRef={() => moreActionsButtonRef.current}
        onRequestClose={() => { setShowMenu(false); }}
        contentWidth="240"
        headerTitle={`${label} Menu`} // TODO INTL
      >
        {React.Children.map(actions.props.children, (childAction) => (
          <Menu.Item
            key={childAction.props.actionKey}
            text={childAction.props.label}
            isDisabled={childAction.props.isDisabled}
            onClick={() => {
              setShowMenu(false);

              childAction.props.onSelect();
            }}
          />
        ))}
      </Menu>
    );
  }

  return (
    <div ref={headerContainerRef} className={cx('page-header-container')}>
      <div className={cx('page-header')}>
        {onBack || pageContainerContext?.containerStartActions ? (
          <div className={cx('back-button-container')}>
            {pageContainerContext.containerStartActions.length ? (
              <>
                {pageContainerContext.containerStartActions.map(({ icon: Icon, ...action }) => (
                  <Button
                    className={cx('header-button')}
                    key={action.key}
                    text={action.label}
                    icon={<Icon />}
                    onClick={action.onSelect}
                    isDisabled={!action.onSelect}
                    variant="utility"
                  />
                ))}
                <div className={cx('actions-divider')} />
              </>
            ) : null}
            {onBack ? (
              <Button
                className={cx(['header-button', 'back-button'])}
                icon={<IconLeft />}
                text="Back" // TODO intl and need for more explicit "return to [BLAH]" text
                onClick={onBack}
                variant={ButtonVariants.UTILITY}
              />
            ) : null}
          </div>
        ) : null}
        <div className={cx('label-container')}>
          {label}
        </div>
        <div className={cx('end-actions-container')}>
          {renderActionButtons()}
          {renderMenuButton()}
          {showMenu && renderMenu()}
          {pageContainerContext.containerEndActions.length ? (
            <>
              <div className={cx('actions-divider')} />
              {pageContainerContext.containerEndActions.map(({ icon: Icon, ...action }) => (
                <Button
                  className={cx('header-button')}
                  key={action.key}
                  text={action.label}
                  icon={<Icon />}
                  onClick={action.onSelect}
                  isDisabled={!action.onSelect}
                  variant="utility"
                />
              ))}
            </>
          ) : null}
        </div>
      </div>
      {toolbar && (
        <div className={cx('toolbar-container', 'rounded')}>
          {toolbar}
        </div>
      )}
      <NotificationBanners
        id={id}
        label={label}
        activeClassName={cx('notification-banners-container')}
        bannerClassName={cx('notification-banner', 'rounded')}
      />
    </div>
  );
};

PageHeader.propTypes = propTypes;

export default PageHeader;
