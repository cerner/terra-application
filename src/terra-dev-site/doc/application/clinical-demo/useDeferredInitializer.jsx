import { useEffect, useState } from 'react';

const useDeferredInitializer = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  // useEffect(() => {
  //   if (isInitialized) {
  //     return undefined;
  //   }

  //   const timeout = setTimeout(() => {
  //     setIsInitialized(true);
  //   }, window.TEST_APP_TIMEOUT);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [isInitialized]);

  // return isInitialized;

  return true;
};

export default useDeferredInitializer;
