import UnsavedChangesPrompt, { UnsavedChangesPromptCheckpoint, PromptRegistrationContext, getUnsavedChangesPromptOptions } from '../../../src/unsaved-changes-prompt';

describe('navigation-prompt/index', () => {
  it('should export NavigationPrompt', () => {
    expect(UnsavedChangesPrompt).toBeDefined();
  });

  it('should export NavigationPromptCheckpoint', () => {
    expect(UnsavedChangesPromptCheckpoint).toBeDefined();
  });

  it('should export PromptRegistrationContext', () => {
    expect(PromptRegistrationContext).toBeDefined();
  });

  it('should export getUnsavedChangesPromptOptions', () => {
    expect(getUnsavedChangesPromptOptions).toBeDefined();
  });
});
