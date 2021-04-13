import React from 'react';

import './checkout-item.styles.scss';

//Redux
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">${price}</span>
        <button className="remove-button">
            &#10005;
        </button>
    </div>
);

export default connect()(CheckoutItem);