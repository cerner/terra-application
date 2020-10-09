import React from 'react';
import PageContainer from '../../../../page-container/PageContainer';
import ChartReviewPage from '../pages/ChartReviewPage';

const propTypes = {};

const ReviewPageContainer = () => (
  <PageContainer enableWorkspace>
    <ChartReviewPage />
  </PageContainer>
);

ReviewPageContainer.propTypes = propTypes;

export default ReviewPageContainer;
