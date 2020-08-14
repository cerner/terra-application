import React from 'react';
import ApplicationPageContainer from '../../../../../page-container/ApplicationPageContainer';
import ChartReviewPage from '../pages/ChartReviewPage';

const propTypes = {};

const ReviewPageContainer = () => (
  <ApplicationPageContainer enableWorkspace>
    <ChartReviewPage />
  </ApplicationPageContainer>
);

ReviewPageContainer.propTypes = propTypes;

export default ReviewPageContainer;
