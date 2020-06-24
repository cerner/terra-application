import React from 'react';
import ApplicationPageContainer from 'terra-application/lib/application-page/ApplicationPageContainer';
import OrderProfilePage from '../pages/OrderProfilePage';

const propTypes = {};

const OrderPageContainer = () => (
  <ApplicationPageContainer>
    <OrderProfilePage />
  </ApplicationPageContainer>
);

OrderPageContainer.propTypes = propTypes;

export default OrderPageContainer;
