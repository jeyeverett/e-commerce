import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor () {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Passwords must match');
            return;
        }

        const { dispatch } = this.props;
        dispatch(signUpStart({ displayName, email, password }));
    }

    handleChange = event => {
        const { name, value  } = event.target;

        this.setState( { [name]: value } );
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        value={displayName}
                        label="Name"
                        onChange={this.handleChange} 
                        required 
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={email}
                        label="Email"
                        onChange={this.handleChange} 
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password}
                        label="Password"
                        onChange={this.handleChange} 
                        required />
                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={this.handleChange} 
                        required />
                    <div className="button">
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </div>
                </form>
            </SignUpContainer>
        )
    }

}

export default connect()(SignUp);