import React from 'react';

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutQuantityButton,
  CheckoutRemoveButton,
  StyledProductName,
  StyledPrice,
  StyledQuantity,
} from './checkout-item.styles';

//Redux
import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCheckout,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, dispatch }) => (
  <CheckoutItemContainer>
    <CheckoutImageContainer src={item.imageUrl} alt={item.name} />
    <StyledProductName>{item.name}</StyledProductName>
    <span>
      <CheckoutQuantityButton
        onClick={() => dispatch(removeItem(item))}
        title="remove one"
      >
        {'<'}
      </CheckoutQuantityButton>
      <StyledQuantity>{item.quantity}</StyledQuantity>
      <CheckoutQuantityButton
        onClick={() => dispatch(addItem(item))}
        title="add one"
      >
        {'>'}
      </CheckoutQuantityButton>
    </span>
    <StyledPrice>${item.price}</StyledPrice>
    <CheckoutRemoveButton
      onClick={() => dispatch(clearItemFromCheckout(item))}
      title="remove item"
    >
      {'x'}
    </CheckoutRemoveButton>
  </CheckoutItemContainer>
);

export default connect()(CheckoutItem);
