import React from 'react';
import ApplicationPageContainer from '../../../../../page-container/ApplicationPageContainer';
import OrderProfilePage from '../pages/OrderProfilePage';

const propTypes = {};

const OrderPageContainer = () => (
  <ApplicationPageContainer>
    <OrderProfilePage />
  </ApplicationPageContainer>
);

OrderPageContainer.propTypes = propTypes;

export default OrderPageContainer;
