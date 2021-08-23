import React from 'react';

import {
  OrderItemsContainer,
  OrderItemContainer,
  StyledProductName,
  OrderHeader,
  OrderTitle,
  OrderItemFooter,
} from './order-item.styles';

const OrderItem = ({ order, orderNum }) => {
  const { orderDate, orderItems, receiptUrl, orderTotal } = order;
  return (
    <OrderItemsContainer>
      <OrderTitle>
        <span>Order #{orderNum + 1}</span>
        <span>
          {orderDate.toDate().getUTCMonth() +
            '/' +
            orderDate.toDate().getUTCDate() +
            '/' +
            orderDate.toDate().getFullYear()}
        </span>
      </OrderTitle>
      <OrderHeader>
        <span>Product</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Total</span>
      </OrderHeader>
      {orderItems.map((product, index) => (
        <OrderItemContainer key={index}>
          <StyledProductName>{product.name}</StyledProductName>
          <span>{product.quantity}</span>
          <span>${product.price}</span>
          <span>${product.price * product.quantity}</span>
        </OrderItemContainer>
      ))}
      <OrderItemFooter>
        <a href={receiptUrl}>Receipt</a>
        <span>Order Total: ${orderTotal}</span>
      </OrderItemFooter>
    </OrderItemsContainer>
  );
};

export default OrderItem;
