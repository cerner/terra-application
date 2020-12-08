import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import { actionsPropType } from './propTypes/propTypes';
import TabContext from './subcomponents/_TabContext';
import TabHeader from './subcomponents/_TabHeader';
import styles from './WorkspaceContent.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  actions: actionsPropType,
  children: PropTypes.node,
  toolBar: PropTypes.element,
};

const WorkspacePanel = ({
  actions,
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
        <TabHeader actions={actions}>{label}</TabHeader>
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

WorkspacePanel.propTypes = propTypes;

export default WorkspacePanel;
