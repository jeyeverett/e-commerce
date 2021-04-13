import React from 'react';
import { withRouter } from 'react-router-dom'

//Redux
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';


//Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                !cartItems.length ?
                    <span className="cart-empty">Your cart is empty</span>
                :
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        
        <CustomButton onClick={() => { dispatch(toggleCartHidden()); history.push('/checkout'); } }>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
