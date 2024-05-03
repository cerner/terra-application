// import NavigationPrompt, { NavigationPromptCheckpoint, PromptRegistrationContext, getUnsavedChangesPromptOptions } from '../../../src/navigation-prompt';
import { NavigationPromptModule} from '../../../src';

console.log(NavigationPromptModule);

const  { NavigationPrompt,  NavigationPromptCheckpoint, PromptRegistrationContext, getUnsavedChangesPromptOptions } = NavigationPromptModule;

describe('navigation-prompt/index', () => {
  it('should export NavigationPrompt', () => {
    expect(NavigationPrompt).toBeDefined();
  });

  it('should export NavigationPromptCheckpoint', () => {
    expect(NavigationPromptCheckpoint).toBeDefined();
  });

  it('should export PromptRegistrationContext', () => {
    expect(PromptRegistrationContext).toBeDefined();
  });

  it('should export getUnsavedChangesPromptOptions', () => {
    expect(getUnsavedChangesPromptOptions).toBeDefined();
  });
});
