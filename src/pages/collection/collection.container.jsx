//Redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isShopFetching } from '../../redux/shop/shop.selector';

//Components
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../../pages/collection/collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: isShopFetching
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage);

export default CollectionPageContainer;
