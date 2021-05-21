import React from 'react';
import { NavigationItemContext } from '@cerner/terra-application/lib/navigation-item';
import IconStartPresenting from 'terra-icon/lib/icon/IconStartPresenting';
import { useLocation, useHistory } from 'react-router-dom';
import Page from '@cerner/terra-application/lib/page';

import {
  CardLayout,
  Card,
  PageActivityOverlay,
  StatusLayout,
} from '../terra-application-temporary/page';

import Suspense from '../terra-application-temporary/shared/Suspense';

import { contentImportsShape, pageContentConfigShape } from '../site/siteConfigShapes';
import ContentLoadedContainer from '../content/_ContentLoaded';
import NotFoundPage from './_NotFoundPage';

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

const DevSitePage = ({ pageContentConfig, contentImports }) => {
  const location = useLocation();
  const history = useHistory();
  const { isActive } = React.useContext(NavigationItemContext);
  const [isLoadingComponent, setIsLoadingComponent] = React.useState();
  const [loadingFailed, setLoadingFailed] = React.useState();

  if (!isActive) {
    return null;
  }

  if (!pageContentConfig) {
    return NotFoundPage;
  }

  const { pathname } = location;
  const ContentComponent = contentImports[pathname];
  const pageActions = (
    <Page.Actions>
      <Page.Action
        actionKey="raw"
        label="Raw"
        icon={<IconStartPresenting />}
        onSelect={() => { history.push(`/raw${pathname}`); }}
      />
    </Page.Actions>
  );

  let loadingOverlay;
  if (isLoadingComponent) {
    loadingOverlay = (
      <PageActivityOverlay variant="loading" />
    );
  }

  let statusOverlay;
  if (loadingFailed) {
    statusOverlay = (
      <ContentLoadedContainer type={pageContentConfig.type}>
        <StatusLayout
          message="Chunk failed to load."
          variant="error"
          buttonAttrs={[
            {
              key: 'go back',
              text: 'Go Back',
              onClick: () => { history.goBack(); },
            },
            {
              key: 'home',
              text: 'Home',
              onClick: () => { history.replace('/'); },
            },
          ]}
        />
      </ContentLoadedContainer>
    );
  }

  return (
    <Page
      label={pageContentConfig.label}
      pageKey={pathname}
      actions={pageActions}
      activityOverlay={loadingOverlay}
      statusOverlay={statusOverlay}
    >
      <Suspense
        onLoadStart={() => { setIsLoadingComponent(true); }}
        onLoadEnd={() => { setIsLoadingComponent(false); }}
        onError={() => { setLoadingFailed(true); setIsLoadingComponent(false); }}
      >
        <CardLayout>
          <Card minHeightFill>
            <ContentLoadedContainer type={pageContentConfig.type}>
              <ContentComponent />
            </ContentLoadedContainer>
          </Card>
        </CardLayout>
      </Suspense>
    </Page>
  );
};

DevSitePage.propTypes = propTypes;

export default DevSitePage;
