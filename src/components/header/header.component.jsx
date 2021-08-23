import React from 'react';
import { createStructuredSelector } from 'reselect';

//Redux
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

//Components
import { ReactComponent as Logo } from '../../assets/carrot.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//Style
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  StyledBrand,
} from './header.styles';

const Header = ({ currentUser, cartHidden, dispatch }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
      <StyledBrand>carrotcart</StyledBrand>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">shop</OptionLink>
      <OptionLink to="/about">about</OptionLink>
      {currentUser ? (
        <>
          <OptionLink to="/orders">orders</OptionLink>
          <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
            sign out
          </OptionLink>
        </>
      ) : (
        <OptionLink to="/signin">sign in</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {cartHidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//Here we replace '(state) =>' with 'createStructuredSelector' and remove the state parameter calls from selectCurrentUser and selectCartHidden. This does the same thing but it is useful when you have many properties in mapStateToProps. createStructuredSelector will handle the passing in of state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
