import React from 'react';
import { Route } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { setShopCollections } from '../../redux/shop/shop.actions';

//Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

//Firestore
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

//These are the higher order components we use to display the spinner
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    //Note that React introduced some features that takes care of the constructor/super call for us when we use a state expression at the beginning of a class
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { dispatch } = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapShot =>{
            const collections = convertCollectionsSnapshotToMap(snapShot);
            dispatch(setShopCollections(Object.assign({}, ...collections)));
            
            this.setState({loading: false});
        });
    }
    
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} { ...props } />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} { ...props } />} />
            </div>
        );
    }
}

export default connect()(ShopPage);