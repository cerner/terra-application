const BANNER_VARIANTS = {
  HAZARD_HIGH: 'hazard-high',
  HAZARD_MEDIUM: 'hazard-medium',
  HAZARD_LOW: 'hazard-low',
  ERROR: 'error',
  UNSATISFIED: 'unsatisfied',
  UNVERIFIED: 'unverified',
};

const defaultBannerPriority = [
  BANNER_VARIANTS.HAZARD_HIGH,
  BANNER_VARIANTS.HAZARD_MEDIUM,
  BANNER_VARIANTS.HAZARD_LOW,
  BANNER_VARIANTS.ERROR,
  BANNER_VARIANTS.UNSATISFIED,
  BANNER_VARIANTS.UNVERIFIED,
];

const fusionBannerPriority = [
  BANNER_VARIANTS.HAZARD_HIGH,
  BANNER_VARIANTS.ERROR,
  BANNER_VARIANTS.HAZARD_MEDIUM,
  BANNER_VARIANTS.UNSATISFIED,
  BANNER_VARIANTS.UNVERIFIED,
  BANNER_VARIANTS.HAZARD_LOW,
];

/**
 * Organize / prioritized the banners for the given theme.
 * @param {Object[]} banners - the list of banner props to organize
 * @param {String} themeName - name of the theme to prioritize the banners for. <---- TO DO - verify this updates correctly
 *
 * @returns List of prioritized banners.
 */
const organizeBannersByPriority = (banners, themeName) => {
  if (!banners) {
    return [];
  }

  let priorityOrder = defaultBannerPriority;
  if (themeName === 'orion-fusion-theme') {
    priorityOrder = fusionBannerPriority;
  }

  const bannersList = priorityOrder.reduce((coll, type) => {
    if (banners[type]) {
      // eslint-disable-next-line compat/compat
      const registeredBannersForType = Object.values(banners[type]);
      registeredBannersForType.map(registeredBannerProps => coll.push(registeredBannerProps));
    }

    return coll;
  }, []);

  return bannersList;
};

export { organizeBannersByPriority, BANNER_VARIANTS };
