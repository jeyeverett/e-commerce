import React from 'react';

//Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionImage,
  ItemFooterContainer,
  CustomButtonStyled,
  ItemDescriptionContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price } = item;
  return (
    <CollectionItemContainer>
      <CollectionImage {...item} />
      <ItemDescriptionContainer>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          natus temporibus dolorem exercitationem possimus!
        </span>
      </ItemDescriptionContainer>
      <ItemFooterContainer>
        <span>{name}</span>
        <span>${price}</span>
      </ItemFooterContainer>
      <CustomButtonStyled onClick={() => addItem(item)}>
        add to cart
      </CustomButtonStyled>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
