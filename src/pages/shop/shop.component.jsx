import React from 'react';
import { Route } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { setShopCollections } from '../../redux/shop/shop.actions';



//Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

//Firestore
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


class ShopPage extends React.Component {

    unsubscribeFromSnapshop = null;

    componentDidMount() {
        const { dispatch } = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapShot =>{
            const collections = convertCollectionsSnapshotToMap(snapShot);
            
            dispatch(setShopCollections(Object.assign({}, ...collections)));
        });
    }
    
    render() {
        const { match } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

export default connect()(ShopPage);