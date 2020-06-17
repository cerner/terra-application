import ApplicationPageStatus, { ApplicationPageStatusProvider, ApplicationPageStatusContext } from '../../../src/application-page-status';

describe('application-page-status/index', () => {
  it('should export ApplicationPageStatus', () => {
    expect(ApplicationPageStatus).toBeDefined();
  });

  it('should export ApplicationPageStatusProvider', () => {
    expect(ApplicationPageStatusProvider).toBeDefined();
  });

  it('should export ApplicationPageStatusContext', () => {
    expect(ApplicationPageStatusContext).toBeDefined();
  });
});
