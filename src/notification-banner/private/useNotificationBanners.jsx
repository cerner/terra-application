import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'terra-alert';
import Button from 'terra-button';
import ThemeContext from 'terra-theme-context';

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
     * @param {Object} bannerProps - react props associated to the banner. See ../NotificationBanner's propTypes.
     */
    const registerNotificationBanner = (bannerId, bannerProps) => {
      if (process.env.NODE_ENV !== 'production' && !bannerId) {
        throw new Error('A banner cannot be registered without an identifier.');
      }

      const { variant } = bannerProps;

      if (!registeredBanners.current[variant]) {
        registeredBanners.current[variant] = {};
      }

      registeredBanners.current[variant][bannerId] = { key: bannerId, ...bannerProps };

      if (updateBannerState.current) {
        updateBannerState.current({ ...registeredBanners.current });
      }
    };

    /**
     * Removes the banner ID and props from the collection of registered banners. Once unregistered,
     * it updates the NotificationBanner's state to remove the Banner from the list.
     *
     * @param {UUID} bannerId - unique ID associated to the banner
     * @param {String} bannerVariant - the banner variant to remove banner from
     */
    const unregisterNotificationBanner = (bannerId, bannerVariant) => {
      if (process.env.NODE_ENV !== 'production' && (!bannerId || !bannerVariant)) {
        throw new Error('A banner cannot be unregistered without an identifier or banner variant.');
      }

      if (!registeredBanners.current[bannerVariant][bannerId]) {
        return;
      }

      delete registeredBanners.current[bannerVariant][bannerId];

      if (updateBannerState.current) {
        updateBannerState.current({ ...registeredBanners.current });
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
    const theme = React.useContext(ThemeContext);
    const [banners, setBanners] = React.useState([]);
    updateBannerState.current = setBanners;

    if (!Object.keys(banners).length) {
      return null;
    }
    const prioritizedBanners = organizeBannersByPriority(banners, theme.className);

    return (
      <div aria-live="polite">
        {prioritizedBanners.map((bannerProps) => {
          const {
            bannerAction, description, key, onRequestClose, variant,
          } = bannerProps;

          let alertType;
          switch (variant) {
            case 'hazard-high':
              alertType = 'alert';
              break;
            case 'hazard-medium':
              alertType = 'warning';
              break;
            case 'hazard-low':
              alertType = 'info';
              break;
            default:
              alertType = variant;
          }

          let actionButton = null;
          if (bannerAction) {
            actionButton = (
              <Button
                text={bannerAction.text}
                variant="ghost"
                data-terra-application-notification-banner={variant}
                onClick={bannerAction.onClick}
              />
            );
          }

          return (
            <Alert
              key={key}
              action={actionButton}
              onDismiss={onRequestClose}
              type={alertType}
              data-terra-application-notification-banner={variant}
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
