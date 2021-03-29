import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import {
  ApplicationConceptContext,
} from '../application-container';
import deferExecution from '../utils/defer-execution';
import usePortalManager, { getPortalElement } from '../shared/usePortalManager';
import NavigationItem from '../navigation-item';

import ApplicationNavigation from './terra-application-navigation/ApplicationNavigation';

import {
  titleConfigPropType,
  extensionItemsPropType,
  utilityItemsPropType,
  userConfigPropType,
} from './terra-application-navigation/utils/propTypes';

import styles from './PrimaryNavigationLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A string id used to uniquely identify the PrimaryNavigationLayout and its
   * components in the DOM.
   */
  id: PropTypes.string.isRequired,
  /**
   * A collection of child components to render within the layout body.
   *
   * Providing a NavigationItem component as a direct child will result in a
   * navigation tab being added to the PrimaryNavigationLayout header. Any
   * non-NavigationItem children provided alongside NavigationItem children will
   * **not** be rendered.
   *
   * If another layout is to be rendered, it is recommended to use the
   * `renderLayout` prop instead. If a renderLayout prop is provided, this prop
   * will be ignored regardless of its contents.
   */
  children: PropTypes.node,
  /**
   * A string key representing the currently active navigation item. This value
   * must correspond to a NavigationItem provided as a child to the layout.
   *
   * If no matching value exists, the `renderNavigationFallback` prop will be
   * executed to determine the rendered content. If no NavigationItem children
   * are being defined, this prop should be left undefined.
   */
  activeNavigationKey: PropTypes.string,
  /**
   * A configuration object with information specifying the creation of the
   * extension buttons rendered within the PrimaryNavigationLayout header.
   */
  extensionItems: extensionItemsPropType,
  /**
   * An element to render within the PrimaryNavigationLayout utility menu.
   * This value will be rendered within the drawer menu at compact sizes.
   */
  hero: PropTypes.element,
  /**
   * Key/value pairs associating a string key entry to a number notification
   * count. The keys must correspond to a navigationItem or extensionItem key
   * provided through their associated props.
   */
  notifications: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  /**
   * Callback function triggered on drawer menu presentation state change.
   */
  onDrawerMenuStateChange: PropTypes.func,
  /**
   * A function to be executed upon the selection of an extension item.
   *
   * Ex: `onSelectExtensionsItem(String selectedItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of a custom utility item.
   *
   * Ex: `onSelectUtilityItem(String selectedItemKey, Object metaData)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be
   * rendered.
   *
   * Ex: `onSelectHelp()`
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be
   * rendered.
   *
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: PropTypes.func,
  /**
   * A function to be executed upon the selection of a navigation item.
   *
   * Ex: `onSelectNavigationItem(String selectedItemKey, Object metaData)`
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not
   * be rendered.
   *
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: PropTypes.func,
  /**
   * A configuration object that defines the strings rendered within the
   * PrimaryNavigationLayout header.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object with information pertaining to the application's
   * user.
   */
  userConfig: userConfigPropType,
  /**
   * An array of configuration objects with information specifying the creation
   * of additional utility menu items. These items are rendered within the
   * utility menu at larger breakpoints and within the drawer menu at smaller
   * breakpoints.
   */
  utilityItems: utilityItemsPropType,
  /**
   * A function used to render a single layout component within the body of
   * the PrimaryNavigationLayout.
   *
   * This prop should be used only when primary navigation is not required for
   * the consuming application. If navigation capabilities are required,
   * NavigationItems should be used instead.
   */
  renderLayout: PropTypes.func,
  /**
   * A function used to render a fallback component when the provided
   */
  renderNavigationFallback: PropTypes.func,
};

const PrimaryNavigationLayout = ({
  id,
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
  const applicationConcept = React.useContext(ApplicationConceptContext);

  const [contentElementRef, pageContainerPortalsRef] = usePortalManager(activeNavigationKey, () => {
    deferExecution(() => {
      document.body.focus();
    });
  });

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
      id={id}
      navigationItems={navigationItems}
      activeNavigationItemKey={activeNavigationKey}
      hero={hero}
      notifications={notifications}
      titleConfig={titleConfig}
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
