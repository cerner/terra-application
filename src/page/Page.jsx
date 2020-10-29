import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import { ApplicationIntlContext } from '../application-intl';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';

import PageContext from './private/PageContext';
import PageHeader from './private/_PageHeader';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string description of the Page to present to the user.
   */
  title: PropTypes.string.isRequired,
  /**
   * An array of objects defining the Page actions to present to the user.
   */
  actions: PropTypes.arrayOf(PropTypes.shape({

  })),
  /**
   * A component to present additional controls to the Page user. The provided component will be rendered
   * below the Page's header.
   */
  toolbar: PropTypes.node,
  /**
   * A function to be executed upon selection of the Page's back button. If not provided, the back button
   * will not be rendered.
   */
  onRequestClose: PropTypes.func,
  /**
   * The components to render within the context of the Page.
   */
  children: PropTypes.node,
  /**
   * When true, the Page will not prompt the user prior to executing `onRequestClose` in the presence of
   * rendered NavigationPrompts. Use this prop to customize NavigationPrompt handling prior to Page closure.
   */
  requestClosePromptIsDisabled: PropTypes.bool,
};

const Page = ({
  title,
  actions,
  menu,
  toolbar,
  onRequestClose,
  children,
  requestClosePromptIsDisabled,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const ancestorPageContext = React.useContext(PageContext);
  const pageIdRef = React.useRef(uuidv4());
  const navigationPromptCheckpointRef = React.useRef();
  const [loadingOverlayIsActive, setLoadingOverlayIsActive] = React.useState(false);
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  const nodeManager = ancestorPageContext?.nodeManager;
  const pageContext = React.useMemo(() => ({ ...ancestorPageContext, ancestorPage: pageIdRef.current }), [ancestorPageContext]);

  React.useLayoutEffect(() => () => {
    if (nodeManager) {
      nodeManager.releaseNode(pageIdRef.current);
    }
  }, [nodeManager]);

  const pageTitleId = `page-title-${pageIdRef.current}`;

  if (!nodeManager) {
    throw new Error(`[Page] ${title} was rendered outside of a PageContainer.`);
  }

  const portalNode = nodeManager.getNode(pageIdRef.current, ancestorPageContext.ancestorPage, pageTitleId);

  if (!portalNode) {
    throw new Error(`[Page] ${title} could not be assigned portal element due to multiple Page renders at the same presentation depth.`);
  }

  function safelyRequestClose() {
    if (requestClosePromptIsDisabled) {
      onRequestClose();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onRequestClose();
    });
  }

  return (
    ReactDOM.createPortal((
      <div className={cx('page')}>
        <div className={cx('header')}>
          <PageHeader
            onBack={onRequestClose && safelyRequestClose}
            title={title}
            actions={actions}
            menu={menu}
            hasLoadingOverlay={loadingOverlayIsActive}
          />
          {toolbar}
          <NotificationBanners />
        </div>
        <div className={cx('content')}>
          <PageContext.Provider value={pageContext}>
            <NavigationPromptCheckpoint ref={navigationPromptCheckpointRef}>
              <NotificationBannerProvider>
                <ApplicationLoadingOverlayProvider onStateChange={(loadingOverlayIsPresented) => { setLoadingOverlayIsActive(loadingOverlayIsPresented); }}>
                  <ApplicationStatusOverlayProvider>
                    <div
                      data-page-overflow-container
                      tabIndex="0"
                      className={cx('overflow-content', 'page-background')}
                    >
                      <div className={cx('width-normalizer')}>
                        <VisuallyHiddenText
                          aria-hidden
                          id={pageTitleId}
                          text={title}
                        />
                        {children}
                      </div>
                    </div>
                  </ApplicationStatusOverlayProvider>
                </ApplicationLoadingOverlayProvider>
              </NotificationBannerProvider>
            </NavigationPromptCheckpoint>
          </PageContext.Provider>
        </div>
      </div>
    ), portalNode)
  );
};

Page.propTypes = propTypes;

export default Page;
