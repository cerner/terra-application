import Logger, {
  initializeLogger,
} from '../../../../src/utils/logger';

describe('theme/index', () => {
  it('should export ThemeContext', () => {
    expect(Logger).toBeDefined();
  });

  it('should export themeContextShape', () => {
    expect(initializeLogger).toBeDefined();
  });
});
