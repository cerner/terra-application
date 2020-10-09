import React from 'react';
import classNames from 'classnames/bind';

import PagePortalContext from '../private/PagePortalContext';
import PageContainerPortalManager from '../private/_PageContainerPortalManager';
import PageActionsContext from '../PageActionsContext';

import styles from './ModalPageContainer.module.scss';

const cx = classNames.bind(styles);

const ModalPageContainer = ({
  children,
}) => {
  const portalContainerRef = React.useRef();

  const [isInitialized, setIsInitialized] = React.useState();

  const pagePortalContextValue = React.useMemo(() => ({
    nodeManager: new PageContainerPortalManager(portalContainerRef),
    isMain: false,
  }), []);

  React.useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  return (
    <PageActionsContext.Provider value={undefined}>
      <div
        ref={portalContainerRef}
        className={cx('modal-page-container')}
      >
        <PagePortalContext.Provider value={pagePortalContextValue}>
          {isInitialized && children}
        </PagePortalContext.Provider>
      </div>
    </PageActionsContext.Provider>
  );
};

export default ModalPageContainer;
