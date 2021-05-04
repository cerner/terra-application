import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

import PagePortalContext from './PagePortalContext';
import PageIdentifierContext from './PageIdentifierContext';

function createPortalElement() {
  const newPortalElement = document.createElement('div');
  newPortalElement.style.position = 'relative';
  newPortalElement.style.height = '100%';
  newPortalElement.style.width = '100%';

  return newPortalElement;
}

const usePagePortal = ({
  pageKey, label, metaData,
}) => {
  const portalIdRef = React.useRef(uuidv4());
  const pagePortalContext = React.useContext(PagePortalContext);
  const parentPageIdentifer = React.useContext(PageIdentifierContext);
  const portalElementRef = React.useRef(createPortalElement());

  React.useLayoutEffect(() => {
    pagePortalContext.renderPortalElement(portalElementRef.current, portalIdRef.current, parentPageIdentifer, {
      pageKey, label, metaData,
    });
  }, [pagePortalContext, parentPageIdentifer, pageKey, label, metaData]);

  React.useLayoutEffect(() => () => {
    pagePortalContext.releasePortalElement(portalIdRef.current);
  }, [pagePortalContext]);

  const pagePortalComponentRef = React.useRef(({ children }) => (
    ReactDOM.createPortal((
      <PageIdentifierContext.Provider value={portalIdRef.current}>
        {children}
      </PageIdentifierContext.Provider>
    ), portalElementRef.current)
  ));

  return {
    portalId: portalIdRef.current,
    PagePortal: pagePortalComponentRef.current,
  };
};

export default usePagePortal;
