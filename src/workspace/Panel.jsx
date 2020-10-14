import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import TabContext from './TabContext';
import TabTitle from './_TabTitle';
import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

// TODO: make common
const itemShape = PropTypes.shape({
  title: PropTypes.string,
  onAction: PropTypes.func,
  icon: PropTypes.element,
  isSelected: PropTypes.bool,
});
const groupShape = PropTypes.shape({
  items: PropTypes.arrayOf(itemShape),
});
const propTypes = {
  children: PropTypes.node,
  toolBar: PropTypes.element,
  actions: PropTypes.arrayOf(PropTypes.oneOfType([itemShape, groupShape])),
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
          <ApplicationErrorBoundary>
            <ApplicationLoadingOverlayProvider>
              {children}
            </ApplicationLoadingOverlayProvider>
          </ApplicationErrorBoundary>
        </NotificationBannerProvider>
      </div>
    </div>
  );
};

Panel.propTypes = propTypes;

export default Panel;
