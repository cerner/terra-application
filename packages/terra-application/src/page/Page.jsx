import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import { UnsavedChangesPromptCheckpoint } from '../unsaved-changes-prompt';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';
import usePagePortal from '../page-container/usePagePortal';

import PageHeader from './PageHeader';
import PageActions from './PageActions';
import PageAction from './PageAction';
import PageToolbar from './PageToolbar';
import PageContext from './PageContext';

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
   * A function to be executed upon a change in Page activation state. A Page is
   * active whenever it is mounted to the DOM. If it not not present on the DOM
   * due to a nested Page disclosure, it is considered inactive.
   */
  onActiveStateChange: PropTypes.func,
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
  onActiveStateChange,
  dangerouslyDisableUnsavedChangesPromptHandling,
  children,
}) => {
  if (actions && actions.type !== PageActions) {
    throw new Error(`[terra-application] Page.Actions must be used to define actions for ${label}.`);
  }

  if (toolbar && toolbar.type !== PageToolbar) {
    throw new Error(`[terra-application] Page.Toolbar must be used to define a toolbar for ${label}.`);
  }

  const theme = React.useContext(ThemeContext);

  // An UnsavedChangesPromptCheckpoint is used to detect unsaved changes within
  // the Page's content.
  const unsavedChangesCheckpointRef = React.useRef();

  // A Provider/Presenter pair is generated to manage NotificationBanner
  // rendering within the Page.
  const {
    NotificationBannerProvider,
    NotificationBanners,
  } = useNotificationBanners();

  // The usePagePortal hook is used to generate the PagePortal component that
  // will render the Page content.
  const { PagePortal, pageId, isActive } = usePagePortal({
    label,
    metaData,
  });

  const pageContextValue = React.useMemo(() => ({
    label,
    metaData,
    isActive,
  }), [label, metaData, isActive]);

  React.useLayoutEffect(() => {
    if (onActiveStateChange) {
      onActiveStateChange(isActive);
    }
  }, [isActive, onActiveStateChange]);

  // If onRequestClose is provided, we check for unsaved changes prior to
  // executing the callback (unless explicitly disabled).
  const handleOnSelectBack = onRequestClose ? () => {
    if (dangerouslyDisableUnsavedChangesPromptHandling) {
      onRequestClose();
      return;
    }

    unsavedChangesCheckpointRef.current.resolvePrompts().then(() => {
      onRequestClose();
    });
  } : undefined;

  const pageClassNames = cx(
    'page',
    theme.className,
  );

  return (
    <PagePortal label={label} isActive={isActive}>
      <PageContext.Provider value={pageContextValue}>
        <div className={pageClassNames}>
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
            <UnsavedChangesPromptCheckpoint ref={unsavedChangesCheckpointRef}>
              <NotificationBannerProvider>
                {children}
              </NotificationBannerProvider>
            </UnsavedChangesPromptCheckpoint>
          </div>
        </div>
      </PageContext.Provider>
    </PagePortal>
  );
};

Page.propTypes = propTypes;
Page.Actions = PageActions;
Page.Action = PageAction;
Page.Toolbar = PageToolbar;

export default Page;
