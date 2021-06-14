import { createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * The ApplicationNavigationActionsContext can be used by Layout implementations to define
 * actions to be rendered by content rendered within the Layout. It is up
 * to the context's consumer to determine how and where these action controls
 * are rendered.
 */
const ApplicationNavigationActionsContext = createContext({});

const actionShape = PropTypes.shape({
  /**
   * An identifier for the action. This must be unique within the provided
   * actions.
   */
  key: PropTypes.string.isRequired,
  /**
   * A string description for the action. This will accessible to users and
   * should be translated sif necessary.
   */
  label: PropTypes.string.isRequired,
  /**
   * A graphic representing the action. This may be used by the context consumer
   * to render controls for the action.
   */
  icon: PropTypes.element,
  /**
   * A function executed upon selection of the action.
   */
  onSelect: PropTypes.func,
});

const contextShape = {
  /**
   * Action definitions for the layout.
   */
  actions: PropTypes.arrayOf(actionShape),
};

export default ApplicationNavigationActionsContext;
export { contextShape };
