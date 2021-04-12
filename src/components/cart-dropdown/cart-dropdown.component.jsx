import React from 'react';

//Redux
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

//Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
