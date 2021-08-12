import React from 'react';
import { withRouter } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartEmptyContainer,
} from './cart-dropdown.styles';

//Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {!cartItems.length ? (
        <CartEmptyContainer>buy some stuff!</CartEmptyContainer>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </CartItemsContainer>

    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}
    >
      go to checkout
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
