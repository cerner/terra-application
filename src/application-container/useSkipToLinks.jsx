import React from 'react';
import classNames from 'classnames/bind';
import SkipToLinksContext from './SkipToLinksContext';

import styles from './SkipToLink.module.scss';

const cx = classNames.bind(styles);

// TODO investigate need for priority registration for skip to links

const useSkipToLinks = () => {
  /** The registeredBanners ref maintains collection of banner ids and banner props registered to the  NotificationBannerProvider. */
  const registeredLinksRef = React.useRef({});

  const updateLinksStateRef = React.useRef();

  const useSkipToLinksExports = React.useMemo(() => {
    const registerLink = (key, description, callback) => {
      if (!key) {
        throw new Error('A Skip To Link cannot be registered without an identifier.');
      }

      registeredLinksRef.current[key] = { key, description, callback };

      if (updateLinksStateRef.current) {
        updateLinksStateRef.current({ ...registeredLinksRef.current });
      }
    };

    const unregisterLink = (key) => {
      if (!key) {
        throw new Error('A Skip To Link cannot be unregistered without an identifier.');
      }

      if (!registeredLinksRef.current[key]) {
        return;
      }

      delete registeredLinksRef.current[key];

      if (updateLinksStateRef) {
        updateLinksStateRef.current({ ...registeredLinksRef.current });
      }
    };

    const providerValue = { registerLink, unregisterLink };

    return {
      /**
       * Provides the Banner Registration Context to its children.
       */
      SkipToLinksProvider: ({ children }) => ( // eslint-disable-line react/prop-types
        <SkipToLinksContext.Provider value={providerValue}>
          {children}
        </SkipToLinksContext.Provider>
      ),
      /**
       * Renders a list of prioritized notification banners.
       */
      SkipToLinks: () => {
        const [links, setLinks] = React.useState({});

        /**
         * Set the updateBannerState ref to the update state function. This ties the state updates to the `useNotificationBanners` hook,
         * while allowing the NotificationBanners to be rendered above or below the NotificationBannerProvider.
         */
        updateLinksStateRef.current = setLinks;

        if (!Object.keys(links).length) {
          return null;
        }

        return (
          <div>
            {Object.values(links).map((link) => (
              <button
                key={link.key}
                type="button"
                role="link"
                onClick={link.callback}
                className={cx('skip-content-button')}
              >
                {link.description}
              </button>
            ))}
          </div>
        );
      },
    };
  }, []);

  return useSkipToLinksExports;
};

export default useSkipToLinks;
