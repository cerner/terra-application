import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';

import Alert from './private/_Banner';
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
const NotificationBannerProvider = ({ fitToParentIsDisabled, children }) => {
  const registeredBanners = React.useRef({});
  const [banners, setBanners] = React.useState([]);

  const bannerProviderValue = React.useMemo(() => {
    const registerNotificationBanner = (bannerId, bannerProps) => {
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

      setBanners(organizeBannersByPriority(registeredBanners.current));
    };

    const unregisterNotificationBanner = (bannerId, bannerType) => {
      if (process.env.NODE_ENV !== 'production' && (!bannerId || !bannerType)) {
        // eslint-disable-next-line no-console
        console.warn('A banner cannot be unregistered without an identifier or banner type.');
        return;
      }

      if (!registeredBanners.current[bannerType][bannerId]) {
        return;
      }

      delete registeredBanners.current[bannerType][bannerId];

      setBanners(organizeBannersByPriority(registeredBanners.current));
    };

    return {
      registerNotificationBanner,
      unregisterNotificationBanner,
    };
  }, []);

  const NotificationBannerList = () => {
    if (!banners.length) {
      return null;
    }

    return (
      <div aria-live="polite">
        {banners.map((bannerProps) => {
          const {
            description, type, bannerAction, onRequestDismiss, key,
          } = bannerProps;

          let actionButton = null;
          if (bannerAction) {
            actionButton = <Button text={bannerAction.text} variant="ghost" onClick={bannerAction.onClick} />;
          }

          return (
            <Alert
              key={key}
              action={actionButton}
              onDismiss={onRequestDismiss}
              type={type}
              data-terra-application-notification-banner={type}
            >
              {description}
            </Alert>
          );
        })}
      </div>
    );
  };

  return (
    <BannerRegistrationContext.Provider value={bannerProviderValue}>
      <ContentContainer
        header={<NotificationBannerList />}
        fill={!fitToParentIsDisabled}
      >
        {children}
      </ContentContainer>
    </BannerRegistrationContext.Provider>
  );
};

NotificationBannerProvider.propTypes = propTypes;
NotificationBannerProvider.defaultProps = {
  fitToParentIsDisabled: false,
};

export default NotificationBannerProvider;
