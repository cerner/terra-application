import React from 'react';
import { useLocation } from 'react-router-dom';
// import MainContainer from '@cerner/terra-application/lib/main-container';
import ModalManager from 'terra-application/lib/modal-manager';
import classNamesBind from 'classnames/bind';
import ContentLoadedContainer from '../content/_ContentLoaded';
// import HeadlessLayout from '../terra-application-temporary/layouts/embedded-layout/HeadlessLayout';
import Suspense from '../terra-application-temporary/shared/Suspense';

import siteConfigShape from '../site/siteConfigShapes';

import styles from './ContentLayout.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The site config for the application
   */
  siteConfig: siteConfigShape.isRequired,
};

const Raw = ({ siteConfig }) => {
  const location = useLocation();
  const pathname = location.pathname.substring(4);
  const pageContentConfig = siteConfig.pageConfig[pathname];
  const ContentComponent = siteConfig.contentImports[pathname];
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
    // <HeadlessLayout
      // renderLayout={() => (
        // <MainContainer className={cx('main')}>
    <ModalManager>
      <div role="main" className={cx('main')}>
        <Suspense
          fallback={<div>loading</div>}
          onError={() => setLoadingFailed(true)}
        >
          <ContentLoadedContainer type={pageContentConfig.type} isScrollContainer>
            <ContentComponent />
          </ContentLoadedContainer>
        </Suspense>
      </div>
    </ModalManager>
    //     </MainContainer>
    //   )}
    // />
  );
};

Raw.propTypes = propTypes;

export default Raw;
