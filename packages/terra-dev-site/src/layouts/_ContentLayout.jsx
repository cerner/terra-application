import React from 'react';
import { useLocation } from 'react-router-dom';
import Suspense from '../terra-application-temporary/shared/Suspense';
import ContentLoadedContainer from '../content/_ContentLoaded';
import { contentImportsShape, pageContentConfigShape } from '../site/siteConfigShapes';

const propTypes = {
  /**
   * Config describing the page
   */
  pageContentConfig: pageContentConfigShape.isRequired,

  /**
   * Function called to request closing the modal
   */
  contentImports: contentImportsShape.isRequired,
};

const ContentLayout = ({ pageContentConfig, contentImports }) => {
  const location = useLocation();
  const { pathname } = location;
  const ContentComponent = contentImports[pathname];
  const [loadingFailed, setLoadingFailed] = React.useState();

  if (!pageContentConfig) {
    return <div>404</div>;
  }

  if (loadingFailed) {
    return (
      <ContentLoadedContainer type={pageContentConfig.type} isScrollContainer>
        <div>Error: chunk failed to load.</div>
      </ContentLoadedContainer>
    );
  }

  return (
    <Suspense
      // TODO add a loading spinner?
      onError={() => setLoadingFailed(true)}
    >
      <ContentLoadedContainer type={pageContentConfig.type} isScrollContainer>
        <ContentComponent />
      </ContentLoadedContainer>
    </Suspense>
  );
};

ContentLayout.propTypes = propTypes;

export default ContentLayout;
