import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationConceptBannerContext from '../../application-container/private/ApplicationConceptBannerContext';
import MainPageContainer from '../../page/container/MainPageContainer';

import styles from './HeadlessLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  renderPage: PropTypes.func,
};

const HeadlessLayout = ({
  children, renderPage,
}) => {
  const conceptBannerContext = React.useContext(ApplicationConceptBannerContext);

  return (
    <div className={cx('embedded-layout')}>
      <div className={cx('concept-banner-container')}>
        {conceptBannerContext?.layoutBanner}
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
