import React from 'react';

//Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './cart-item.styles.scss';

const CartItem = ({ item, addItem}) => (
    <div className="cart-item">
        <img src={item.imageUrl} alt="Cart item" className="cart-image" />
        <div className="item-details">
            <span className="name">{item.name}</span>
            <span className="price">{item.quantity} x ${item.price}</span>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);