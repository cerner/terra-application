import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import ContentContainer from 'terra-content-container';

import BannerRegistrationContext from './private/BannerRegistrationContext';
import { organizeBannersByPriority } from './private/utils';

const propTypes = {
  /**
   * Components to render within the context of the Banner Checkpoint. Any banners rendered within
   * these child components will be prioritized and organized in a list by the Checkpoint and will be
   * display above the children.
   */
  children: PropTypes.node,
  /**
   * By default, the children rendered by BannerProvider are fit to the Checkpoint's parent using 100% height.
   * If `fitToParentIsDisabled` is provided, the Checkpoint will render at its intrinsic content height and
   * potentially overflow its parent.
   */
  fitToParentIsDisabled: PropTypes.bool,
};

/**
 * The Banner Checkpoint manages prioritizing and displaying all Workflow Banners
 * rendered within the Checkpoint Context in a list above all other content in the tree.
 */
const BannerProvider = ({ fitToParentIsDisabled, children }) => {
  const uuid = React.useRef(uuidv4());
  const registeredBanners = React.useRef({});

  const bannerProviderValue = React.useMemo(() => {
    const registerBanner = (bannerId, bannerType) => {
      if (process.env.NODE_ENV !== 'production' && !bannerId) {
        // eslint-disable-next-line no-console
        console.warn('A banner cannot be registered without an identifier.');
        return undefined;
      }

      const bannerContainerName = `${bannerType}-banners-${uuid.current}`;

      if (!registeredBanners.current[bannerType]) {
        registeredBanners.current[bannerType] = [];

        const newBannerContainer = document.createElement('div');
        newBannerContainer.setAttribute('id', bannerContainerName);

        const bannerListContainer = document.getElementById(`banner-list-${uuid.current}`);
        const bannerListChildren = bannerListContainer.childNodes;

        const banners = organizeBannersByPriority(registeredBanners.current);
        const bannerPosition = banners.indexOf(bannerType);

        bannerListContainer.insertBefore(newBannerContainer, bannerListChildren[bannerPosition + 1]);
      }

      return bannerContainerName;
    };

    const unregisterBanner = (bannerId, bannerType) => {
      if (process.env.NODE_ENV !== 'production' && (!bannerId || !bannerType)) {
        // eslint-disable-next-line no-console
        console.warn('A banner cannot be unregistered without an identifier or banner type.');
        return;
      }

      registeredBanners.current[bannerType] = registeredBanners.current[bannerType].filter(registeredBannerId => registeredBannerId !== bannerType);

      if (!registeredBanners.current[bannerType].length) {
        delete registeredBanners.current[bannerType];
      }

      const bannerList = organizeBannersByPriority(registeredBanners.current);
      if (bannerList.indexOf(bannerType) < 0) {
        const bannerContainer = document.getElementById(`${bannerType}-banners-${uuid.current}`);
        bannerContainer.remove();
      }
    };

    return {
      registerBanner,
      bannerListId: uuid.current,
      unregisterBanner,
    };
  }, []);

  return (
    <BannerRegistrationContext.Provider value={bannerProviderValue}>
      <ContentContainer
        data-terra-alert-provider={uuid.current}
        header={<div id={`banner-list-${uuid.current}`} />}
        fill={!fitToParentIsDisabled}
      >
        {children}
      </ContentContainer>
    </BannerRegistrationContext.Provider>
  );
};

BannerProvider.propTypes = propTypes;
BannerProvider.defaultProps = {
  fitToParentIsDisabled: false,
};

export default BannerProvider;
