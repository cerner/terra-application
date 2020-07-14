import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'terra-alert';
import Button from 'terra-button';
import BannerRegistrationContext from './private/BannerRegistrationContext';

import { organizeBannersByPriority } from './private/utils';

/**
 * The Banner Checkpoint manages prioritizing and displaying all Workflow Banners
 * rendered within the Checkpoint Context in a list above all other content in the tree.
 */
const useNotificationBanners = () => {
  const registeredBanners = React.useRef({});
  const setBannerListState = React.useRef();

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

      if (setBannerListState.current) {
        setBannerListState.current(organizeBannersByPriority(registeredBanners.current));
      }
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

      if (setBannerListState.current) {
        setBannerListState.current(organizeBannersByPriority(registeredBanners.current));
      }
    };

    return {
      registerNotificationBanner,
      unregisterNotificationBanner,
    };
  }, []);

  const NotificationBannerProvider = ({ children }) => (
    <BannerRegistrationContext.Provider value={bannerProviderValue}>
      {children}
    </BannerRegistrationContext.Provider>
  );

  NotificationBannerProvider.propTypes = {
    children: PropTypes.node,
  };

  const NotificationBanners = () => {
    const [banners, setBanners] = React.useState([]);
    setBannerListState.current = setBanners;

    return (
      <div aria-live="polite">
        {banners.map((bannerProps) => {
          const {
            description, type, bannerAction, onRequestDismiss, key,
          } = bannerProps;

          let actionButton = null;
          if (bannerAction) {
            actionButton = (
              <Button
                text={bannerAction.text}
                variant="ghost"
                onClick={bannerAction.onClick}
              />
            );
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

  return {
    NotificationBannerProvider,
    NotificationBanners,
  };
};

export default useNotificationBanners;
