import UnsavedChangesPrompt, { UnsavedChangesPromptCheckpoint, PromptRegistrationContext, getUnsavedChangesPromptOptions } from '../../../src/unsaved-changes-prompt';

describe('unsaved-changes-prompt/index', () => {
  it('should export UnsavedChangesPrompt', () => {
    expect(UnsavedChangesPrompt).toBeDefined();
  });

  it('should export UnsavedChangesPromptCheckpoint', () => {
    expect(UnsavedChangesPromptCheckpoint).toBeDefined();
  });

  it('should export PromptRegistrationContext', () => {
    expect(PromptRegistrationContext).toBeDefined();
  });

  it('should export getUnsavedChangesPromptOptions', () => {
    expect(getUnsavedChangesPromptOptions).toBeDefined();
  });
});
