import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import DynamicOverlayContainer from './shared/DynamicOverlayContainer';
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
  toolbar: PropTypes.element,
  /**
   * A WorkspaceContentStatusOverlay component instance to be rendered on top of the provided children.
   */
  statusOverlay: PropTypes.element,
  /**
   * A WorkspaceContentActivityOverlay component instance to be rendered on top of the provided children.
   */
  activityOverlay: PropTypes.element,
};

const WorkspaceContent = ({
  children,
  toolbar,
  statusOverlay,
  activityOverlay,
}) => {
  const theme = React.useContext(ThemeContext);
  const { panelId, tabId, label } = React.useContext(TabContext);
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

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
      className={cx('panel', theme.className)}
      role="none"
    >
      <div
        className={cx('panel-header')}
        role="none"
        data-testid="workspace-content-heading"
      >
        <TabHeader title={label} />
        <div className={cx('rounded')}>
          {toolbar}
        </div>
        <div className={cx('rounded')}>
          <NotificationBanners />
        </div>
      </div>
      <div role="none" className={cx('panel-content')}>
        <DynamicOverlayContainer overlays={overlays}>
          <div
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
