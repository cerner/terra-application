import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import useNotificationBanners from '../notification-banner/private/useNotificationBanners';
import DynamicOverlayContainer from '../shared/DynamicOverlayContainer';

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
  statusOverlay: PropTypes.element,
  activityOverlay: PropTypes.element,
};

const WorkspaceContent = ({
  children,
  toolBar,
  statusOverlay,
  activityOverlay,
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
      <div role="none" className={cx('panel-content')}>
        <DynamicOverlayContainer overlays={overlays}>
          <div
            {...customProps}
            className={cx('panel-overflow')}
            role="tabpanel"
            tabIndex="0"
            id={panelId}
            aria-labelledby={tabId}
            data-application-overflow-container
          >
            <NotificationBannerProvider>
              {children}
            </NotificationBannerProvider>
          </div>
        </DynamicOverlayContainer>
      </div>
    </div>
  );
};

WorkspaceContent.propTypes = propTypes;

export default WorkspaceContent;
