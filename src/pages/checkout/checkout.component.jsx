import React from 'react';

import { CheckoutContainer, EmptyCheckout, CheckoutHeader, CheckoutTotal, TestWarning } from './checkout.styles';

//Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

//Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <CheckoutContainer>
        <CheckoutHeader>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </CheckoutHeader>
        {
            !cartItems.length ?
                <EmptyCheckout>Your cart is empty</EmptyCheckout>
            :
            cartItems.map(item => 
                <CheckoutItem key={item.id} item={item} />
            )
        }
        <CheckoutTotal>
            <span>TOTAL: ${cartTotal}</span>
        </CheckoutTotal>
        <StripeCheckoutButton price={cartTotal} />
        <TestWarning>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - EXP: 06/15 - CVC: 852
        </TestWarning>
    </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);