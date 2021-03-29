import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import NavigationItemContext from './NavigationItemContext';

const propTypes = {
  /**
   * The string uniquely identifying the navigation item within the application.
   * This value must be globally unique and not shared between multiple tiers of
   * navigation (primary, secondary, etc.).
   */
  navigationKey: PropTypes.string.isRequired,
  /**
   * The string description of the NavigationItem to display to the user.
   */
  label: PropTypes.string.isRequired,
  /**
   * A function called to generate the child content for the NavigationItem.
   * A parameter indicating whether or not the NavigationItem is active is
   * provided.
   *
   * If provided, the `children` prop will be ignored.
   *
   * Signature: `renderLayout({ isActive })`
   */
  renderLayout: PropTypes.func,
  /**
   * The child components to render within the NavigationItem.
   *
   * If the `renderLayout` props is provided, this prop will be ignored.
   */
  children: PropTypes.node,
  /**
   * @private
   * A boolean indicating whether or not the NavigationItem is considered active based on the
   * determined activeNavigationKey of the layout consuming it.
   */
  isActive: PropTypes.bool,
  /**
   * @private
   * The HTMLElement to which the NavigationItem's content should be rendered.
   */
  portalElement: PropTypes.instanceOf(HTMLElement),
};

const NavigationItem = ({
  navigationKey,
  children,
  renderLayout,
  isActive,
  portalElement,
}) => {
  const ancestorNavigationItemContext = React.useContext(NavigationItemContext);

  const navigationItemContextValue = React.useMemo(() => ({
    isActive: isActive && ancestorNavigationItemContext.isActive,
    navigationKeys: [
      ...ancestorNavigationItemContext.navigationKeys,
      navigationKey,
    ],
  }), [
    isActive,
    navigationKey,
    ancestorNavigationItemContext.isActive,
    ancestorNavigationItemContext.navigationKeys,
  ]);

  let pageContent;
  if (renderLayout) {
    pageContent = renderLayout({ isActive });
  } else {
    pageContent = children;
  }

  return ReactDOM.createPortal((
    <NavigationItemContext.Provider value={navigationItemContextValue}>
      {pageContent}
    </NavigationItemContext.Provider>
  ), portalElement);
};

NavigationItem.propTypes = propTypes;

export default NavigationItem;
