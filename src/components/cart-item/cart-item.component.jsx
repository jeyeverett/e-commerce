import React from 'react';

import {
  CartItemContainer,
  CartItemDetailsContainer,
  CartImageStyled,
} from './cart-item.styles';

const CartItem = ({ item }) => (
  <CartItemContainer>
    <CartImageStyled src={item.imageUrl} alt={item.name} />
    <CartItemDetailsContainer>
      <span style={{ marginBottom: '5%' }}>{item.name}</span>
      <span>
        {item.quantity} x ${item.price}
      </span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
