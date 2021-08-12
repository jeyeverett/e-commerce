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
  background-color: #4285f4;
  color: white;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
  @media screen and (max-width: 600px) {
    min-width: 130px;
  }
`;

const buttonStyles = css`
  background-color: #696430;
  color: white;
  transition: all 0.2s;

  &:hover {
    background-color: #464320;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return GoogleSignInStyles;

  return props.inverted ? InvertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: 90%;
  margin: 10px auto 0;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Montserrat';
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${getButtonStyles}

  @media screen and (max-width: 600px) {
    min-width: 120px;
    font-size: 12px;
  }
`;
