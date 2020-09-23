import React from 'react';
import classNames from 'classnames/bind';
import SkipToLinksContext from './SkipToLinksContext';

import styles from './SkipToLink.module.scss';

const cx = classNames.bind(styles);

// TODO investigate need for priority registration for skip to links

const useSkipToLinks = () => {
  const registeredLinksRef = React.useRef({});

  const updateLinksStateRef = React.useRef();

  const useSkipToLinksExports = React.useMemo(() => {
    const registerLink = (key, description, isMain, callback) => {
      if (!key) {
        throw new Error('A Skip To Link cannot be registered without an identifier.');
      }

      registeredLinksRef.current[key] = {
        key, description, isMain, callback,
      };

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
      SkipToLinksProvider: ({ children }) => ( // eslint-disable-line react/prop-types
        <SkipToLinksContext.Provider value={providerValue}>
          {children}
        </SkipToLinksContext.Provider>
      ),
      SkipToLinks: () => {
        const [links, setLinks] = React.useState({});

        updateLinksStateRef.current = setLinks;

        const linkObjects = Object.values(links);
        let defaultSkipToMain;
        if (linkObjects.filter(link => link.isMain).length === 0) {
          defaultSkipToMain = (
            <button
              key="terra-application-main-content-skip-to-link"
              type="button"
              role="link"
              onClick={() => {
                document.querySelector('main')?.focus();
              }}
              className={cx('skip-content-button')}
            >
              Skip to Main Content
            </button>
          );
        }

        return (
          <div>
            {defaultSkipToMain}
            {linkObjects.map((link) => (
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
