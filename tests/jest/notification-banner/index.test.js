import NotificationBanner, {
  NotificationBannerProvider,
} from '../../../src/notification-banner';

describe('notification-banner/index', () => {
  it('should export NotificationBanner', () => {
    expect(NotificationBanner).toBeDefined();
  });

  it('should export NotificationBannerProvider', () => {
    expect(NotificationBannerProvider).toBeDefined();
  });
});
