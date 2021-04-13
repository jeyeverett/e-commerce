import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

//Redux
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

//Components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, cartHidden }) => (
    <header className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>
        { cartHidden ? null : <CartDropdown /> }
    </header>
);

//Here we replace '(state) =>' with 'createStructuredSelector' and remove the state parameter calls from selectCurrentUser and selectCartHidden. This does the same thing but it is useful when you have many properties in mapStateToProps. createStructuredSelector will handle the passing in of state 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);