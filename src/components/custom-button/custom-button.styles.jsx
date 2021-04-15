import styled, { css } from 'styled-components';

export const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const GoogleSignInStyles = css`
    background-color: #4285F4;
    color: white;

    &:hover {
        background-color: white;
        color: #4285F4;
        border: 1px solid #4285F4;
    }
`;

const buttonStyles = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) return GoogleSignInStyles;

    return props.inverted ? InvertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;
