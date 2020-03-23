import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Alert from 'terra-alert';

import BannerRegistrationContext from './_BannerRegistrationContext';
import { organizeBannersByPriority } from './_Utils';

const propTypes = {
  /**
   * Components to render within the context of the Banner Checkpoint. Any banners rendered within
   * these child components will be prioritized and organized in a list by the Checkpoint and will be
   * display above the children.
   */
  children: PropTypes.node,
  /**
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: intlShape.isRequired,
};

/**
 * The Banner Checkpoint manages prioritizing and displaying all Workflow Banners
 * rendered within the Checkpoint Context in a list above all other content in the tree.
 */
const BannerCheckpoint = ({ children, intl, ...customProps }) => {
  const registeredBanners = React.useRef({});
  const [banners, setBanners] = React.useState([]);

  const registerBanner = (bannerId, bannerProps) => {
    if (process.env.NODE_ENV !== 'production' && !bannerId) {
      // eslint-disable-next-line no-console
      console.warn('A banner cannot be registered without an identifier.');
      return;
    }

    const { type } = bannerProps;

    if (!registeredBanners.current[type]) {
      registeredBanners.current[type] = {};
    }

    registeredBanners.current[type][bannerId] = { key: bannerId, ...bannerProps };

    setBanners(organizeBannersByPriority(intl, registeredBanners.current));
  };

  const unregisterBanner = (bannerId, bannerType) => {
    if (process.env.NODE_ENV !== 'production' && (!bannerId || !bannerType)) {
      // eslint-disable-next-line no-console
      console.warn('A banner cannot be unregistered without an identifier or banner type.');
      return;
    }

    if (!registeredBanners.current[bannerType][bannerId]) {
      return;
    }

    delete registeredBanners.current[bannerType][bannerId];

    setBanners(organizeBannersByPriority(intl, registeredBanners.current));
  };

  const BannerList = () => {
    if (!banners.length) {
      return null;
    }

    return (
      <div className={customProps.className || ''}>
        {banners.map((bannerProps) => {
          const {
            action,
            title,
            description,
            key,
            type,
            originalType,
            onDismiss,
            ...otherBannerProps
          } = bannerProps;

          return (
            <Alert
              {...otherBannerProps}
              type={type}
              title={title}
              action={action}
              onDismiss={onDismiss}
              key={key}
            >
              {description}
            </Alert>
          );
        })}
      </div>
    );
  };

  const bannerProviderValue = React.useRef({
    registerBanner,
    unregisterBanner,
  });

  return (
    <BannerRegistrationContext.Provider value={bannerProviderValue.current}>
      <BannerList />
      {children}
    </BannerRegistrationContext.Provider>
  );
};

BannerCheckpoint.propTypes = propTypes;

export default injectIntl(BannerCheckpoint);
