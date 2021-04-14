import React from 'react';

//Redux
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

//Components
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    if (collection) {
         return (
            <div className='collection-page'>
                <h1 className="title">
                    {collection.title}
                </h1>
                <div className='collection'>
                    {
                        collection.items
                            .map((item) => (
                                <CollectionItem key={item.id} item={item} collectionPage />
                            ))
                    }
                </div>
            </div>
        ) 
    } else {
        return (
            <div className="no-collection">
                <h1>
                    This collection does not exist.
                </h1>
            </div>
        )
    }
  
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(state, ownProps)
});

export default connect(mapStateToProps)(CollectionPage);