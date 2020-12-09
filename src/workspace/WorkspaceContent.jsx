import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import TabContext from './subcomponents/_TabContext';
import TabHeader from './subcomponents/_TabHeader';
import styles from './WorkspaceContent.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child node content to be displayed within the content region.
   */
  children: PropTypes.node,
  /**
   * Optional toolbar to be displayed outside of the content region.
   */
  toolBar: PropTypes.element,
};

const WorkspaceContent = ({
  children,
  toolBar,
  ...customProps
}) => {
  const { panelId, tabId, label } = React.useContext(TabContext);
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  return (
    <div
      className={cx('panel')}
      role="none"
    >
      <div
        className={cx('panel-header')}
        role="none"
      >
        <TabHeader>{label}</TabHeader>
        {toolBar}
        <NotificationBanners />
      </div>
      <div
        {...customProps}
        role="tabpanel"
        className={cx('panel-content')}
        tabIndex="0"
        id={panelId}
        aria-labelledby={tabId}
        aria-expanded="true"
      >
        <NotificationBannerProvider>
          <ApplicationLoadingOverlayProvider>
            {children}
          </ApplicationLoadingOverlayProvider>
        </NotificationBannerProvider>
      </div>
    </div>
  );
};

WorkspaceContent.propTypes = propTypes;

export default WorkspaceContent;
