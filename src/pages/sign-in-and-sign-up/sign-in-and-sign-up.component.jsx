import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user/user.selector';

import { StyledError } from '../../generalstyles';

const SignInAndSignOutPage = ({ user }) => (
  <>
    {user.error && (
      <StyledError>
        <li>
          <small>{user.error.message}</small>
        </li>
      </StyledError>
    )}
    <div className="sign-in-and-signup">
      <SignIn />
      <SignUp />
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(SignInAndSignOutPage);
