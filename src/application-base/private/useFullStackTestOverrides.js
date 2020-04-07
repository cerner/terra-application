import { useState, useEffect } from 'react';

const FULL_STACK_OVERRIDE_EVENT = '[full-stack]override';

/**
 * Custom React hook that overrides locale via events. Leveraged by full stack testing to control deployed applications.
 * @returns {Object} Contains the locale to override with.
 */
const useFullStackTestOverrides = () => {
  const [localeOverride, setLocaleOverride] = useState();

  const handleFullStackTestOverrides = (event) => {
    if (!event || !event.detail) {
      return;
    }

    const { detail } = event;
    const { locale } = detail;
    if (typeof locale !== 'undefined') {
      setLocaleOverride(locale);
    }
  };

  useEffect(() => {
    window.addEventListener(FULL_STACK_OVERRIDE_EVENT, handleFullStackTestOverrides);
    return () => {
      window.removeEventListener(FULL_STACK_OVERRIDE_EVENT, handleFullStackTestOverrides);
    };
  }, []); // Empty array ensures we setup and teardown event listener once.

  return { localeOverride };
};

export default useFullStackTestOverrides;
