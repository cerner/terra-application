import { ApplicationIntlContext, ApplicationIntlProvider } from '../../../src/application-intl';

describe('application-intl/index', () => {
  it('should export ApplicationIntlContext', () => {
    expect(ApplicationIntlContext).toBeDefined();
  });

  it('should export ApplicationIntlProvider', () => {
    expect(ApplicationIntlProvider).toBeDefined();
  });
});
