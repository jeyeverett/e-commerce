import React from 'react';

import { CheckoutItemContainer, CheckoutImageContainer, 
    CheckoutQuantityButton, CheckoutRemoveButton } from './checkout-item.styles';

//Redux
import { connect } from 'react-redux'
import { addItem, removeItem, clearItemFromCheckout } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, dispatch }) => (
    <CheckoutItemContainer>
        <CheckoutImageContainer src={item.imageUrl} alt={item.name} />
        <span>{item.name}</span>
        <span>
            <CheckoutQuantityButton onClick={() => dispatch(removeItem(item))}>&#10094;</CheckoutQuantityButton>
                {item.quantity}
            <CheckoutQuantityButton onClick={() => dispatch(addItem(item))}>&#10095;</CheckoutQuantityButton>
        </span>
        <span>${item.price}</span>
        <CheckoutRemoveButton onClick={() => dispatch(clearItemFromCheckout(item))}>
            &#10005;
        </CheckoutRemoveButton>
    </CheckoutItemContainer>
);

export default connect()(CheckoutItem);