import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, routeName, items, history, match }) => (
    <div className='collection-preview'>
        <h1 className="title" onClick={() => { history.push(`${match.url}${routeName}`) }}>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...itemProps}) => (
                        <CollectionItem key={id} { ...itemProps } />
                    ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);