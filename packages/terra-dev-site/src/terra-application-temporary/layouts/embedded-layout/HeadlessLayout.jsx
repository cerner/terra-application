import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ApplicationConceptContext } from '@cerner/terra-application/lib/application-container';
import { MainPageContainer } from '@cerner/terra-application/lib/page-container';

import styles from './HeadlessLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  renderPage: PropTypes.func,
  renderLayout: PropTypes.func,
};

const HeadlessLayout = ({
  children, renderPage, renderLayout,
}) => {
  const conceptBannerContext = React.useContext(ApplicationConceptContext);

  let content;
  if (renderPage) {
    content = (
      <MainPageContainer>
        {renderPage()}
      </MainPageContainer>
    );
  } else if (renderLayout) {
    content = renderLayout();
  } else {
    content = children;
  }

  return (
    <div className={cx('embedded-layout')}>
      <div className={cx('concept-banner-container')}>
        {conceptBannerContext?.layoutBanner}
      </div>
      <div className={cx('content-container')}>
        {content}
      </div>
    </div>
  );
};

HeadlessLayout.propTypes = propTypes;

export default HeadlessLayout;
