import { createContext } from 'react';
import PropTypes from 'prop-types';

const NavigationItemContext = createContext({
  isActive: true,
  navigationKeys: [],
});

const contextShape = {
  /**
   * A boolean indicating whether or not the NavigationItem is active. If a
   * NavigationItem is not active, it is neither visible nor interactive.
   *
   * Note that this value takes into account nested NavigationItems. If a parent
   * NavigationItem is not active, then no NavigationItems within it will be
   * active.
   */
  isActive: PropTypes.bool,
  /**
   * An array of NavigationItem keys indicating the presence and order of the
   * NavigationItems that are ancestors to the component consuming the context.
   */
  navigationKeys: PropTypes.arrayOf(PropTypes.string),
};

export default NavigationItemContext;
export { contextShape };
