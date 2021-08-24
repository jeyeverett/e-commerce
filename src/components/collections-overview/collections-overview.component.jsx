import React from 'react';
import { withRouter } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

//Components
import {
  StyledH1,
  StyledList,
  StyledMenu,
  CollectionTitle,
} from '../../generalstyles';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections, history, match }) => {
  return (
    <CollectionsOverviewContainer>
      <StyledH1>Shop</StyledH1>
      <StyledList>
        <li>Browse the shop page for a preview of our selection</li>
        <li>Click a category to see more products</li>
      </StyledList>
      <StyledMenu>
        <CollectionTitle
          menu={true}
          onClick={() => {
            history.push(`${match.url}/fruit`);
          }}
        >
          fruit
        </CollectionTitle>
        <CollectionTitle
          menu={true}
          onClick={() => {
            history.push(`${match.url}/veggie`);
          }}
        >
          veggie
        </CollectionTitle>
        <CollectionTitle
          menu={true}
          onClick={() => {
            history.push(`${match.url}/herb`);
          }}
        >
          herb
        </CollectionTitle>
        <CollectionTitle
          menu={true}
          onClick={() => {
            history.push(`${match.url}/floral`);
          }}
        >
          floral
        </CollectionTitle>
        <CollectionTitle
          menu={true}
          onClick={() => {
            history.push(`${match.url}/basket`);
          }}
        >
          basket
        </CollectionTitle>
      </StyledMenu>
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

export default withRouter(connect(mapStateToProps)(CollectionsOverview));
