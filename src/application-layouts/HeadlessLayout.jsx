import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationConceptContext from '../application-container/private/ApplicationConceptContext';
// import PageContainer from '../application-page/container/PageContainer';
import MainPageContainer from '../application-page/container/MainPageContainer';

import styles from './HeadlessLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  renderPage: PropTypes.func,
};

const HeadlessLayout = ({
  children, renderPage,
}) => {
  const conceptContext = React.useContext(ApplicationConceptContext);

  return (
    <div className={cx('embedded-layout')}>
      <div className={cx('concept-banner-container')}>
        {conceptContext?.layoutBanner}
      </div>
      <div className={cx('content-container')}>
        {renderPage ? (
          <MainPageContainer>
            {renderPage()}
          </MainPageContainer>
        ) : children}
      </div>
    </div>
  );
};

HeadlessLayout.propTypes = propTypes;

export default HeadlessLayout;
