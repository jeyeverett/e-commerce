import React from 'react';
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

//Style
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, cartHidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                    :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { cartHidden ? null : <CartDropdown /> }
    </HeaderContainer>
);

//Here we replace '(state) =>' with 'createStructuredSelector' and remove the state parameter calls from selectCurrentUser and selectCartHidden. This does the same thing but it is useful when you have many properties in mapStateToProps. createStructuredSelector will handle the passing in of state 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);