import NotificationBanner, {
  useNotificationBanners,
} from '../../../src/notification-banner';

describe('notification-banner/index', () => {
  it('should export NotificationBanner', () => {
    expect(NotificationBanner).toBeDefined();
  });

  it('should export useNotificationBanners', () => {
    expect(useNotificationBanners).toBeDefined();
  });
});
