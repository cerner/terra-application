import React from 'react';
import ApplicationPageContext from './ApplicationPageContext';

const usePageLayout = () => {

};

const usePageLayoutActions = (actionMap) => {
  const pageContext = React.useContext(ApplicationPageContext);

  React.useEffect(() => {
    Object.keys(actionMap).forEach((actionKey) => {
      pageContext.registerActionHandler(actionKey, actionMap[actionKey]);
    });

    return () => {
      Object.keys(actionMap).forEach((actionKey) => {
        pageContext.removeActionHandler(actionKey, actionMap[actionKey]);
      });
    };
  }, [actionMap, pageContext]);

  return undefined;
};

export { usePageLayoutActions };
