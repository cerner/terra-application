import React from 'react';
import classNames from 'classnames/bind';
import IconDiamondSymbol from 'terra-icon/lib/icon/IconDiamondSymbol';
import IconGapChecking from 'terra-icon/lib/icon/IconGapChecking';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

const bannerTypes = {
  // ALERT: 'alert',
  // ERROR: 'error',
  // WARNING: 'warning',
  // GAP_CHECKING: 'gapChecking',
  // OUTSIDE_RECORDS: 'outsideRecords',
  // INFO: 'info',
  // SUCCESS: 'success',
  ALERT: "mpageui-BannerItem--alert",
  ERROR: "mpageui-BannerItem--error",
  WARNING: "mpageui-BannerItem--warning",
  GAP_CHECKING: "mpageui-BannerItem--gapChecking",
  OUTSIDE_RECORDS: "mpageui-BannerItem--outsideRecords",
  INFO: "mpageui-BannerItem--info",
  SUCCESS: "mpageui-BannerItem--success"
};

const BANNER_TYPES = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom',
  GAP_CHECKING: 'gapChecking', // REQUIRED?
  OUTSIDE_RECORDS: 'outsideRecords',
};

const disclosedBannerPriority = [
  BANNER_TYPES.ALERT,
  BANNER_TYPES.ERROR,
  BANNER_TYPES.WARNING,
  BANNER_TYPES.OUTSIDE_RECORDS,
  BANNER_TYPES.INFO,
  BANNER_TYPES.SUCCESS,
];

const defaultBannerPriority = [
  BANNER_TYPES.ALERT,
  BANNER_TYPES.ERROR,
  BANNER_TYPES.WARNING,
  BANNER_TYPES.OUTSIDE_RECORDS,
  BANNER_TYPES.INFO,
  BANNER_TYPES.SUCCESS,
  BANNER_TYPES.GAP_CHECKING, // REQUIRED?
];

const organizeBannersByPriority = (intl, banners) => {
  if (!banners) {
    return [];
  }

  const bannersList = defaultBannerPriority.reduce((coll, type) => {
    if (banners[type]) {
      let propOverrides;

      if (type === BANNER_TYPES.GAP_CHECKING) {
        propOverrides = {
          title: intl.formatMessage({
            id: 'workflowFramework.banner.gapChecking.title',
          }),
          type: 'custom',
          customColorClass: cx('gap-checking-banner'),
          customIcon: <IconGapChecking />,
        };
      } else if (type === BANNER_TYPES.OUTSIDE_RECORDS) {
        propOverrides = {
          title: intl.formatMessage({
            id: 'workflowFramework.banner.outsideRecords.title',
          }),
          type: 'custom',
          customColorClass: cx('outside-records-banner'),
          customIcon: (<IconDiamondSymbol />),
        };
      }

      // eslint-disable-next-line compat/compat
      const registeredBannersForType = Object.values(banners[type]);
      registeredBannersForType.map(registeredBannerProps => coll.push({ ...registeredBannerProps, ...propOverrides }));
    }

    return coll;
  }, []);

  return bannersList;
};

export { organizeBannersByPriority };
export { BANNER_TYPES };
