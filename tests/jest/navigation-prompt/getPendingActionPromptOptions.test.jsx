import { mockIntl } from 'terra-enzyme-intl';

import getPendingActionPromptOptions from '../../../src/navigation-prompt/getPendingActionPromptOptions';

describe('getPendingActionPromptOptions', () => {
  it('generates a function that provides appropriate messaging for a single prompt', () => {
    const generatedFunction = getPendingActionPromptOptions(mockIntl);

    expect(generatedFunction).toBeDefined();

    const functionOutput = generatedFunction([{ description: 'Test Prompt' }]);

    expect(functionOutput).toMatchSnapshot();
  });

  it('generates a function that provides appropriate messaging for a single prompt', () => {
    const generatedFunction = getPendingActionPromptOptions(mockIntl);

    expect(generatedFunction).toBeDefined();

    const functionOutput = generatedFunction([{ description: 'Test Prompt' }, { description: 'Another Test Prompt' }]);

    expect(functionOutput).toMatchSnapshot();
  });
});
