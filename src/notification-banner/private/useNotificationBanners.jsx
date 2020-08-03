import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'terra-alert';
import Button from 'terra-button';
import BannerRegistrationContext from './BannerRegistrationContext';

import { organizeBannersByPriority } from './utils';

/**
 * The `useNotificationBanners` Hook manages registering and prioritizing Notification Banners
 * rendered within the Notification Banner Context.
 *
 * Returns:
 *   - NotificationBannerProvider - React Context Provider - Provides the Banner Registration Context to its children.
 *         This allows any NotificationBanner registered beneath it to be displayed in teh NotificationBanner's list.
 *   - NotificationBanners - React Component - Renders a list of prioritized notification banners.
 *
 * @returns { NotificationBannerProvider, NotificationBanners }
 */
const useNotificationBanners = () => {
  /** The registeredBanners ref maintains collection of banner ids and banner props registered to the  NotificationBannerProvider. */
  const registeredBanners = React.useRef({});

  /**
   * The updateBannerState ref stores the update state function used to manage the banner rendered in the NotificationBanners component.
   * This ties the state updates to the `useNotificationBanners` hook, while allowing the NotificationBanners to be rendered above or below
   * the NotificationBannerProvider.
   */
  const updateBannerState = React.useRef();

  const bannerProviderValue = React.useMemo(() => {
    /**
     * Adds the banner ID and props to the collection of registered banners. Once registered,
     * it updates the NotificationBanner's state to render the new Banner.
     *
     * @param {UUID} bannerId - unique ID associated to the banner
     * @param {Object} bannerProps - react props associated tot he banner. See ./NotificationBanner's propTypes.
     */
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

      if (updateBannerState.current) {
        updateBannerState.current(organizeBannersByPriority(registeredBanners.current));
      }
    };

    /**
     * Removes the banner ID and props from the collection of registered banners. Once unregistered,
     * it updates the NotificationBanner's state to remove the Banner from the list.
     *
     * @param {UUID} bannerId - unique ID associated to the banner
     * @param {String} bannerType - the banner variant
     */
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

      if (updateBannerState.current) {
        updateBannerState.current(organizeBannersByPriority(registeredBanners.current));
      }
    };

    return {
      registerNotificationBanner,
      unregisterNotificationBanner,
    };
  }, []);

  /**
   * Provides the Banner Registration Context to its children.
   */
  const NotificationBannerProvider = ({ children }) => (
    <BannerRegistrationContext.Provider value={bannerProviderValue}>
      {children}
    </BannerRegistrationContext.Provider>
  );

  NotificationBannerProvider.propTypes = {
    children: PropTypes.node,
  };

  /**
   * Renders a list of prioritized notification banners.
   */
  const NotificationBanners = () => {
    const [banners, setBanners] = React.useState([]);
    updateBannerState.current = setBanners;

    if (!banners.length) {
      return null;
    }

    return (
      <div aria-live="polite">
        {banners.map((bannerProps) => {
          const {
            description, type, bannerAction, onRequestClose, key,
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
              onDismiss={onRequestClose}
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

  const useNotificationBannerExports = React.useRef({
    NotificationBannerProvider,
    NotificationBanners,
  });

  return useNotificationBannerExports.current;
};

export default useNotificationBanners;
