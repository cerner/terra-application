import React from 'react';
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

const usePagePortal = ({ onActivate }) => {
  const portalIdRef = React.useRef(uuidv4());
  const pagePortal = React.useContext(PagePortalContext);
  const parentPageIdentifer = React.useContext(PageIdentifierContext);
  const portalElementRef = React.useRef(createPortalElement());

  React.useLayoutEffect(() => {
    pagePortal.renderPortalElement(portalElementRef.current, portalIdRef.current, parentPageIdentifer, onActivate);
  }, [pagePortal, parentPageIdentifer, onActivate]);

  React.useLayoutEffect(() => () => {
    pagePortal.releasePortalElement(portalIdRef.current);
  }, [pagePortal]);

  return {
    portalId: portalIdRef.current,
    portalElement: portalElementRef.current,
  };
};

export default usePagePortal;
