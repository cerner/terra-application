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
   * A string key representing the currently active navigation item. This value
   * must correspond to a NavigationItem provided as a child to the layout.
   *
   * If no matching value exists, the `renderNavigationFallback` prop will be
   * executed to determine the rendered content. If no NavigationItem children
   * are expected to be provided, this prop should be left undefined.
   */
  activeNavigationKey: PropTypes.string,
  /**
   * A collection of child components to render within the layout body.
   *
   * Providing a NavigationItem component as a direct child will result in a
   * navigation tab being added to the PrimaryNavigationLayout header. Any
   * non-NavigationItem children provided alongside NavigationItem children will
   * **not** be rendered.
   *
   * If another layout is to be rendered within this layout, it is recommended
   * to use the `renderLayout` prop instead. If the renderLayout prop is
   * provided, children will be ignored, regardless of its contents.
   */
  children: PropTypes.node,
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
   * A string id used to uniquely identify the PrimaryNavigationLayout and its
   * components in the DOM.
   */
  id: PropTypes.string.isRequired,
  /**
   * Key/value pairs associating a string key entry to an integer notification
   * count. The keys must correspond to a navigationItem or extensionItem key
   * provided through their associated props.
   */
  notifications: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  /**
   * A function used to render a single layout component within the body of
   * the PrimaryNavigationLayout.
   *
   * This prop should be used only when primary navigation is not required for
   * the consuming application. If navigation capabilities are required,
   * NavigationItem children must be used instead.
   */
  renderLayout: PropTypes.func,
  /**
   * A function used to render a fallback component when the provided
   * activeNavigationKey does not correspond to a provided NavigationItem child.
   *
   * If no NavigationItem children are provided, this prop is ignored.
   */
  renderNavigationFallback: PropTypes.func,
  /**
   * Callback function triggered on drawer menu presentation state change.
   * Ex: `onDrawerMenuStateChange(Bool isOpen)`
   */
  onDrawerMenuStateChange: PropTypes.func,
  /**
   * A function to be executed upon the selection of an extension item.
   *
   * Ex: `onSelectExtensionsItem(String selectedItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be
   * rendered.
   * Ex: `onSelectHelp()`
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be
   * rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: PropTypes.func,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedItemKey, Object metaData)`
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not
   * be rendered.
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: PropTypes.func,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedItemKey, Object metaData)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * A configuration object that defines the strings to be rendered within the
   * PrimaryNavigationLayout's header.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object with information pertaining to the application's
   * user, to be presented within the PrimaryNavigationLayout's header.
   */
  userConfig: userConfigPropType,
  /**
   * An array of configuration objects with information specifying the creation
   * of additional utility menu items. These items are rendered within the
   * utility menu at larger breakpoints and within the drawer menu at smaller
   * breakpoints.
   */
  utilityItems: utilityItemsPropType,
};

const PrimaryNavigationLayout = ({
  activeNavigationKey,
  children,
  extensionItems,
  hero,
  id,
  notifications,
  renderLayout,
  renderNavigationFallback,
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
}) => {
  const applicationConcept = React.useContext(ApplicationConceptContext);

  // The set of NavigationItems rendered in the last update are stored in this
  // ref, allowing us to make comparisons with future updates and removed
  // stored references if necessary.
  const lastProcessedNavigationItemsRef = React.useRef([]);

  // usePortalManager provides the component with refs to define what the portal
  // elements are and where the portaled content should be rendered.
  //
  // The onPortalActivated callback is used to set focus to the body when the
  // active navigation item changes, simulating how focus is handled during a
  // typical navigation event.
  const [contentElementRef, pageContainerPortalsRef] = usePortalManager(activeNavigationKey, () => {
    deferExecution(() => {
      document.body.focus();
    });
  });

  const navigationItems = [];
  let danglingNavigationItems = [];
  let activeNavigationItemIsPresent = false;

  // We perform explicit checks for NavigationItem children so that we can
  // safely query their props.
  const navigationItemChildren = React.Children.toArray(children)
    .filter((child) => (
      child.type === NavigationItem
    ));

  if (navigationItemChildren.length > 0) {
    danglingNavigationItems = [...lastProcessedNavigationItemsRef.current];

    navigationItemChildren.forEach(child => {
      // We add the item data to the navigationItems array so that it can
      // be properly rendered by the ApplicationNavigation component.
      const navigationItemEntry = {
        key: child.props.navigationKey,
        text: child.props.label,
      };
      navigationItems.push(navigationItemEntry);

      // The item's key is removed from the dangling item set (if it's present,
      // we do not need to clean it up).
      danglingNavigationItems = danglingNavigationItems.filter(item => (
        item.key === navigationItemEntry.key
      ));

      // If the item's key matches the current active key, then we know we do
      // not have to render the fallback.
      if (navigationItemEntry.key === activeNavigationKey) {
        activeNavigationItemIsPresent = true;
      }
    });

    lastProcessedNavigationItemsRef.current = navigationItems;
  }

  // This effect is used to clean up any previously rendered NavigationItems
  // that are no longer being provided as children. Because we hold onto refs of
  // elements, we want to make sure those refs are released if they are no
  // longer relevant.
  //
  // The effect will execute after every update, though it will be efficient if
  // no dangling items exist.
  React.useEffect(() => {
    danglingNavigationItems.forEach((item) => {
      delete pageContainerPortalsRef.current[item.key];
    });
  });

  let content;
  if (renderLayout) {
    content = renderLayout();
  } else if (navigationItemChildren.length) {
    content = (
      <>
        {navigationItemChildren.map((child) => {
          const { navigationKey } = child.props;
          let portalElement = pageContainerPortalsRef.current[navigationKey]?.element;
          if (!portalElement) {
            portalElement = getPortalElement();
            portalElement.id = `terra-primary-navigation-${navigationKey}`;
            pageContainerPortalsRef.current[navigationKey] = {
              element: portalElement,
            };
          }

          return React.cloneElement(child, {
            isActive: navigationKey === activeNavigationKey,
            portalElement,
          });
        })}
        {!activeNavigationItemIsPresent && renderNavigationFallback ? (
          renderNavigationFallback()
        ) : undefined}
      </>
    );
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
        <div ref={contentElementRef} className={cx('layout-content')}>
          {content}
        </div>
      </div>
    </ApplicationNavigation>
  );
};

PrimaryNavigationLayout.propTypes = propTypes;

export default PrimaryNavigationLayout;
