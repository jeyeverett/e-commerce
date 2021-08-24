import React from 'react';

//Redux
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

//Components
import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  CollectionContainer,
  NoCollectionContainer,
} from './collection.styles';

import { StyledH1 } from '../../generalstyles';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  if (collection) {
    return (
      <CollectionPageContainer>
        <StyledH1>{collection.title.toUpperCase()}</StyledH1>
        <CollectionContainer>
          {collection.items.map((item) => (
            <CollectionItem
              key={item.id}
              item={{ ...item, collectionId: collection.id }}
              collectionPage
            />
          ))}
        </CollectionContainer>
      </CollectionPageContainer>
    );
  } else {
    return (
      <NoCollectionContainer>
        <h1>This collection does not exist.</h1>
      </NoCollectionContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(state, ownProps),
});

export default connect(mapStateToProps)(CollectionPage);
