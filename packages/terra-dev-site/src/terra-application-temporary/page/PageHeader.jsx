import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import Popup from 'terra-popup';
import ThemeContext from 'terra-theme-context';

import ActionMenu, { ActionMenuItem } from 'terra-application/lib/action-menu';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
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
  onSelectBack: PropTypes.func,
};

const PageHeader = ({
  actions, id, label, onSelectBack,
}) => {
  const intl = React.useContext(ApplicationIntlContext);
  const pageContainerContext = React.useContext(PageContainerContext);
  const theme = React.useContext(ThemeContext);

  const headerContainerRef = React.useRef();
  const moreActionsButtonRef = React.useRef();

  const [showMenu, setShowMenu] = React.useState(false);
  const { activeBreakpoint } = useElementSize(headerContainerRef, breakpointFilter);

  // We filter out any falsy action values that may have been provided
  // due to inline boolean logic.
  let validActions = [];
  if (actions) {
    validActions = React.Children.toArray(actions.props.children).filter(child => child);
  }

  if (validActions.length > 3) {
    throw new Error(`[terra-application] ${label} cannot render more than three actions.`);
  }

  const actionsAreCollapsed = activeBreakpoint === 'tiny' && validActions.length > 1;

  const backActionButton = onSelectBack ? (
    <PageHeaderButton
      icon={<IconLeft />}
      ariaLabel={intl.formatMessage({ id: 'terraApplication.pageHeader.back' })}
      onSelect={onSelectBack}
    />
  ) : undefined;

  // Actions are either rendered as buttons or as options in in a menu,
  // depending on the current header size and the number of actions present. If
  // a menu is necessary, a single button is rendered to present that menu upon
  // selection.
  const pageActions = actionsAreCollapsed ? (
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
      ariaLabel={intl.formatMessage({
        id: 'terraApplication.pageHeader.moreActions',
      })}
      onSelect={() => {
        setShowMenu(true);
      }}
    />
  ) : (
    validActions.map((action) => (
      <PageHeaderButton
        key={action.key}
        refCallback={action.props.refCallback}
        icon={action.props.icon}
        ariaLabel={action.props.label}
        onSelect={action.props.onSelect}
      />
    ))
  );

  // The actions defined by the page container are rendered next to the
  // consumer-provided actions, with a divider included only if both page and
  // container actions are present.
  const endActions = (
    <>
      {pageActions}
      {pageContainerContext?.containerActions.length ? (
        <>
          {validActions.length ? <div className={cx('actions-divider')} /> : undefined}
          {pageContainerContext.containerActions.map((action) => (
            <PageHeaderButton
              key={action.key}
              ariaLabel={action.label}
              icon={action.icon}
              onSelect={action.onSelect}
              isDisabled={!action.onSelect}
            />
          ))}
        </>
      ) : undefined}
    </>
  );

  const actionsMenu = showMenu ? (
    <Popup
      isOpen
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
        label={intl.formatMessage({
          id: 'terraApplication.pageHeader.actionsMenu',
        }, { label })}
        onRequestClose={() => { setShowMenu(false); }}
      >
        {validActions.map((action) => (
          <ActionMenuItem
            key={action.key}
            actionKey={action.key}
            label={action.props.label}
            isDisabled={!action.props.onSelect}
            icon={action.props.icon}
            onAction={() => {
              setShowMenu(false);
              action.props.onSelect();
            }}
          />
        ))}
      </ActionMenu>
    </Popup>
  ) : undefined;

  const pageHeaderClassNames = cx('page-header-container', theme.className);

  return (
    <div ref={headerContainerRef} className={pageHeaderClassNames}>
      <div className={cx('page-header')}>
        <div className={cx('start-actions-container')}>
          {backActionButton}
        </div>
        <div className={cx('label-container')} role="heading" aria-level={1}>
          {label}
        </div>
        <div className={cx('end-actions-container')}>
          {endActions}
        </div>
      </div>
      {actionsMenu}
    </div>
  );
};

PageHeader.propTypes = propTypes;

export default PageHeader;
