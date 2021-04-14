import React from 'react';

import './checkout.styles.scss';

//Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

//Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            !cartItems.length ?
                <span className="checkout-empty">Your cart is empty</span>
            :
            cartItems.map(item => 
                <CheckoutItem key={item.id} item={item} />
            )
        }
        <div className="total">
            <span>TOTAL: ${cartTotal}</span>
        </div>
        <StripeCheckoutButton price={cartTotal} />
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - EXP: 06/15 - CVC: 852
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);