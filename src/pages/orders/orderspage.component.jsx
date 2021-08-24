import React from 'react';

import OrderItem from '../../components/order-item/order-item.component';
import { OrderPageContainer } from './orderspage.styles';
import { StyledH1 } from '../../generalstyles';
import Spinner from '../../components/spinner/spinner.component';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectOrderItems,
  isOrdersFetching,
} from '../../redux/orders/orders.selector';
import { withRouter } from 'react-router-dom';

const OrdersPage = ({ orderData, isFetching }) => {
  return isFetching ? (
    <Spinner />
  ) : (
    <OrderPageContainer>
      <StyledH1>Orders</StyledH1>
      {orderData.orders.map((order, index) => (
        <OrderItem key={index} order={order} orderNum={index} />
      ))}
    </OrderPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  orderData: selectOrderItems,
  isFetching: isOrdersFetching,
});

export default withRouter(connect(mapStateToProps)(OrdersPage));
