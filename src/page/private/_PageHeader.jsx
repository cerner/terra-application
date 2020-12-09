import React from 'react';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import Button, { ButtonVariants } from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import Menu from 'terra-menu';

import { useTransientPresentationState } from '../../utils/transient-presentation';

import PageContext from './PageContext';

import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const PageHeader = ({
  actions, toolbar, notificationBanners, onBack, label, hasLoadingOverlay,
}) => {
  const pageContext = React.useContext(PageContext);
  const [actionsAreCollapsed, setActionsAreCollapsed] = React.useState(false);
  const [showMenu, setShowMenu] = useTransientPresentationState(false);
  const headerContainerRef = React.useRef();
  const moreActionsButtonRef = React.useRef();

  React.useLayoutEffect(() => {
    const containerElement = headerContainerRef.current;

    const resizeObserver = new ResizeObserver(entries => {
      const resizeWidth = entries[0].contentRect.width;

      if (resizeWidth === 0) {
        // The Page was likely removed from the DOM due to an external navigation.
        // The PageHeader will wait until it is visible before updating.
        return;
      }

      if (resizeWidth < 540) {
        setActionsAreCollapsed(true);
      } else {
        setActionsAreCollapsed(false);
      }
    });

    resizeObserver.observe(containerElement);

    return () => {
      resizeObserver.disconnect(containerElement);
    };
  }, []);

  function renderActionButtons() {
    if (!actions || (actionsAreCollapsed && React.Children.count(actions.props.children) > 1)) {
      return undefined;
    }

    return React.Children.map(actions.props.children, (childAction) => (
      <Button
        refCallback={childAction.props.refCallback}
        key={childAction.props.actionKey}
        className={cx('header-button', { disabled: hasLoadingOverlay || childAction.props.isDisabled })}
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
        className={cx('header-button', { disabled: hasLoadingOverlay })}
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
        {onBack || pageContext?.containerStartActions ? (
          <div className={cx('back-button-container')}>
            {pageContext.containerStartActions.length ? (
              <>
                {pageContext.containerStartActions.map(({ icon: Icon, ...action }) => (
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
          {pageContext.containerEndActions.length ? (
            <>
              <div className={cx('actions-divider')} />
              {pageContext.containerEndActions.map(({ icon: Icon, ...action }) => (
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
        <div className={cx('toolbar-container')}>
          {toolbar}
        </div>
      )}
      {notificationBanners && (
        <div className={cx('notification-banner-container')}>
          {notificationBanners}
        </div>
      )}
    </div>
  );
};

PageHeader.propTypes = propTypes;

export default PageHeader;
