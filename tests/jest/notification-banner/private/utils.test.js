import { BANNER_TYPES, organizeBannersByPriority } from '../../../../src/notification-banner/private/utils';

const alertBannerProps = { id: BANNER_TYPES.ALERT, type: 'alert' };
const errorBannerProps = { id: BANNER_TYPES.ERROR, type: 'error' };
const warningBannerProps = { id: BANNER_TYPES.WARNING, type: 'warning' };
const unsatisfiedBannerProps = { id: BANNER_TYPES.UNSATISFIED, type: 'unsatisfied' };
const unverifiedBannerProps = { id: BANNER_TYPES.UNVERIFIED, type: 'unverified' };
const advisoryBannerProps = { id: BANNER_TYPES.ADVISORY, type: 'advisory' };

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
        warning: { 'randomID-1234': warningBannerProps },
        alert: { 'randomID-1333': alertBannerProps },
        unverified: { 'randomID-9081': unverifiedBannerProps },
        advisory: { 'randomID-981': advisoryBannerProps },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(6);
      expect(organizedBanners[0].id).toEqual(BANNER_TYPES.ALERT);
      expect(organizedBanners[1].id).toEqual(BANNER_TYPES.ERROR);
      expect(organizedBanners[2].id).toEqual(BANNER_TYPES.WARNING);
      expect(organizedBanners[3].id).toEqual(BANNER_TYPES.UNSATISFIED);
      expect(organizedBanners[4].id).toEqual(BANNER_TYPES.UNVERIFIED);
      expect(organizedBanners[5].id).toEqual(BANNER_TYPES.ADVISORY);
    });

    it('allows multiple banners by of one type', () => {
      const banners = {
        warning: {
          'randomID-981': warningBannerProps,
          'randomID-92081': { type: 'warning', id: 'second-banner-of-type-warning' },
        },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(2);
      expect(organizedBanners[0].id).toEqual(BANNER_TYPES.WARNING);
      expect(organizedBanners[1].id).toEqual('second-banner-of-type-warning');
    });
  });
});
