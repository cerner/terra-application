import React, {
  useRef, useCallback, Suspense,
} from 'react';
import PropTypes from 'prop-types';
import TerraApplicationNavigation from 'terra-application-navigation';
import {
  titleConfigPropType, navigationItemsPropType, extensionItemsPropType, utilityItemsPropType, userConfigPropType,
} from 'terra-application-navigation/lib/utils/propTypes';

import ApplicationErrorBoundary from '../application-error-boundary';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, navigationPromptResolutionOptionsShape } from '../navigation-prompt';

const propTypes = {
  /**
   * A configuration object that defines the strings rendered within the ApplicationNavigation header.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object with information specifying the creation of the Extension buttons rendered within the
   * ApplicationNavigation header.
   */
  extensionItems: extensionItemsPropType,
  /**
   * A function to be executed upon the selection of an extensions item.
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * An element to render within the ApplicationNavigation menu, shifted to the drawer at the `medium` and below.
   */
  hero: PropTypes.element,
  /**
   * An array of configuration objects with information specifying the creation of navigation items. These items
   * are rendered within the ApplicationNavigation header at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  navigationItems: navigationItemsPropType,
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * Callback function triggered on Drawer Menu state change
  */
  onDrawerMenuStateChange: PropTypes.func,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey, Object metaData)`
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: PropTypes.func,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * A collection of child elements to render within the ApplicationNavigation body.
   */
  children: PropTypes.node,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  /**
   * By default, the ApplicationNavigation component will resolve any rendered NavigationPrompts prior to
   * communicating navigation item selections with `onSelectNavigationItem`. If `disablePromptsForNavigationItems`
   * is provided, no NavigationPrompts are resolved when navigation items are selected.
   */
  disablePromptsForNavigationItems: PropTypes.bool,
  /**
   * By default, the ApplicationNavigation component will resolve any rendered NavigationPrompts prior to
   * communicating logout selection with `onSelectLogout`. If `disablePromptsForLogout` is provided,
   * no NavigationPrompts are resolved when logout is selected.
   */
  disablePromptsForLogout: PropTypes.bool,
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when navigation items are selected while NavigationPrompts
   * are rendered by the ApplicationNavigation content.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
};

const ApplicationNavigation = ({
  children,
  notifications,
  titleConfig,
  extensionItems,
  onSelectExtensionItem,
  hero,
  navigationItems,
  activeNavigationItemKey,
  onSelectNavigationItem: propOnSelectNavigationItem,
  userConfig,
  onSelectSettings,
  onSelectHelp,
  onSelectLogout: propOnSelectLogout,
  utilityItems,
  onSelectUtilityItem,
  onDrawerMenuStateChange,
  disablePromptsForNavigationItems,
  disablePromptsForLogout,
  navigationPromptResolutionOptions,
}) => {
  const navigationPromptCheckpointRef = useRef();

  const onSelectNavigationItem = useCallback((selectedItemKey) => {
    if (disablePromptsForNavigationItems) {
      propOnSelectNavigationItem(selectedItemKey);
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(navigationPromptResolutionOptions).then(() => {
      propOnSelectNavigationItem(selectedItemKey);
    }).catch((e) => { if (e) throw e; });
  }, [disablePromptsForNavigationItems, navigationPromptResolutionOptions, propOnSelectNavigationItem]);

  const onSelectLogout = useCallback(() => {
    if (disablePromptsForLogout) {
      propOnSelectLogout();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(navigationPromptResolutionOptions).then(() => {
      propOnSelectLogout();
    }).catch((e) => { if (e) throw e; });
  }, [disablePromptsForLogout, navigationPromptResolutionOptions, propOnSelectLogout]);

  return (
    <TerraApplicationNavigation
      hero={hero}
      notifications={notifications}
      titleConfig={titleConfig}
      navigationItems={navigationItems}
      onSelectNavigationItem={propOnSelectNavigationItem && onSelectNavigationItem}
      activeNavigationItemKey={activeNavigationItemKey}
      userConfig={userConfig}
      extensionItems={extensionItems}
      onSelectExtensionItem={onSelectExtensionItem}
      utilityItems={utilityItems}
      onSelectUtilityItem={onSelectUtilityItem}
      onSelectSettings={onSelectSettings}
      onSelectHelp={onSelectHelp}
      onSelectLogout={propOnSelectLogout && onSelectLogout}
      onDrawerMenuStateChange={onDrawerMenuStateChange}
    >
      <ApplicationLoadingOverlayProvider>
        <NavigationPromptCheckpoint
          ref={navigationPromptCheckpointRef}
        >
          <ApplicationErrorBoundary>
            <Suspense fallback={<ApplicationLoadingOverlay isOpen />}>
              {children}
            </Suspense>
          </ApplicationErrorBoundary>
        </NavigationPromptCheckpoint>
      </ApplicationLoadingOverlayProvider>
    </TerraApplicationNavigation>
  );
};

ApplicationNavigation.propTypes = propTypes;

export default ApplicationNavigation;
