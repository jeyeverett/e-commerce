//Redux
import { compose } from 'redux';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { isShopFetching } from '../../redux/shop/shop.selector';

//Components
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: isShopFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;