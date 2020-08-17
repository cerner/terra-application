import { BANNER_TYPES, organizeBannersByPriority } from '../../../../src/notification-banner/private/utils';

const hazardHighBannerProps = { id: BANNER_VARIANTS.HAZARD_HIGH, variant: 'hazard-high' };
const hazardMediumBannerProps = { id: BANNER_VARIANTS.HAZARD_MEDIUM, variant: 'hazard-medium' };
const hazardLowBannerProps = { id: BANNER_VARIANTS.HAZARD_LOW, variant: 'hazard-low' };
const errorBannerProps = { id: BANNER_VARIANTS.ERROR, variant: 'error' };
const unsatisfiedBannerProps = { id: BANNER_VARIANTS.UNSATISFIED, variant: 'unsatisfied' };
const unverifiedBannerProps = { id: BANNER_VARIANTS.UNVERIFIED, variant: 'unverified' };

describe('utils', () => {
  describe('organizes banner by priority', () => {
    it('returns empty array when banners is undefined', () => {
      const organizedBanners = organizeBannersByPriority();
      expect(organizedBanners).toEqual([]);
    });

    it('returns list of banner props', () => {
      const banners = {
        'hazard-high': {
          'randomID-1': hazardHighBannerProps,
        },
        error: {
          'randomID-2': errorBannerProps,
        },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toHaveLength(2);
      expect(organizedBanners[0]).toEqual(expect.objectContaining(hazardHighBannerProps));
      expect(organizedBanners[1]).toEqual(expect.objectContaining(errorBannerProps));
    });

    it('organizes banner by default priority', () => {
      const banners = {
        unsatisfied: { 'randomID-1': unsatisfiedBannerProps },
        error: { 'randomID-1324': errorBannerProps },
        'hazard-medium': { 'randomID-1234': hazardMediumBannerProps },
        'hazard-high': { 'randomID-1333': hazardHighBannerProps },
        unverified: { 'randomID-9081': unverifiedBannerProps },
        'hazard-low': { 'randomID-981': hazardLowBannerProps },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(6);
      expect(organizedBanners[0].id).toEqual(BANNER_VARIANTS.HAZARD_HIGH);
      expect(organizedBanners[1].id).toEqual(BANNER_VARIANTS.HAZARD_MEDIUM);
      expect(organizedBanners[2].id).toEqual(BANNER_VARIANTS.HAZARD_LOW);
      expect(organizedBanners[3].id).toEqual(BANNER_VARIANTS.ERROR);
      expect(organizedBanners[4].id).toEqual(BANNER_VARIANTS.UNSATISFIED);
      expect(organizedBanners[5].id).toEqual(BANNER_VARIANTS.UNVERIFIED);
    });

    it('organizes banner by fusion priority', () => {
      const banners = {
        unsatisfied: { 'randomID-1': unsatisfiedBannerProps },
        error: { 'randomID-1324': errorBannerProps },
        'hazard-medium': { 'randomID-1234': hazardMediumBannerProps },
        'hazard-high': { 'randomID-1333': hazardHighBannerProps },
        unverified: { 'randomID-9081': unverifiedBannerProps },
        'hazard-low': { 'randomID-981': hazardLowBannerProps },
      };

      const organizedBanners = organizeBannersByPriority(banners, 'orion-fusion-theme');
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners[0].id).toEqual(BANNER_VARIANTS.HAZARD_HIGH);
      expect(organizedBanners[1].id).toEqual(BANNER_VARIANTS.ERROR);
      expect(organizedBanners[2].id).toEqual(BANNER_VARIANTS.HAZARD_MEDIUM);
      expect(organizedBanners[3].id).toEqual(BANNER_VARIANTS.UNSATISFIED);
      expect(organizedBanners[4].id).toEqual(BANNER_VARIANTS.UNVERIFIED);
      expect(organizedBanners[5].id).toEqual(BANNER_VARIANTS.HAZARD_LOW);
    });

    it('allows multiple banners by of one type', () => {
      const banners = {
        'hazard-medium': {
          'randomID-981': hazardMediumBannerProps,
          'randomID-92081': { variant: 'hazard-medium', id: 'second-banner-of-type-hazard-medium' },
        },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(2);
      expect(organizedBanners[0].id).toEqual(BANNER_VARIANTS.HAZARD_MEDIUM);
      expect(organizedBanners[1].id).toEqual('second-banner-of-type-hazard-medium');
    });
  });
});
