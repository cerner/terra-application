import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';

import VisuallyHiddenText from 'terra-visually-hidden-text';
import ApplicationPageContext from './ApplicationPageContext';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';

import PageHeader from './_PageHeader';
// import { BreadcrumbsPageHeader as PageHeader } from './_PageHeader';

import styles from './ApplicationPage.module.scss';
import HeaderContainer from '../header-container/_HeaderContainer';

const cx = classNames.bind(styles);

const SuspensePage = ({
  title, onRequestClose,
}) => {
  const pageContext = React.useContext(ApplicationPageContext);
  const [showLoading, setShowLoading] = React.useState(false);
  const mainElementRef = React.useRef();
  const pageIdRef = React.useRef(uuidv4());

  const nodeManager = pageContext?.nodeManager;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  React.useLayoutEffect(() => () => {
    if (nodeManager) {
      nodeManager.releaseNode(pageIdRef.current);
    }
  }, [nodeManager]);

  let portalNode;
  if (nodeManager) {
    portalNode = nodeManager.getNode(pageIdRef.current, pageContext.ancestorPage);
  }

  return (
    ReactDOM.createPortal((
      <main
        // id="application-page-main"
        data-page-overflow-container
        ref={mainElementRef}
        tabIndex="-1"
        role="main"
        className={cx('main-container', 'page-background')}
        aria-labelledby="application-page-title"
      >
        <VisuallyHiddenText
          id="application-page-title"
          aria-hidden
          text={title}
        />
        <ApplicationLoadingOverlayProvider>
          <ApplicationLoadingOverlay isOpen={showLoading} backgroundStyle="light" />
        </ApplicationLoadingOverlayProvider>
      </main>
    ), portalNode)
  );
};

export default SuspensePage;
