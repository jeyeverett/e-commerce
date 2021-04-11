import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-out.styles.scss';


class SignInAndSignOutPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="sign-in-and-signout">
                <SignIn />
            </div>
        )
    }
}

export default SignInAndSignOutPage;