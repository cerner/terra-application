import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary';
import TabContext from './TabContext';
import TabTitle from './_TabTitle';
import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  toolBar: PropTypes.element,
  actions: PropTypes.array,
};

const Panel = ({
  actions,
  children,
  toolBar,
  ...customProps
}) => {
  const { panelId, tabId, title } = React.useContext(TabContext);

  return (
    <div
      className={cx('page')}
      role="none"
    >
      {/* <ApplicationErrorBoundary> */}
        <div
          className={cx('page-header')}
          role="none"
        >
          <TabTitle actions={actions}>{title}</TabTitle>
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
          {children}
        </div>
      {/* </ApplicationErrorBoundary> */}
    </div>
  );
};

Panel.propTypes = propTypes;

export default Panel;
