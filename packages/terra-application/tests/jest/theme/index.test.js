import {
  ThemeContext,
  themeContextShape,
} from '../../../src/theme';

describe('theme/index', () => {
  it('should export ThemeContext', () => {
    expect(ThemeContext).toBeDefined();
  });

  it('should export themeContextShape', () => {
    expect(themeContextShape).toBeDefined();
  });
});
