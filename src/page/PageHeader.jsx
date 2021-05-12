import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import Popup from 'terra-popup';

import ActionMenu, {
  ActionMenuItem,
} from '../action-menu';
import { useTransientPresentationState } from '../utils/transient-presentations';
import useElementSize, { breakpointFilter } from '../shared/useElementSize';

import PageContainerContext from '../page-container/PageContainerContext';

import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onSelectBack: PropTypes.func,
  toolbar: PropTypes.element,
  actions: PropTypes.element,
  NotificationBanners: PropTypes.elementType,
};

const PageHeader = ({
  actions, toolbar, NotificationBanners, onSelectBack, label, id,
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
      childAction && (
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
      )
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
            if (childAction && childAction.props.refCallback) {
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
      <Popup
        isOpen={showMenu}
        targetRef={() => moreActionsButtonRef.current}
        onRequestClose={() => { setShowMenu(false); }}
        contentHeight="auto"
        contentWidth="auto"
        isContentFocusDisabled
        isHeaderDisabled
        popupContentRole="none"
      >
        <ActionMenu
          label="Actions" // TODO intl.formatMessage({ id: 'terraApplication.workspace.workspaceSettingsLabel' })}
          onRequestClose={() => {
            setShowMenu(false);
          }}
        >
          {React.Children.map(actions.props.children, (childAction) => (
            childAction && (
              <ActionMenuItem
                key={childAction.props.actionKey}
                label={childAction.props.label}
                isDisabled={childAction.props.isDisabled}
                onAction={() => {
                  setShowMenu(false);
                  childAction.props.onSelect();
                }}
              />
            )
          ))}
        </ActionMenu>
      </Popup>
    );
  }

  return (
    <div ref={headerContainerRef} className={cx('page-header-container')}>
      <div className={cx('page-header')}>
        {onSelectBack || pageContainerContext?.containerStartActions ? (
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
            {onSelectBack ? (
              <Button
                className={cx(['header-button', 'back-button'])}
                icon={<IconLeft />}
                text="Back" // TODO intl and need for more explicit "return to [BLAH]" text
                onClick={onSelectBack}
                variant={ButtonVariants.UTILITY}
              />
            ) : null}
          </div>
        ) : null}
        <div className={cx('label-container')} role="heading" aria-level={1}>
          {label}
        </div>
        <div className={cx('end-actions-container')}>
          {renderActionButtons()}
          {renderMenuButton()}
          {showMenu && renderMenu()}
          {pageContainerContext?.containerEndActions.length ? (
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
