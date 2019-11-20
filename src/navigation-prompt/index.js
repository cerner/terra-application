import PropTypes from 'prop-types';

const navigationPromptResolutionOptionsShape = PropTypes.oneOfType([PropTypes.shape({
  title: PropTypes.string,
  startMessage: PropTypes.string,
  content: PropTypes.node,
  endMessage: PropTypes.string,
  acceptButtonText: PropTypes.string,
  rejectButtonText: PropTypes.string,
  emphasizedAction: PropTypes.oneOf(['accept', 'reject', 'none']),
  buttonOrder: PropTypes.oneOf(['acceptFirst', 'rejectFirst']),
}), PropTypes.func]);

export { default } from 'terra-navigation-prompt';
export { NavigationPromptCheckpoint, PromptRegistrationContext } from 'terra-navigation-prompt';
export { navigationPromptResolutionOptionsShape };
