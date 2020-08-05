import ApplicationStatusOverlay, { ApplicationStatusOverlayProvider, ApplicationStatusOverlayContext } from '../../../src/application-status-overlay';

describe('application-status-overlay/index', () => {
  it('should export ApplicationStatusOverlay', () => {
    expect(ApplicationStatusOverlay).toBeDefined();
  });

  it('should export ApplicationStatusOverlayProvider', () => {
    expect(ApplicationStatusOverlayProvider).toBeDefined();
  });

  it('should export ApplicationStatusOverlayContext', () => {
    expect(ApplicationStatusOverlayContext).toBeDefined();
  });
});
