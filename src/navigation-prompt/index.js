import PropTypes from 'prop-types';
import NavigationPrompt from './NavigationPrompt';
import NavigationPromptCheckpoint from './NavigationPromptCheckpoint';
import PromptRegistrationContext from './PromptRegistrationContext';
import getUnsavedChangesPromptOptions from './getUnsavedChangesPromptOptions';

const navigationPromptResolutionOptionsShape = PropTypes.oneOfType([PropTypes.shape({
  /**
   * The title string for the NotificationDialog.
   */
  title: PropTypes.string,
  /**
   * The startMessage string for the NotificationDialog.
   */
  startMessage: PropTypes.string,
  /**
   * The content element for the NotificationDialog.
   */
  content: PropTypes.node,
  /**
   * The endMessage string for the NotificationDialog.
   */
  endMessage: PropTypes.string,
  /**
   * The string for the NotificationDialog's accept button text.
   */
  acceptButtonText: PropTypes.string,
  /**
   * The string for the NotificationDialog's reject button text.
   */
  rejectButtonText: PropTypes.string,
  /**
   * The string specifying the emphasized action.
   */
  emphasizedAction: PropTypes.oneOf(['accept', 'reject', 'none']),
  /**
   * The string specifying the button order.
   */
  buttonOrder: PropTypes.oneOf(['acceptFirst', 'rejectFirst']),
}), PropTypes.func]);

export default NavigationPrompt;
export { NavigationPromptCheckpoint, PromptRegistrationContext };
export { navigationPromptResolutionOptionsShape, getUnsavedChangesPromptOptions };
