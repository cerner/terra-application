import React from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';

import BannerRegistrationContext from './private/BannerRegistrationContext';
import { organizeBannersByPriority } from './private/utils';

// const useNotificationBanners = () => {
//   const registeredBanners = React.useRef({});
//   const [banners, setBanners] = React.useState([]);

//   const bannerProviderValue = React.useMemo(() => {
//     const registerNotificationBanner = (bannerId, bannerProps) => {
//       if (process.env.NODE_ENV !== 'production' && !bannerId) {
//         // eslint-disable-next-line no-console
//         console.warn('A banner cannot be registered without an identifier.');
//         return;
//       }

//       const { type } = bannerProps;

//       if (!registeredBanners.current[type]) {
//         registeredBanners.current[type] = {};
//       }

//       registeredBanners.current[type][bannerId] = { key: bannerId, ...bannerProps };

//       setBanners(organizeBannersByPriority(registeredBanners.current));
//     };

//     const unregisterNotificationBanner = (bannerId, bannerType) => {
//       if (process.env.NODE_ENV !== 'production' && (!bannerId || !bannerType)) {
//         // eslint-disable-next-line no-console
//         console.warn('A banner cannot be unregistered without an identifier or banner type.');
//         return;
//       }

//       if (!registeredBanners.current[bannerType][bannerId]) {
//         return;
//       }

//       delete registeredBanners.current[bannerType][bannerId];

//       setBanners(organizeBannersByPriority(registeredBanners.current));
//     };

//     return {
//       registerNotificationBanner,
//       unregisterNotificationBanner,
//     };
//   }, []);

//   const NotificationBannerList = () => {
//     if (!banners.length) {
//       return null;
//     }

//     return (
//       <>
//         {banners.map((bannerProps) => {
//           const {
//             description, type, bannerAction, onRequestDismiss, key,
//           } = bannerProps;

//           let actionButton = null;
//           if (bannerAction) {
//             actionButton = <Button text={bannerAction.text} variant="ghost" onClick={bannerAction.onClick} />;
//           }

//           return (
//             <Alert
//               key={key}
//               action={actionButton}
//               onDismiss={onRequestDismiss}
//               type={type}
//               data-terra-application-notification-banner={type}
//             >
//               {description}
//             </Alert>
//           );
//         })}
//       </>
//     );
//   };

//   return {
//     bannerProviderValue,
//     banners: <NotificationBannerList />,
//   };
// };

/**
 * The Banner Checkpoint manages prioritizing and displaying all Workflow Banners
 * rendered within the Checkpoint Context in a list above all other content in the tree.
 */
const useNotificationBanners = () => {
  const registeredBanners = React.useRef({});
  const [banners, setBanners] = React.useState([]);

  const bannerProviderValue = React.useMemo(() => {
    const registerNotificationBanner = (bannerId, bannerProps) => {
      console.log('registerNotificationBanner', bannerId, bannerProps)

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
      console.log('unregisterNotificationBanner')

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
      <>
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
      </>
    );
  };

  return {
    // BannerProvider: (children) => <BannerRegistrationContext.Provider value={bannerProviderValue}>{children}</BannerRegistrationContext.Provider>,
    bannerProviderValue,
    banners: <NotificationBannerList />,
  };
};

export default useNotificationBanners;
