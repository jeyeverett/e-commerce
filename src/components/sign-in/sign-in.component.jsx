import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//Redux
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(emailSignInStart({ email, password }));
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState( { [name]: value });
    }

    render() {
        const { dispatch } = this.props;
        return (
            <SignInContainer>
                <h2 className="title">I already have an account.</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange} 
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange} 
                        required />
                    <div className="button">
                        <CustomButton type="submit">
                            Sign in
                        </CustomButton>
                        <CustomButton 
                            type="button" 
                            onClick={() => dispatch(googleSignInStart())} 
                            isGoogleSignIn
                        > 
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </SignInContainer>
        )
    }
}

export default connect()(SignIn);