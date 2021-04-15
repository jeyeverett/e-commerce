import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState( { [name]: value });
    }

    render() {
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
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn> 
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;