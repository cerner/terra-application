import React from 'react';
import PropTypes from 'prop-types';
import IconPadlock from 'terra-icon/lib/icon/IconPadlock';

import { ApplicationIntlContext } from '../../application-intl';
import { ApplicationContainerContext } from '../../application-container';
import MainPageContainer from '../../page/MainPageContainer';
import SessionUserContext from '../../session/SessionUserContext';
import SessionActionsContext from '../../session/SessionActionsContext';
import { deferExecution } from '../../utils/lifecycle-utils';
import usePortalManager from '../../shared/usePortalManager';

import HeadlessLayout from '../embedded-layout/HeadlessLayout';
import NavigationItem from '../shared/NavigationItem';
import ApplicationNavigation from './terra-application-navigation/ApplicationNavigation';
import {
  titleConfigPropType, extensionItemsPropType, utilityItemsPropType, userConfigPropType,
} from './terra-application-navigation/utils/propTypes';

const UTILITY_ITEM_LOCK = 'terraApplication.primaryNavigationLayout.lock';

const propTypes = {
  /**
   * A string key representing the currently active navigation item.
   */
  activeNavigationKey: PropTypes.string,
  /**
   * A configuration object with information specifying the creation of the Extension buttons rendered within the
   * ApplicationNavigation header.
   */
  extensionItems: extensionItemsPropType,
  /**
   * An element to render within the ApplicationNavigation utility menu, shifted to the drawer at the `medium` breakpoint and below.
   */
  hero: PropTypes.element,
  /**
   * Key/Value pairs associating a string key entry to a Number notification count. The keys must correspond to a
   * navigationItem or extensionItem key provided through their associated props.
   */
  notifications: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  /**
   * Callback function triggered on Drawer Menu state change.
   */
  onDrawerMenuStateChange: PropTypes.func,
  /**
   * A function to be executed upon the selection of an extensions item.
   *
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   *
   * Ex: `onSelectHelp()`
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   *
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: PropTypes.func,
  /**
   * A function to be executed upon the selection of a navigation item.
   *
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey, Object metaData)`
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   *
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: PropTypes.func,
  /**
   * A function to be executed upon the selection of a custom utility item.
   *
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * A configuration object that defines the strings rendered within the ApplicationNavigation header.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,

  renderPage: PropTypes.func,
  renderLayout: PropTypes.func,
  renderNavigationFallback: PropTypes.func,
  onSelectLock: PropTypes.func,
  /**
   * A collection of child elements to render within the ApplicationNavigation body.
   */
  children: PropTypes.node,
};

const PrimaryNavigationLayout = ({
  children,
  activeNavigationKey,
  extensionItems,
  hero,
  notifications,
  onDrawerMenuStateChange,
  onSelectExtensionItem,
  onSelectHelp,
  onSelectLogout,
  onSelectNavigationItem,
  onSelectSettings,
  onSelectLock,
  onSelectUtilityItem,
  titleConfig,
  userConfig,
  utilityItems,
  renderPage,
  renderLayout,
  renderNavigationFallback,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const applicationContainer = React.useContext(ApplicationContainerContext);
  const sessionUser = React.useContext(SessionUserContext);
  const sessionActions = React.useContext(SessionActionsContext);

  const [contentElementRef, pageContainerPortalsRef] = usePortalManager(activeNavigationKey, () => {
    deferExecution(() => {
      document.body.focus();
    });
  });

  const derivedTitleConfig = React.useMemo(() => {
    if (titleConfig) {
      return titleConfig;
    }

    return {
      title: applicationContainer.applicationName,
    };
  }, [titleConfig, applicationContainer.applicationName]);

  const derivedUserConfig = React.useMemo(() => {
    if (userConfig) {
      return userConfig;
    }

    if (sessionUser) {
      let name = [];
      let initials = [];
      if (sessionUser.firstName && sessionUser.firstName.length) {
        initials.push(sessionUser.firstName[0]);
        name.push(sessionUser.firstName);
      }

      if (sessionUser.lastName && sessionUser.lastName.length) {
        initials.push(sessionUser.lastName[0]);
        name.push(sessionUser.lastName);
      }

      initials = initials.join('');
      name = name.join(' ');

      return {
        name,
        initials,
        detail: sessionUser.username,
      };
    }
  }, [userConfig, sessionUser]);

  const derivedOnSelectLogout = React.useMemo(() => onSelectLogout || sessionActions?.logout, [onSelectLogout, sessionActions]);
  const derivedOnSelectLock = React.useMemo(() => onSelectLock || sessionActions?.lock, [onSelectLock, sessionActions]);

  const derivedUtilityItems = React.useMemo(() => {
    let updatedUtilityItems = [];

    if (utilityItems) {
      updatedUtilityItems = updatedUtilityItems.concat(utilityItems);
    }

    if (derivedOnSelectLock) {
      updatedUtilityItems.push({
        key: UTILITY_ITEM_LOCK,
        icon: <IconPadlock />,
        text: applicationIntl.formatMessage({ id: 'terraApplication.primaryNavigationLayout.utilityMenu.lock' }),
        onSelect: derivedOnSelectLock,
      });
    }

    return updatedUtilityItems;
  }, [applicationIntl, utilityItems, derivedOnSelectLock]);

  let navigationItems = [];
  const navigationItemChildren = React.Children.toArray(children).filter((child) => child.type === NavigationItem);
  if (navigationItemChildren.length > 0) {
    navigationItems = navigationItemChildren.map(child => ({
      key: child.props.navigationKey,
      text: child.props.label,
    }));
  }

  React.useEffect(() => {
    const navigationItemKeys = navigationItems.map(item => item.key);
    // Cleanup nodes for removed children
    const danglingPortalKeys = Object.keys(pageContainerPortalsRef.current).filter((itemKey) => !navigationItemKeys.includes(itemKey));
    danglingPortalKeys.forEach((pageKey) => {
      delete pageContainerPortalsRef.current[pageKey];
    });
  }, [navigationItems]);

  const hasActiveNavigationItem = !!navigationItems.find(item => item.key === activeNavigationKey);

  function renderNavigationItems() {
    return (
      <div ref={contentElementRef} style={{ height: '100%', position: 'relative' }}>
        {React.Children.map(children, (child) => {
          let portalElement = pageContainerPortalsRef.current[child.props.navigationKey]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.style.position = 'relative';
            portalElement.style.height = '100%';
            portalElement.style.width = '100%';
            portalElement.id = `primary-nav-${child.props.navigationKey}`;
            pageContainerPortalsRef.current[child.props.navigationKey] = {
              element: portalElement,
            };
          }

          return React.cloneElement(child, { isActive: child.props.navigationKey === activeNavigationKey, portalElement });
        })}
        {!hasActiveNavigationItem && renderNavigationFallback ? renderNavigationFallback() : undefined}
      </div>
    );
  }

  let content;
  if (renderPage) {
    content = (
      <MainPageContainer>
        {renderPage()}
      </MainPageContainer>
    );
  } else if (renderLayout) {
    content = renderLayout();
  } else if (navigationItems.length) {
    content = renderNavigationItems();
  } else {
    content = children;
  }

  return (
    <ApplicationNavigation
      navigationItems={navigationItems}
      activeNavigationItemKey={activeNavigationKey}
      hero={hero}
      notifications={notifications}
      titleConfig={derivedTitleConfig}
      userConfig={derivedUserConfig}
      onSelectNavigationItem={onSelectNavigationItem}
      extensionItems={extensionItems}
      onSelectExtensionItem={onSelectExtensionItem}
      utilityItems={derivedUtilityItems}
      onSelectUtilityItem={onSelectUtilityItem}
      onSelectSettings={onSelectSettings}
      onSelectHelp={onSelectHelp}
      onSelectLogout={derivedOnSelectLogout}
      onDrawerMenuStateChange={onDrawerMenuStateChange}
    >
      <HeadlessLayout>
        {content}
      </HeadlessLayout>
    </ApplicationNavigation>
  );
};

PrimaryNavigationLayout.propTypes = propTypes;

export default PrimaryNavigationLayout;
