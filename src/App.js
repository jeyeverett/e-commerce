import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

import './App.css';

// Utilities
import { auth, creatUserProfileDocument } from './firebase/firebase.utils';

// Components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

class App extends React.Component {
  //We remove our constructor when we integrate Redux because state is now stored in the Redux store

  //Auth setup using Firebase Authentication and Firestore database
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);

        await userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      //If user is not signed in or was signed out userAuth will be null, so we set currentUser to userAuth (i.e. to null)
      setCurrentUser(userAuth); 
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
