import { BANNER_TYPES, organizeBannersByPriority } from '../../../../src/notification-banner/private/utils';

const alertBannerProps = { id: BANNER_TYPES.ALERT, type: 'alert' };
const errorBannerProps = { id: BANNER_TYPES.ERROR, type: 'error' };
const warningBannerProps = { id: BANNER_TYPES.WARNING, type: 'warning' };
const unsatisfiedBannerProps = { id: BANNER_TYPES.UNSATISFIED, type: 'unsatisfied' };
const unverifiedBannerProps = { id: BANNER_TYPES.UNVERIFIED, type: 'unverified' };
const infoBannerProps = { id: BANNER_TYPES.INFO, type: 'info' };
const successBannerProps = { id: BANNER_TYPES.SUCCESS, type: 'success' };

describe('utils', () => {
  describe('organizes banner by priority', () => {
    it('returns empty array when banners is undefined', () => {
      const organizedBanners = organizeBannersByPriority();
      expect(organizedBanners).toEqual([]);
    });

    it('returns list of banner props', () => {
      const banners = {
        alert: {
          'randomID-1': alertBannerProps,
        },
        error: {
          'randomID-2': errorBannerProps,
        },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toHaveLength(2);
      expect(organizedBanners[0]).toEqual(expect.objectContaining(alertBannerProps));
      expect(organizedBanners[1]).toEqual(expect.objectContaining(errorBannerProps));
    });

    it('organizes banner by priority', () => {
      const banners = {
        unsatisfied: { 'randomID-1': unsatisfiedBannerProps },
        error: { 'randomID-1324': errorBannerProps },
        success: { 'randomID-223': successBannerProps },
        warning: { 'randomID-1234': warningBannerProps },
        alert: { 'randomID-1333': alertBannerProps },
        unverified: { 'randomID-9081': unverifiedBannerProps },
        info: { 'randomID-981': infoBannerProps },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(7);
      expect(organizedBanners[0].id).toEqual(BANNER_TYPES.ALERT);
      expect(organizedBanners[1].id).toEqual(BANNER_TYPES.ERROR);
      expect(organizedBanners[2].id).toEqual(BANNER_TYPES.WARNING);
      expect(organizedBanners[3].id).toEqual(BANNER_TYPES.UNSATISFIED);
      expect(organizedBanners[4].id).toEqual(BANNER_TYPES.UNVERIFIED);
      expect(organizedBanners[5].id).toEqual(BANNER_TYPES.INFO);
      expect(organizedBanners[6].id).toEqual(BANNER_TYPES.SUCCESS);
    });

    it('allows multiple banners by of one type', () => {
      const banners = {
        info: {
          'randomID-981': infoBannerProps,
          'randomID-92081': { type: 'info', id: 'second-banner-of-type-info' },
        },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(2);
      expect(organizedBanners[0].id).toEqual(BANNER_TYPES.INFO);
      expect(organizedBanners[1].id).toEqual('second-banner-of-type-info');
    });
  });
});
