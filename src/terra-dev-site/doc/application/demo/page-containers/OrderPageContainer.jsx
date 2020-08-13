import React from 'react';
import ApplicationPageContainer from '../../../../../application-page/ApplicationPageContainer';
import OrderProfilePage from '../pages/OrderProfilePage';

const propTypes = {};

const OrderPageContainer = () => (
  <ApplicationPageContainer>
    <OrderProfilePage />
  </ApplicationPageContainer>
);

OrderPageContainer.propTypes = propTypes;

export default OrderPageContainer;
