import React from 'react';

//Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, collectionPage }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className={`collection-item ${collectionPage  ? 'collection-all' : ''}`}>
            <div className="item-image" style={ { backgroundImage: `url(${imageUrl})` } } />
            <div className="item-footer">
                <span className="name">{ name }</span>
                <span className="price">${ price }</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);