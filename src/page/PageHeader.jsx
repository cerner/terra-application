import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import Popup from 'terra-popup';

import ActionMenu, { ActionMenuItem } from '../action-menu';
import { useTransientPresentationState } from '../utils/transient-presentations';
import useElementSize, { breakpointFilter } from '../shared/useElementSize';
import PageContainerContext from '../page-container/PageContainerContext';

import PageHeaderButton from './PageHeaderButton';

import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A PageActions element containing action definitions to render as controls
   * within the header.
   */
  actions: PropTypes.element,
  /**
   * A unique identifier for the PageHeader. Applied to internal components
   * as an id attribute and thus must be globally unique.
   */
  id: PropTypes.string.isRequired,
  /**
   * The label for the Page that the header is being rendered for.
   */
  label: PropTypes.string,
  /**
   * A NotificationBanners element type (as provided by the useNotificationBanners
   * hook) to be rendered alongside the other header contents.
   */
  NotificationBanners: PropTypes.elementType,
  /**
   * A function to be executed upon selection of the Page's back button. If not
   * provided, the back button will not be rendered.
   */
  onSelectBack: PropTypes.func,
  /**
   * A toolbar element to render alongside the other header contents.
   */
  toolbar: PropTypes.element,
};

const PageHeader = ({
  actions, id, label, NotificationBanners, onSelectBack, toolbar,
}) => {
  const pageContainerContext = React.useContext(PageContainerContext);

  const headerContainerRef = React.useRef();
  const moreActionsButtonRef = React.useRef();

  const [showMenu, setShowMenu] = useTransientPresentationState(false);
  const { activeBreakpoint } = useElementSize(headerContainerRef, breakpointFilter);

  let validActions = [];
  if (actions) {
    validActions = React.Children.toArray(actions.props.children).filter(child => child);
  }

  if (validActions.length > 3) {
    throw new Error(`[terra-application] Page ${label} cannot render more than three actions.`);
  }

  const actionsAreCollapsed = activeBreakpoint === 'tiny' && validActions.length > 1;

  function renderActionButtons() {
    return validActions.map((action) => (
      <PageHeaderButton
        key={action.key}
        refCallback={action.props.refCallback}
        icon={action.props.icon}
        ariaLabel={action.props.label}
        onSelect={!action.props.isDisabled ? () => {
          action.props.onSelect();
        } : undefined}
      />
    ));
  }

  function renderMenuButton() {
    return (
      <PageHeaderButton
        refCallback={(ref) => {
          moreActionsButtonRef.current = ref;

          validActions.forEach((action) => {
            if (action.props.refCallback) {
              action.props.refCallback(ref);
            }
          });
        }}
        className={cx('header-button')}
        icon={<IconRollup />}
        ariaLabel="Show Actions" // TODO intl
        onSelect={() => {
          setShowMenu(true);
        }}
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
        contentAttachment="top right"
        isContentFocusDisabled
        isHeaderDisabled
        popupContentRole="none"
      >
        <ActionMenu
          label="Actions" // TODO intl
          onRequestClose={() => {
            setShowMenu(false);
          }}
        >
          {validActions.map((action) => (
            <ActionMenuItem
              key={action.key}
              actionKey={action.key}
              label={action.props.label}
              isDisabled={action.props.isDisabled}
              icon={action.props.icon}
              onAction={() => {
                setShowMenu(false);
                action.props.onSelect();
              }}
            />
          ))}
        </ActionMenu>
      </Popup>
    );
  }

  function renderToolbar() {
    return toolbar ? (
      <div className={cx('toolbar-container')}>
        {toolbar}
      </div>
    ) : undefined;
  }

  function renderStartActions() {
    if (!onSelectBack && !pageContainerContext?.containerStartActions.length) {
      return undefined;
    }

    return (
      <>
        {onSelectBack ? (
          <PageHeaderButton
            icon={<IconLeft />}
            ariaLabel="Back" // TODO intl
            onSelect={onSelectBack}
          />
        ) : undefined}
      </>
    );
  }

  function renderEndActions() {
    return (
      <>
        {actionsAreCollapsed ? renderMenuButton() : renderActionButtons()}
        {pageContainerContext?.containerEndActions.length ? (
          <>
            {validActions.length ? <div className={cx('actions-divider')} /> : undefined}
            {pageContainerContext.containerEndActions.map(({ icon: Icon, ...action }) => (
              <PageHeaderButton
                key={action.key}
                ariaLabel={action.label}
                icon={<Icon />}
                onSelect={action.onSelect}
                isDisabled={!action.onSelect}
              />
            ))}
          </>
        ) : undefined}
      </>
    );
  }

  return (
    <div ref={headerContainerRef} className={cx('page-header-container')}>
      <div className={cx('page-header')}>
        <div className={cx('start-actions-container')}>
          {renderStartActions()}
        </div>
        <div className={cx('label-container')} role="heading" aria-level={1}>
          {label}
        </div>
        <div className={cx('end-actions-container')}>
          {renderEndActions()}
        </div>
      </div>
      {renderToolbar()}
      <NotificationBanners
        id={id}
        label={label}
        activeClassName={cx('notification-banners-container')}
        bannerClassName={cx('notification-banner')}
      />
      {renderMenu()}
    </div>
  );
};

PageHeader.propTypes = propTypes;

export default PageHeader;
