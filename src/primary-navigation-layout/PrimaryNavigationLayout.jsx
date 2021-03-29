import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ApplicationConceptContext, ApplicationContainerContext } from '../application-container';
import deferExecution from '../utils/defer-execution';
import usePortalManager, { getPortalElement } from '../shared/usePortalManager';
import NavigationItem from '../navigation-item';

import ApplicationNavigation from './terra-application-navigation/ApplicationNavigation';
import {
  titleConfigPropType, extensionItemsPropType, utilityItemsPropType, userConfigPropType,
} from './terra-application-navigation/utils/propTypes';

import styles from './PrimaryNavigationLayout.module.scss';

const cx = classNames.bind(styles);

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

  renderLayout: PropTypes.func,
  renderNavigationFallback: PropTypes.func,
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
  onSelectUtilityItem,
  titleConfig,
  userConfig,
  utilityItems,
  renderLayout,
  renderNavigationFallback,
}) => {
  const applicationContainer = React.useContext(ApplicationContainerContext);
  const applicationConcept = React.useContext(ApplicationConceptContext);

  const [contentElementRef, pageContainerPortalsRef] = usePortalManager(activeNavigationKey, () => {
    deferExecution(() => {
      document.body.focus();
    });
  });

  const derivedApplicationTitle = applicationContainer?.applicationName;

  const derivedTitleConfig = React.useMemo(() => {
    if (titleConfig) {
      return titleConfig;
    }

    return {
      title: derivedApplicationTitle,
    };
  }, [titleConfig, derivedApplicationTitle]);

  let navigationItems = [];
  const navigationItemChildren = React.Children.toArray(children).filter((child) => child.type === NavigationItem);
  if (navigationItemChildren.length > 0) {
    navigationItems = navigationItemChildren.map(child => ({
      key: child.props.navigationKey,
      text: child.props.label,
    }));
  }

  const hasActiveNavigationItem = !!navigationItems.find(item => item.key === activeNavigationKey);

  React.useEffect(() => {
    const navigationItemKeys = navigationItems.map(item => item.key);
    // Cleanup nodes for removed children
    const danglingPortalKeys = Object.keys(pageContainerPortalsRef.current).filter((itemKey) => !navigationItemKeys.includes(itemKey));
    danglingPortalKeys.forEach((pageKey) => {
      delete pageContainerPortalsRef.current[pageKey];
    });
  }, [navigationItems, pageContainerPortalsRef]);

  function renderNavigationItems() {
    return (
      <>
        {React.Children.map(children, (child) => {
          let portalElement = pageContainerPortalsRef.current[child.props.navigationKey]?.element;
          if (!portalElement) {
            portalElement = getPortalElement();
            portalElement.id = `terra-primary-navigation-${child.props.navigationKey}`;
            pageContainerPortalsRef.current[child.props.navigationKey] = {
              element: portalElement,
            };
          }

          return React.cloneElement(child, { isActive: child.props.navigationKey === activeNavigationKey, portalElement });
        })}
        {!hasActiveNavigationItem && renderNavigationFallback ? renderNavigationFallback() : undefined}
      </>
    );
  }

  let content;
  if (renderLayout) {
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
      userConfig={userConfig}
      onSelectNavigationItem={onSelectNavigationItem}
      extensionItems={extensionItems}
      onSelectExtensionItem={onSelectExtensionItem}
      utilityItems={utilityItems}
      onSelectUtilityItem={onSelectUtilityItem}
      onSelectSettings={onSelectSettings}
      onSelectHelp={onSelectHelp}
      onSelectLogout={onSelectLogout}
      onDrawerMenuStateChange={onDrawerMenuStateChange}
    >
      <div className={cx('primary-navigation-layout')}>
        <div className={cx('concept-banner-container')}>
          {applicationConcept?.layoutBanner}
        </div>
        <div ref={contentElementRef} className={cx('content-container')}>
          {content}
        </div>
      </div>
    </ApplicationNavigation>
  );
};

PrimaryNavigationLayout.propTypes = propTypes;

export default PrimaryNavigationLayout;
