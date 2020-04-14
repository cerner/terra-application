import { useState, useEffect } from 'react';

const APPLICATION_BASE_OVERRIDE_EVENT = 'applicationBase.testOverride';

/**
 * Custom React hook that overrides locale via events. Leveraged by full stack testing to control deployed applications.
 * @returns {Object} Contains the locale to override with.
 */
const useTestOverrides = () => {
  const [localeOverride, setLocaleOverride] = useState();

  const handleTestOverrides = (event) => {
    if (!event || !event.metaData) {
      return;
    }

    const { metaData } = event;
    if (typeof metaData.locale !== 'undefined') {
      setLocaleOverride(metaData.locale);
    }
  };

  useEffect(() => {
    window.addEventListener(APPLICATION_BASE_OVERRIDE_EVENT, handleTestOverrides);
    return () => {
      window.removeEventListener(APPLICATION_BASE_OVERRIDE_EVENT, handleTestOverrides);
    };
  }, []); // Empty array ensures we setup and teardown event listener once.

  return { localeOverride };
};

export default useTestOverrides;
