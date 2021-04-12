import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

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

const mapStateToProps = ({ user, cart }) => ({
    currentUser: user.currentUser,
    cartHidden: cart.hidden
});

export default connect(mapStateToProps)(Header);