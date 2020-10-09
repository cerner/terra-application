import React from 'react';
import PageContainer from '../../../../page-container/PageContainer';
import OrderProfilePage from '../pages/OrderProfilePage';

const propTypes = {};

const OrderPageContainer = () => (
  <PageContainer>
    <OrderProfilePage />
  </PageContainer>
);

OrderPageContainer.propTypes = propTypes;

export default OrderPageContainer;
