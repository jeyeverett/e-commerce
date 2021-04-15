import React from 'react';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

//Components
import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({ id, ...collectionProps}) => (
                <CollectionPreview key={id} { ...collectionProps } />
            ))
        }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);