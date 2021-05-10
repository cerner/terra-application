import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

import PageManagerContext from './PageManagerContext';
import PageIdentifierContext from './PageIdentifierContext';

/**
 * Creates an element with appropriate styling to be used as the destination
 * for portaled Page content.
 * @returns An HTMLElement instance
 */
function createPortalElement() {
  const newPortalElement = document.createElement('div');
  newPortalElement.style.position = 'relative';
  newPortalElement.style.height = '100%';
  newPortalElement.style.width = '100%';

  return newPortalElement;
}

/**
 * Custom hook used to register a Page to a parent PageContainer.
 * @param {Object} pageData The page data to register
 * @param {String} pageData.label The user-facing label for the Page
 * @param {Object} pageData.metaData An object containing meta data for the Page
 * @returns An object containing a unique PagePortal component and the generated
 * identifier for the Page instance.
 */
const usePagePortal = ({
  label, metaData,
}) => {
  const pageManager = React.useContext(PageManagerContext);
  const parentPageId = React.useContext(PageIdentifierContext);
  const pageIdRef = React.useRef(uuidv4());
  const portalElementRef = React.useRef(createPortalElement());
  const unregisterPageRef = React.useRef();

  React.useLayoutEffect(() => {
    unregisterPageRef.current = pageManager.registerPage({
      portalElement: portalElementRef.current,
      pageId: pageIdRef.current,
      parentPageId,
      label,
      metaData,
    });
  }, [pageManager, parentPageId, label, metaData]);

  React.useLayoutEffect(() => () => {
    if (unregisterPageRef.current) {
      unregisterPageRef.current();
    }
  }, []);

  const pagePortalComponentRef = React.useRef(({ children }) => (
    ReactDOM.createPortal((
      <PageIdentifierContext.Provider value={pageIdRef.current}>
        {children}
      </PageIdentifierContext.Provider>
    ), portalElementRef.current)
  ));

  return {
    pageId: pageIdRef.current,
    PagePortal: pagePortalComponentRef.current,
  };
};

export default usePagePortal;
