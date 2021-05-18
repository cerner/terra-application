import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { UnsavedChangesPromptCheckpoint } from '../unsaved-changes-prompt';
import useNotificationBanners from '@cerner/terra-application/lib/notification-banner/private/useNotificationBanners';
import { DynamicHeadingProvider } from '../shared/DynamicHeadingContext';

import PageContainerContext from '@cerner/terra-application/lib/page-container/PageContainerContext';
import PageHeader from './private/_PageHeader';
import DynamicOverlayContainer from '../shared/DynamicOverlayContainer';
import PageActions from './PageActions';

import usePagePortal from '@cerner/terra-application/lib/page-container/usePagePortal';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The unique string identifying the Page instance. This identifier must be unique among Pages within the same
   * PageContainer. The pageKey will be accessible by components who are notified of Page presentation changes.
   */
  pageKey: PropTypes.string.isRequired,
  /**
   * The string description of the Page to present to the user. This value is also used to build description
   * text for screen readers and accessibility tools.
   */
  label: PropTypes.string.isRequired,
  /**
   * An object containing generic data describing the content of the Page. The metaData will be accessible
   * by components who are notified of Page presentation changes.
   */
  metaData: PropTypes.object,
  /**
   * A PageActions instance defining the Actions to present within the Page's header. Only the PageActions
   * component can be provided.
   */
  actions: PropTypes.element,
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
   *
   */
  activityOverlay: PropTypes.element,
  /**
   *
   */
  statusOverlay: PropTypes.element,
  /**
   * When true, the Page will not prompt the user prior to executing `onRequestClose` in the presence of
   * rendered UnsavedChangesPrompts. Use this prop to customize UnsavedChangesPrompt handling prior to Page closure.
   */
  dangerouslyDisableUnsavedChangesPromptHandling: PropTypes.bool,
  /**
   * The components to render within the context of the Page.
   */
  children: PropTypes.node,
};

const Page = ({
  pageKey,
  label,
  metaData,
  actions,
  toolbar,
  onRequestClose,
  statusOverlay,
  activityOverlay,
  dangerouslyDisableUnsavedChangesPromptHandling,
  children,
}) => {
  if (actions && actions.type !== PageActions) {
    throw new Error(`[terra-application] Page ${label} provided with invalid actions prop. Only PageActions is supported.`);
  }

  // The PageContainerContext value is provided by a parent PageContainer to provide information
  // about the container (actions for the PageHeader to render, placement in the application, etc.)
  const pageContainerContext = React.useContext(PageContainerContext);

  // An UnsavedChangesPromptCheckpoint is used to detect unsaved changes within the Page's content.
  const unsavedChangesCheckpointRef = React.useRef();

  // A Provider/Presenter pair is generated for NotificationBanner presentation within in the Page to
  // limit updates to Page content due to banner presentation.
  const { NotificationBannerProvider, NotificationBanners: NotificationBannerPresenter } = useNotificationBanners();

  // The usePagePortal hook is used to generate the PagePortal component that will render the Page content.
  // This component will be consistent between renders, so there is no potential for remounting of Page content or state loss.
  // The hook also orchestrates the presentation of the Page within the PageContainer.
  const { PagePortal, portalId } = usePagePortal({
    pageKey,
    label,
    metaData,
  });

  if (!pageContainerContext) {
    throw new Error(`[terra-application] Page ${label} was rendered outside of a PageContainer.`);
  }

  function safelyRequestClose() {
    if (dangerouslyDisableUnsavedChangesPromptHandling) {
      onRequestClose();
      return;
    }

    unsavedChangesCheckpointRef.current.resolvePrompts().then(() => {
      onRequestClose();
    });
  }

  const overlays = React.useMemo(() => {
    const overlaysToRender = [];

    if (statusOverlay) {
      overlaysToRender.push({
        key: 'status-overlay',
        component: statusOverlay,
      });
    }

    if (activityOverlay) {
      overlaysToRender.push({
        key: 'activity-overlay',
        component: activityOverlay,
      });
    }

    return overlaysToRender;
  }, [statusOverlay, activityOverlay]);

  return (
    <DynamicHeadingProvider isRoot>
      <PagePortal>
        <div className={cx('page')}>
          <div className={cx('header')}>
            <PageHeader
              id={portalId}
              onBack={onRequestClose && safelyRequestClose}
              label={label}
              actions={actions}
              toolbar={toolbar}
              NotificationBanners={NotificationBannerPresenter}
            />
          </div>
          <div className={cx('content')}>
            <DynamicHeadingProvider>
              <DynamicOverlayContainer
                overlays={overlays}
              >
                <UnsavedChangesPromptCheckpoint ref={unsavedChangesCheckpointRef}>
                  <NotificationBannerProvider>
                    {children}
                  </NotificationBannerProvider>
                </UnsavedChangesPromptCheckpoint>
              </DynamicOverlayContainer>
            </DynamicHeadingProvider>
          </div>
        </div>
      </PagePortal>
    </DynamicHeadingProvider>
  );
};

Page.propTypes = propTypes;

export default Page;
