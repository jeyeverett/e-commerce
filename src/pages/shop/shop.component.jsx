import React from 'react';
import { Route } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//Components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
class ShopPage extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCollectionsStart());
    }
    
    render() {
        const { match } = this.props;

        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
}

export default connect()(ShopPage);