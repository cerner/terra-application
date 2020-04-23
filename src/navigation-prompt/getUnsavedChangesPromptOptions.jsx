import React from 'react';

/**
 * Generates an Object containing properties used to define messages for NavigationPromptCheckpoint-based user prompting.
 * @param {Object} intl - The react-intl provided intl object used to look up translated string definitions.
 */
export default intl => (prompts) => {
  let startMessage;
  let content;

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

    // We do not currently have access to the prompts internal identifiers.
    /* eslint-disable react/no-array-index-key */
    content = (
      <ul>
        {prompts.map((prompt, index) => <li key={index}>{prompt.description}</li>)}
      </ul>
    );
    /* eslint-enable react/no-array-index-key */
  }

  const endMessage = intl.formatMessage({
    id: 'terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro',
  });

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
