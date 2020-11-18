import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import { actionsPropType } from './propTypes/propTypes';
import TabDataContext from './_TabDataContext';
import TabHeader from './_TabHeader';
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
  const { panelId, tabId, label } = React.useContext(TabDataContext);
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
        <TabHeader actions={actions}>{label}</TabHeader>
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
