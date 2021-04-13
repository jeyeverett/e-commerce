import React from 'react';

import './checkout-item.styles.scss';

//Redux
import { connect } from 'react-redux'
import { addItem, removeItem, clearItemFromCheckout } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, dispatch }) => (
    <div className='checkout-item'>
        <div className="image-container">
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <button className="change-quantity" onClick={() => dispatch(removeItem(item))}>&#10094;</button>
                {item.quantity}
            <button className="change-quantity" onClick={() => dispatch(addItem(item))}>&#10095;</button>
        </span>
        <span className="price">${item.price}</span>
        <button className="remove-button" onClick={() => dispatch(clearItemFromCheckout(item))}>
            &#10005;
        </button>
    </div>
);

export default connect()(CheckoutItem);