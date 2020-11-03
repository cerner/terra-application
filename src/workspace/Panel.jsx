import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import { actionsPropType } from './propTypes/propTypes';
import TabContext from './TabContext';
import TabTitle from './_TabTitle';
import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  actions: actionsPropType,
  children: PropTypes.node,
  toolBar: PropTypes.element,
};

const Panel = ({
  actions,
  children,
  toolBar,
  ...customProps
}) => {
  const { panelId, tabId, title } = React.useContext(TabContext);
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  return (
    <div
      className={cx('page')}
      role="none"
    >
      <div
        className={cx('page-header')}
        role="none"
      >
        <TabTitle actions={actions}>{title}</TabTitle>
        <NotificationBanners />
        {toolBar}
      </div>
      <div
        {...customProps}
        role="tabpanel"
        className={cx('panel')}
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

Panel.propTypes = propTypes;

export default Panel;
