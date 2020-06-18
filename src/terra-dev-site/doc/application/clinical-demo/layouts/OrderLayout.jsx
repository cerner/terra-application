import React from 'react';
import PageLayoutContainer from 'terra-application/lib/application-page/PageLayoutContainer';
import OrderProfilePage from '../pages/OrderProfilePage';

const propTypes = {};

const OrderLayout = () => (
  <PageLayoutContainer>
    <OrderProfilePage />
  </PageLayoutContainer>
);

OrderLayout.propTypes = propTypes;

export default OrderLayout;
