import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import withPromptRegistration from './_withPromptRegistration';
import { promptRegistrationContextValueShape } from './PromptRegistrationContext';

const propTypes = {
  /**
   * A string describing the content or concept for which the UnsavedChangesPrompt is being rendered.
   */
  description: PropTypes.string,
  /**
   * An object containing any other pertinent information related to the UnsavedChangesPrompt.
   */
  metaData: PropTypes.object,
  /**
   * @private
   * An object containing prompt registration APIs provided through the PromptRegistrationContext.
   */
  promptRegistration: promptRegistrationContextValueShape.isRequired,
};

class UnsavedChangesPrompt extends React.Component {
  constructor(props) {
    super(props);

    /**
     * A unique identifier is generated for each UnsavedChangesPrompt during construction. This will be used to
     * uniquely register/unregister the prompt with ancestor checkpoints without requiring consumers to
     * define unique identifiers themselves.
     */
    this.uuid = uuidv4();
  }

  componentDidMount() {
    const { description, metaData, promptRegistration } = this.props;

    /**
     * If the promptRegistration value is the ProviderRegistrationContext's default value,
     * then there is not a matching UnsavedChangesPromptCheckpoint above it in the hierarchy.
     * This is possible but likely not intentional, so the component warns.
     */
    if (promptRegistration.isDefaultContextValue && process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn('A UnsavedChangesPrompt was not rendered within the context of a UnsavedChangesPromptCheckpoint. If this is unexpected, validate that the expected version of the terra-application package is installed.');
      /* eslint-enable no-console */
    }

    promptRegistration.registerPrompt(this.uuid, description, metaData);
  }

  shouldComponentUpdate(nextProps) {
    const { description, metaData } = this.props;
    if (description !== nextProps.description || metaData !== nextProps.metaData) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    const { description, metaData, promptRegistration } = this.props;

    promptRegistration.registerPrompt(this.uuid, description, metaData);
  }

  componentWillUnmount() {
    this.props.promptRegistration.unregisterPrompt(this.uuid);
  }

  render() {
    return null;
  }
}

UnsavedChangesPrompt.propTypes = propTypes;

export default withPromptRegistration(UnsavedChangesPrompt);
