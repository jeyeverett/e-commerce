import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(checkUserSession());
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
            render={() => 
              currentUser ? 
                (<Redirect to='/' />)
                :
                (<SignInAndSignUpPage />)
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect(mapStateToProps)(App);
