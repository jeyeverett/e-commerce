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
  StyledPriceContainer,
  StyledNameContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price } = item;

  return (
    <CollectionItemContainer>
      <CollectionImage {...item} />
      <ItemDescriptionContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus
        temporibus dolorem exercitationem possimus!
      </ItemDescriptionContainer>
      <ItemFooterContainer>
        <StyledNameContainer>{name}</StyledNameContainer>
        <StyledPriceContainer>
          <span>$/bunch</span>
          <span>${price}</span>
        </StyledPriceContainer>
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
