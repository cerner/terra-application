import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import TabContext from './subcomponents/_TabContext';
import TabHeader from './subcomponents/_TabHeader';
import styles from './WorkspaceContent.module.scss';

const cx = classNamesBind.bind(styles);

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
  const theme = React.useContext(ThemeContext);
  const { panelId, tabId, label } = React.useContext(TabContext);
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  const contentClassNames = classNames(
    cx(
      'panel',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <div
      className={contentClassNames}
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
