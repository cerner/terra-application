import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';
import usePagePortal from '../page-container/usePagePortal';
import { ApplicationIntlContext } from '../application-intl';

import PageHeader from './PageHeader';
import PageActions from './PageActions';
import PageAction from './PageAction';
import PageToolbar from './PageToolbar';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string description of the Page to present to the user. This value is
   * also used to build description text for screen readers and accessibility
   * tools.
   */
  label: PropTypes.string.isRequired,
  /**
   * An object containing generic data describing the content of the Page.
   * The metaData will be accessible by components who are notified of Page
   * presentation changes.
   */
  metaData: PropTypes.object,
  /**
   * A PageActions instance defining the Actions to present within the Page's
   * header. Only the PageActions component is supported.
   */
  actions: PropTypes.element,
  /**
   * A component to present additional controls to the Page user. The provided
   * component will be rendered below the Page's header.
   */
  toolbar: PropTypes.node,
  /**
   * A function to be executed upon selection of the Page's back button. If not
   * provided, the back button will not be rendered.
   */
  onRequestClose: PropTypes.func,
  /**
   * When true, the Page will not prompt the user prior to executing
   * `onRequestClose` in the presence of rendered UnsavedChangesPrompts.
   * Use this prop to customize UnsavedChangesPrompt handling prior to Page
   * closure.
   */
  dangerouslyDisableUnsavedChangesPromptHandling: PropTypes.bool,
  /**
   * The components to render within the Page.
   */
  children: PropTypes.node,
};

const Page = ({
  label,
  metaData,
  actions,
  toolbar,
  onRequestClose,
  dangerouslyDisableUnsavedChangesPromptHandling,
  children,
}) => {
  const intl = React.useContext(ApplicationIntlContext);

  if (actions && actions.type !== PageActions) {
    throw new Error(`[terra-application] Page.Actions must be used to define actions for ${label}.`);
  }

  if (toolbar && toolbar.type !== PageToolbar) {
    throw new Error(`[terra-application] Page.Toolbar must be used to define a toolbar for ${label}.`);
  }

  // An NavigationPromptCheckpoint is used to detect unsaved changes within
  // the Page's content.
  const checkpointRef = React.useRef();

  // A Provider/Presenter pair is generated to manage NotificationBanner
  // rendering within the Page.
  const {
    NotificationBannerProvider,
    NotificationBanners,
  } = useNotificationBanners();

  // The usePagePortal hook is used to generate the PagePortal component that
  // will render the Page content.
  const { PagePortal, pageId } = usePagePortal({
    label,
    metaData,
  });

  // If onRequestClose is provided, we check for unsaved changes prior to
  // executing the callback (unless explicitly disabled).
  const handleOnSelectBack = onRequestClose ? () => {
    if (dangerouslyDisableUnsavedChangesPromptHandling) {
      onRequestClose();
      return;
    }

    checkpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(intl)).then(() => {
      onRequestClose();
    });
  } : undefined;

  return (
    <PagePortal>
      <div className={cx('page')}>
        <div className={cx('header')}>
          <PageHeader
            id={pageId}
            onSelectBack={handleOnSelectBack}
            label={label}
            actions={actions}
            toolbar={toolbar}
            NotificationBanners={NotificationBanners}
          />
        </div>
        <div className={cx('content')}>
          <NavigationPromptCheckpoint ref={checkpointRef}>
            <NotificationBannerProvider>
              {children}
            </NotificationBannerProvider>
          </NavigationPromptCheckpoint>
        </div>
      </div>
    </PagePortal>
  );
};

Page.propTypes = propTypes;
Page.Actions = PageActions;
Page.Action = PageAction;
Page.Toolbar = PageToolbar;

export default Page;
