import React from 'react';
import classNames from 'classnames/bind';

import EventEmitter from '../../../utils/event-emitter';

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

        function buildButtonFromLink(link) {
          return (
            <button
              key={link.key}
              type="button"
              role="link"
              onClick={() => {
                EventEmitter.emit('terra-application.dismiss-transient-layers');

                setTimeout(() => { link.callback(); }, 0);
              }}
              className={cx('skip-content-button')}
            >
              {link.description}
            </button>
          );
        }

        const linkObjects = Object.values(links);
        const mainLinks = [];
        const otherLinks = [];
        linkObjects.forEach((link) => {
          if (link.isMain) {
            mainLinks.push(buildButtonFromLink(link));
          } else {
            otherLinks.push(buildButtonFromLink(link));
          }
        });

        return (
          <div>
            {mainLinks}
            {otherLinks}
          </div>
        );
      },
    };
  }, []);

  return useSkipToLinksExports;
};

export default useSkipToLinks;
