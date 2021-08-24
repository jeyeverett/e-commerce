import React from 'react';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

//Components
import { StyledH1, StyledList } from '../../generalstyles';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      <StyledH1>Shop</StyledH1>
      <StyledList>
        <li>Browse the shop page for a preview of our selection</li>
        <li>Click a category to see more products</li>
      </StyledList>
      {collections
        .sort((a, b) => a.position - b.position)
        .map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
