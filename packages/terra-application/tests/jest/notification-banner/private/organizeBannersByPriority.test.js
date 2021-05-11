import organizeBannersByPriority from '../../../../src/notification-banner/private/organizeBannersByPriority';

const hazardHighBannerProps = { id: 'hazard-high', variant: 'hazard-high' };
const hazardMediumBannerProps = { id: 'hazard-medium', variant: 'hazard-medium' };
const hazardLowBannerProps = { id: 'hazard-low', variant: 'hazard-low' };
const errorBannerProps = { id: 'error', variant: 'error' };
const unsatisfiedBannerProps = { id: 'unsatisfied', variant: 'unsatisfied' };
const unverifiedBannerProps = { id: 'unverified', variant: 'unverified' };
const customBannerProps = { id: 'custom', variant: 'custom' };

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
        custom: { 'randomID-981': customBannerProps },
      };

      const organizedBanners = organizeBannersByPriority(banners);
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(7);
      expect(organizedBanners[0].id).toEqual('hazard-high');
      expect(organizedBanners[1].id).toEqual('hazard-medium');
      expect(organizedBanners[2].id).toEqual('hazard-low');
      expect(organizedBanners[3].id).toEqual('error');
      expect(organizedBanners[4].id).toEqual('unsatisfied');
      expect(organizedBanners[5].id).toEqual('unverified');
      expect(organizedBanners[6].id).toEqual('custom');
    });

    it('organizes banner by fusion priority', () => {
      const banners = {
        unsatisfied: { 'randomID-1': unsatisfiedBannerProps },
        error: { 'randomID-1324': errorBannerProps },
        'hazard-medium': { 'randomID-1234': hazardMediumBannerProps },
        'hazard-high': { 'randomID-1333': hazardHighBannerProps },
        unverified: { 'randomID-9081': unverifiedBannerProps },
        'hazard-low': { 'randomID-981': hazardLowBannerProps },
        custom: { 'randomID-981': customBannerProps },
      };

      const organizedBanners = organizeBannersByPriority(banners, 'orion-fusion-theme');
      expect(organizedBanners).toMatchSnapshot();

      expect(organizedBanners).toHaveLength(7);
      expect(organizedBanners[0].id).toEqual('hazard-high');
      expect(organizedBanners[1].id).toEqual('error');
      expect(organizedBanners[2].id).toEqual('hazard-medium');
      expect(organizedBanners[3].id).toEqual('unsatisfied');
      expect(organizedBanners[4].id).toEqual('unverified');
      expect(organizedBanners[5].id).toEqual('hazard-low');
      expect(organizedBanners[6].id).toEqual('custom');
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
      expect(organizedBanners[0].id).toEqual('hazard-medium');
      expect(organizedBanners[1].id).toEqual('second-banner-of-type-hazard-medium');
    });
  });
});
