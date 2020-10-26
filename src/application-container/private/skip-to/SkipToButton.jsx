import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import NavigationItemContext from '../../../layouts/shared/NavigationItemContext';

import SkipToButtonsContext from './SkipToButtonsContext';

const propTypes = {
  /**
   * The string description of the SkipToButton. The provided value will be automatically
   * prefixed with the string "Skip to".
   */
  description: PropTypes.string.isRequired,
  /**
   * The function to be executed upon selection of the SkipToButton.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * When enabled, the SkipToButton will be treated as though it is tied to the main content
   * of the application. The SkipToButton for the main content will be rendered first; all others will
   * be rendered in the order of their registration.
   */
  isMain: PropTypes.bool,
};

const SkipToButton = ({
  description, isMain, onSelect,
}) => {
  const skipToButtonsContext = React.useContext(SkipToButtonsContext);
  const navigationItemContext = React.useContext(NavigationItemContext);

  /**
   * A unique identifier is generated for each SkipToButton instance for registration purposes.
   */
  const keyRef = React.useRef(uuidv4());

  React.useEffect(() => {
    if (!skipToButtonsContext) {
      /**
       * If the SkipToButtonsContext value is undefined, then there is no possibility of rendering
       * the SkipToButton. Given the importance of the SkipToButtons to the overall accessibility of
       * the application, this is treated as a fatal error.
       */
      throw new Error('A SkipToButton was rendered outside the context of the ApplicationContainer.');
    }

    if (!navigationItemContext.isActive) {
      /**
       * If the SkipToButton is rendered within an inactive branch of the navigation tree, the SkipToButton
       * should not be registered. SkipToButtons should not be rendered for content that is not visible.
       */
      skipToButtonsContext.unregisterButton(keyRef.current);
    } else {
      skipToButtonsContext.registerButton(keyRef.current, description, isMain, onSelect);
    }
  }, [skipToButtonsContext, description, isMain, onSelect, navigationItemContext.isActive]);

  React.useEffect(() => () => {
    /**
     * A separate effect is used to unregister the SkipToButton when it is unmounted.
     * This separation prevents the previous hook from un-registering/re-registering unnecessarily
     * while still ensuring it gets unregistered when necessary.
     */
    skipToButtonsContext.unregisterButton(keyRef.current);
  }, [skipToButtonsContext]);

  /**
   * The SkipToButton does not render any elements itself.
   */
  return null;
};

SkipToButton.propTypes = propTypes;

export default SkipToButton;
