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
};

const bannerPriority = [
  bannerTypes.ALERT,
  bannerTypes.ERROR,
  bannerTypes.WARNING,
  bannerTypes.GAP_CHECKING,
  bannerTypes.OUTSIDE_RECORDS,
  bannerTypes.INFO,
  bannerTypes.SUCCESS,
];

const organizeBannersByPriority = (intl, banners) => {
  if (!banners) {
    return [];
  }

  const bannersList = bannerPriority.reduce((coll, type) => {
    if (banners[type]) {
      let propOverrides;

      if (type === bannerTypes.GAP_CHECKING) {
        propOverrides = {
          title: intl.formatMessage({
            id: 'workflowFramework.banner.gapChecking.title',
          }),
          type: 'custom',
          customColorClass: cx(['gap-checking-banner']),
          customIcon: <IconGapChecking />,
        };
      } else if (type === bannerTypes.OUTSIDE_RECORDS) {
        propOverrides = {
          title: intl.formatMessage({
            id: 'workflowFramework.banner.outsideRecords.title',
          }),
          type: 'custom',
          customColorClass: cx(['outside-records-banner']),
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
