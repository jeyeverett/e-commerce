import React from 'react';
import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer, CollectionTitle, CollectionPreviewItems } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, routeName, items, history, match }) => (
    <CollectionPreviewContainer>
        <CollectionTitle className="title" onClick={() => { history.push(`${match.url}/${routeName}`) }}>
            {title.toUpperCase()}
        </CollectionTitle>
        <CollectionPreviewItems>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </CollectionPreviewItems>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);