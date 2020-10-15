import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  titleConfigPropType, navigationItemsPropType, extensionItemsPropType, utilityItemsPropType, userConfigPropType,
} from '../application-navigation/terra-application-navigation/utils/propTypes';
import { navigationPromptResolutionOptionsShape } from '../navigation-prompt';
import ApplicationNavigation from '../application-navigation/ApplicationNavigation';
import NavigationContext from '../navigation/NavigationContext';
// import PageContainer from '../application-page/container/PageContainer';
import MainPageContainer from '../application-page/container/MainPageContainer';

import HeadlessLayout from './HeadlessLayout';

const propTypes = {
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationKey: PropTypes.string,
  /**
   * A collection of child elements to render within the ApplicationNavigation body.
   */
  children: PropTypes.node,
  /**
   * By default, the ApplicationNavigation component will resolve any registered NavigationPrompts prior to
   * communicating logout selection with `onSelectLogout`. If `disablePromptsForLogout` is provided,
   * no NavigationPrompts are resolved when logout is selected.
   */
  disablePromptsForLogout: PropTypes.bool,
  /**
   * By default, the ApplicationNavigation component will resolve any rendered NavigationPrompts prior to
   * communicating navigation item selections with `onSelectNavigationItem`. If `disablePromptsForNavigationItems`
   * is provided, no NavigationPrompts are resolved when navigation items are selected.
   */
  disablePromptsForNavigationItems: PropTypes.bool,
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
   * An array of configuration objects with information specifying the creation of navigation items. These items
   * are rendered within the ApplicationNavigation header at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  navigationItems: navigationItemsPropType,
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when navigation items are selected while NavigationPrompts
   * are rendered by the ApplicationNavigation content.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
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

  disableApplicationConceptRendering: PropTypes.bool,
};

const PrimaryNavigationLayout = ({
  children,
  renderPage,
  activeNavigationKey,
  disableApplicationConceptRendering,
  ...props
}) => {
  const contentElementRef = React.useRef();
  const pageContainerPortalsRef = React.useRef({});
  const lastActiveNavigationKeyRef = React.useRef();

  React.useLayoutEffect(() => {
    const pageNodeForActivePage = pageContainerPortalsRef.current[activeNavigationKey];

    if (!contentElementRef.current) {
      return;
    }

    if (contentElementRef.current.contains(pageNodeForActivePage?.element) && contentElementRef.current.getAttribute('data-active-nav-key') === activeNavigationKey) {
      return;
    }

    if (lastActiveNavigationKeyRef.current) {
      const elementToRemove = pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].element;

      pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].scrollOffset = elementToRemove.querySelector('[data-page-overflow-container]')?.scrollTop || 0;

      const hasUnsafeElements = elementToRemove.querySelectorAll('iframe');
      if (hasUnsafeElements.length) {
        elementToRemove.style.display = 'none';
        elementToRemove.setAttribute('aria-hidden', true);
        elementToRemove.setAttribute('inert', '');
      } else {
        contentElementRef.current.removeChild(pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].element);
      }
    }

    if (pageNodeForActivePage?.element) {
      if (contentElementRef.current.contains(pageNodeForActivePage?.element)) {
        pageNodeForActivePage?.element.style.removeProperty('display');
        pageNodeForActivePage?.element.removeAttribute('aria-hidden');
        pageNodeForActivePage?.element.removeAttribute('inert');
      } else {
        contentElementRef.current.appendChild(pageNodeForActivePage.element);
      }

      const pageMainElement = pageNodeForActivePage.element.querySelector('[data-page-overflow-container]');
      if (pageMainElement) {
        pageMainElement.scrollTop = pageNodeForActivePage.scrollOffset || 0;
      }

      contentElementRef.current.setAttribute('data-active-nav-key', activeNavigationKey);

      lastActiveNavigationKeyRef.current = activeNavigationKey;

      setTimeout(() => {
        document.body.focus();
      }, 0);
    } else {
      lastActiveNavigationKeyRef.current = undefined;
    }
  }, [activeNavigationKey]);

  let navigationItems;
  const navigationItemChildren = React.Children.toArray(children).filter((child) => child.type === NavigationItem);
  if (navigationItemChildren.length > 0) {
    navigationItems = navigationItemChildren.map(child => ({
      key: child.props.navigationKey,
      text: child.props.text,
    }));
  }

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

          return (
            <NavigationContext.Provider value={{ isActive: child.props.navigationKey === activeNavigationKey, navigationIdentifier: child.props.navigationKey }}>
              {React.cloneElement(child, { isActive: child.props.navigationKey === activeNavigationKey, portalElement })}
            </NavigationContext.Provider>
          );
        })}
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
  } else if (navigationItems) {
    content = renderNavigationItems();
  } else {
    content = children;
  }

  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <ApplicationNavigation {...props} navigationItems={navigationItems} activeNavigationItemKey={activeNavigationKey} disablePromptsForNavigationItems>
        <HeadlessLayout>
          {content}
        </HeadlessLayout>
      </ApplicationNavigation>
    </div>
  );
};

PrimaryNavigationLayout.propTypes = propTypes;

const NavigationItem = ({
  navigationKey, text, isActive, children, render, renderPage, portalElement,
}) => {
  let pageContent;

  if (renderPage) {
    pageContent = (
      <MainPageContainer>
        {renderPage()}
      </MainPageContainer>
    );
  } else if (render) {
    pageContent = render({ isActive });
  } else {
    pageContent = children;
  }

  return ReactDOM.createPortal(pageContent, portalElement);
};

export default PrimaryNavigationLayout;
export { NavigationItem };
