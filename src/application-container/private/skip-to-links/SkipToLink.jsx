import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import NavigationItemContext from '../../../navigation-item/NavigationItemContext';

import SkipToLinksContext from './SkipToLinksContext';

const propTypes = {
  /**
   * The string description of the SkipToLink. The provided value will be
   * automatically prefixed with the string "Skip to ".
   */
  description: PropTypes.string.isRequired,
  /**
   * The function to be executed upon selection of the SkipToLink.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * The priority value indicating the presentation position of the SkipToLink
   * relative to other registered links.
   */
  priority: PropTypes.oneOf(['main', 'other']),
};

const defaultProps = {
  priority: 'other',
};

const SkipToLink = ({
  description, priority, onSelect,
}) => {
  const skipToLinksContext = React.useContext(SkipToLinksContext);
  const navigationItemContext = React.useContext(NavigationItemContext);

  // A unique identifier is generated for each SkipToLink instance for
  // registration purposes.
  const keyRef = React.useRef(uuidv4());

  React.useLayoutEffect(() => {
    if (!navigationItemContext.isActive) {
      // If the SkipToLink is rendered within an inactive branch of the
      // navigation tree, the SkipToLink should not be registered.
      // SkipToLinks should not be rendered for content that is not visible.
      skipToLinksContext.unregisterLink(keyRef.current);
    } else {
      skipToLinksContext.registerLink(keyRef.current, description, priority, onSelect);
    }
  }, [
    skipToLinksContext,
    description,
    priority,
    onSelect,
    navigationItemContext.isActive,
  ]);

  React.useEffect(() => () => {
    // A separate effect is used to unregister the SkipToLink when it is
    // unmounted to limit registration thrash on updates to the component.
    skipToLinksContext.unregisterLink(keyRef.current);
  }, [skipToLinksContext]);

  // If the SkipToLinks value is undefined, then there is no
  // possibility of rendering the SkipToLink. Given the importance of the
  // SkipToLinks to the overall accessibility of the application, this is
  // treated as a fatal error.
  if (!skipToLinksContext) {
    throw new Error('SkipToLink could not be rendered due to a missing '
    + 'rendering context. Ensure this component is rendered within an '
    + 'ApplicationContainer.');
  }

  // The rendering of the actual element is handled by registry.
  return null;
};

SkipToLink.propTypes = propTypes;
SkipToLink.defaultProps = defaultProps;

export default SkipToLink;
