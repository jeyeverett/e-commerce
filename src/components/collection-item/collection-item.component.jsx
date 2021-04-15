import React from 'react';

//Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionImage, ItemFooterContainer, CustomButtonStyled } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price } = item;
    return (
        <CollectionItemContainer>
            <CollectionImage { ...item } />
            <ItemFooterContainer>
                <span>{ name }</span>
                <span>${ price }</span>
            </ItemFooterContainer>
            <CustomButtonStyled onClick={() => addItem(item)}>Add to cart</CustomButtonStyled>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);