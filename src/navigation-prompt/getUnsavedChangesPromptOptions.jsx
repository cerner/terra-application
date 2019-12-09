import React from 'react';

/**
 * Generates an Object containing properties used to define messages for NavigationPromptCheckpoint-based user prompting.
 * @param {Object} intl - The react-intl provided intl object used to look up translated string definitions.
 */
export default intl => (prompts) => {
  let startMessage;
  let content;
  let endMessage;

  if (prompts.length === 1) {
    startMessage = intl.formatMessage({
      id: 'terraApplication.unsavedChangesPrompt.singlePromptMessage',
    }, {
      promptDescription: prompts[0].description,
    });
  } else {
    startMessage = intl.formatMessage({
      id: 'terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro',
    });
    content = (
      <ul>
        {[...new Set(prompts.map(prompt => prompt.description))].map(description => (<li key={description}>{description}</li>))}
      </ul>
    );
    endMessage = intl.formatMessage({
      id: 'terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro',
    });
  }

  return {
    title: intl.formatMessage({
      id: 'terraApplication.unsavedChangesPrompt.title',
    }),
    startMessage,
    content,
    endMessage,
    buttonOrder: 'rejectFirst',
    emphasizedAction: 'reject',
    acceptButtonText: intl.formatMessage({
      id: 'terraApplication.unsavedChangesPrompt.acceptButtonText',
    }),
    rejectButtonText: intl.formatMessage({
      id: 'terraApplication.unsavedChangesPrompt.rejectButtonText',
    }),
  };
};
