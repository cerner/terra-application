import React from 'react';
import classNames from 'classnames/bind';

import PagePortalContext from '../private/PagePortalContext';
import PageContainerPortalManager from '../private/_PageContainerPortalManager';

import MainContainer from './MainContainer';

import styles from './MainPageContainer.module.scss';

const cx = classNames.bind(styles);

function onPageStackChange() {
  /**
   * Focus is reset to application root if Pages within the MainPageContainer are pushed or
   * popped off the Page stack.
   */
  setTimeout(() => {
    document.body.focus();
  }, []);
}

const MainPageContainer = ({
  children,
}) => {
  const portalContainerRef = React.useRef();

  const [isInitialized, setIsInitialized] = React.useState();

  const pagePortalContextValue = React.useMemo(() => ({
    nodeManager: new PageContainerPortalManager(portalContainerRef, onPageStackChange),
    isMain: true,
  }), []);

  React.useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  return (
    <MainContainer
      refCallback={(ref) => { portalContainerRef.current = ref; }}
      className={cx('main-container')}
    >
      <PagePortalContext.Provider value={pagePortalContextValue}>
        {isInitialized && children}
      </PagePortalContext.Provider>
    </MainContainer>
  );
};

export default MainPageContainer;
