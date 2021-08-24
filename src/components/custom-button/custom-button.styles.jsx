import styled, { css } from 'styled-components';

export const InvertedButtonStyles = css`
  background-color: rgba(105, 100, 48, 0.5);
  color: white;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GoogleSignInStyles = css`
  background-color: rgba(66, 133, 244, 0.6);
  color: white;
  border: 1px solid rgba(66, 133, 244, 0.6);
  margin-left: 10px;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: rgba(66, 133, 244, 0.9);
    border: 1px solid rgba(66, 133, 244, 0.6);
  }
  @media screen and (max-width: 600px) {
    min-width: 130px;
  }
`;

const buttonStyles = css`
  background-color: rgba(72, 133, 168, 0.8);
  color: white;
  transition: all 0.2s;
  margin-right: 10px;

  &:hover {
    background-color: rgba(72, 133, 168, 1);
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
  font-size: 14px;
  font-weight: bold;
  font-family: 'Montserrat';
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  ${getButtonStyles}

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 11px;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
