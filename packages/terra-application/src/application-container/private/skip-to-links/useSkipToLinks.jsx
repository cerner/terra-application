import React from 'react';
import classNames from 'classnames/bind';

import { ApplicationIntlContext } from '../../../application-intl';
import {
  dismissTransientPresentations,
} from '../../../utils/transient-presentations';

import SkipToLinksContext from './SkipToLinksContext';

import styles from './SkipToLink.module.scss';

const cx = classNames.bind(styles);

const useSkipToLinks = () => {
  const applicationIntl = React.useContext(ApplicationIntlContext);

  // The registered SkipToLink entries are stored in a ref to limit updates to
  // the hook consumer. Any updates to the rendered links are performed with
  // the updateLinksStateRef.
  const registeredLinksRef = React.useRef({});

  // The hook-created SkipToLinks component assigns a setState callback to
  // this ref. The hook executes this callback when the registered SkipToLink
  // entries change to ensure the proper content is rendered without updating
  // the entire application tree.
  const updateLinksStateRef = React.useRef();

  const useSkipToLinksExport = React.useMemo(() => {
    const registerLink = (key, description, priority, onSelect) => {
      registeredLinksRef.current[key] = {
        key, description, priority, onSelect,
      };

      if (updateLinksStateRef.current) {
        updateLinksStateRef.current({ ...registeredLinksRef.current });
      }
    };

    const unregisterLink = (key) => {
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

        // The setState function is assigned to the hook's ref so that
        // the hook can trigger updates externally.
        //
        // Note: This does mean that only a single instance of the
        // SkipToLinks component can be mounted at any given time.
        updateLinksStateRef.current = setLinks;

        function buildLink(data) {
          return (
            <button
              key={data.key}
              className={cx('skip-to-link')}
              type="button"
              role="link"
              onClick={() => {
                dismissTransientPresentations(() => { data.onSelect(); });
              }}
            >
              {applicationIntl.formatMessage({
                id: 'terraApplication.skipToLink.prefix',
              }, {
                description: data.description,
              })}
            </button>
          );
        }

        const registeredLinks = Object.values(links);
        const mainLinks = [];
        const otherLinks = [];

        registeredLinks.forEach((linkData) => {
          if (linkData.priority === 'main') {
            mainLinks.push(buildLink(linkData));
          } else if (linkData.priority === 'other') {
            otherLinks.push(buildLink(linkData));
          }
        });

        return (
          <div data-testid="skip-to-links">
            {mainLinks}
            {otherLinks}
          </div>
        );
      },
    };
  }, [applicationIntl]);

  return useSkipToLinksExport;
};

export default useSkipToLinks;
