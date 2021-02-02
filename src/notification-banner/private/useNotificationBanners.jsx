import React from 'react';
import classNamesBind from 'classnames/bind';
// import uuidv4 from 'uuid/v4'; TODO
import Button from 'terra-button';
import ThemeContext from 'terra-theme-context';
// import VisuallyHiddenText from 'terra-visually-hidden-text'; TODO

import { ApplicationIntlContext } from '../../application-intl';

import BannerRegistrationContext from './BannerRegistrationContext';
import organizeBannersByPriority from './organizeBannersByPriority';
import NotificationBannerView, { getTitleStringIdForType } from './_NotificationBannerView';

import styles from './useNotificationBanners.module.scss';

const cx = classNamesBind.bind(styles);

/**
 * The `useNotificationBanners` Hook manages registering and prioritizing Notification Banners
 * rendered within the Notification Banner Context.
 *
 * Returns:
 *   - NotificationBannerProvider - React Context Provider - Provides the Banner Registration Context to its children.
 *         This allows any NotificationBanner registered beneath it to be displayed in the NotificationBanner's list.
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

  const useNotificationBannerExports = React.useMemo(() => {
    /**
    * Adds the banner ID and props to the collection of registered banners. Once registered,
    * it updates the NotificationBanner's state to render the new Banner.
    *
    * @param {UUID} bannerId - unique ID associated to the banner
    * @param {Object} bannerProps - react props associated to the banner. See ../NotificationBanner's propTypes.
    */
    const registerNotificationBanner = (bannerId, bannerProps) => {
      if (!bannerId) {
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
      if (!bannerId || !bannerVariant) {
        throw new Error('A banner cannot be unregistered without an identifier or banner variant.');
      }

      if (!registeredBanners.current[bannerVariant][bannerId]) {
        return;
      }

      delete registeredBanners.current[bannerVariant][bannerId];

      if (!registeredBanners.current[bannerVariant].length) {
        delete registeredBanners.current[bannerVariant];
      }

      if (updateBannerState.current) {
        updateBannerState.current({ ...registeredBanners.current });
      }
    };

    return {
      /**
       * Provides the Banner Registration Context to its children.
       */
      NotificationBannerProvider: ({ children }) => ( // eslint-disable-line react/prop-types
        <BannerRegistrationContext.Provider value={{ registerNotificationBanner, unregisterNotificationBanner }}>
          {children}
        </BannerRegistrationContext.Provider>
      ),
      /**
       * Renders a list of prioritized notification banners.
       */
      NotificationBanners: ({ label }) => {
        const theme = React.useContext(ThemeContext);
        const intl = React.useContext(ApplicationIntlContext);
        const [banners, setBanners] = React.useState([]);
        const containerRef = React.useRef();

        /**
         * Set the updateBannerState ref to the update state function. This ties the state updates to the `useNotificationBanners` hook,
         * while allowing the NotificationBanners to be rendered above or below the NotificationBannerProvider.
         */
        updateBannerState.current = setBanners;

        const prioritizedBanners = organizeBannersByPriority(banners, theme.name);
        const descriptionStart = `${label} Notifications.`;
        // let bannerCountText;
        // if (prioritizedBanners.length === 0) {
        //   bannerCountText = 'There are no notifications.';
        // } else if (prioritizedBanners.length === 1) {
        //   bannerCountText = 'There is 1 notification.';
        // } else {
        //   bannerCountText = `There are ${prioritizedBanners.length} notifications.`;
        // }

        return (
          <div role="region" aria-label={descriptionStart} tabIndex="-1">
            <ul className={cx('banners-list')} ref={containerRef} tabIndex="-1">
              {prioritizedBanners.map((bannerProps, index) => {
                const {
                  bannerAction, custom, description, key, onRequestClose, variant,
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

                let customIcon;
                let customSignalWord;
                if (alertType === 'custom' && custom !== undefined) {
                  customSignalWord = custom?.signalWord;

                  if (custom.customIconClass) {
                    customIcon = (
                      <svg className={cx(['custom-icon', custom.customIconClass])} />
                    );
                  }
                }

                return (
                  <li
                    aria-label={getTitleStringIdForType(alertType) ? intl.formatMessage({ id: getTitleStringIdForType(alertType) }) : 'Notification'}
                    aria-setsize={prioritizedBanners.length}
                    aria-posinset={index + 1}
                    tabIndex="-1"
                  >
                    <NotificationBannerView
                      key={key}
                      action={actionButton}
                      onDismiss={onRequestClose ? () => {
                        onRequestClose();
                        containerRef.current.focus();
                      } : undefined}
                      type={alertType}
                      customIcon={customIcon}
                      title={customSignalWord}
                      data-terra-application-notification-banner={variant}
                    >
                      {description}
                    </NotificationBannerView>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      },
    };
  }, []);

  return useNotificationBannerExports;
};

export default useNotificationBanners;
