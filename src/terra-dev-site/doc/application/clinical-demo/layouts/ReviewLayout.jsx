import React from 'react';
import PageLayoutContainer from 'terra-application/lib/application-page/PageLayoutContainer';
import ChartReviewPage from '../pages/ChartReviewPage';

const propTypes = {};

const ReviewLayout = () => (
  <PageLayoutContainer>
    <ChartReviewPage />
  </PageLayoutContainer>
);

ReviewLayout.propTypes = propTypes;

export default ReviewLayout;
