import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider, ApplicationLoadingOverlayContext } from '../../../src/application-loading-overlay';

describe('application-loading-overlay/index', () => {
  it('should export ApplicationLoadingOverlay', () => {
    expect(ApplicationLoadingOverlay).toBeDefined();
  });

  it('should export ApplicationLoadingOverlayProvider', () => {
    expect(ApplicationLoadingOverlayProvider).toBeDefined();
  });

  it('should export ApplicationLoadingOverlayContext', () => {
    expect(ApplicationLoadingOverlayContext).toBeDefined();
  });
});
