import styled, { css } from 'styled-components';

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
  @media screen and (max-width: 650px) {
    margin: 30px 0;
  }
`;

const shrinkLabel = css`
  top: -16px;
  font-size: 12px;
  color: white;
  opacity: 1;
`;

const addShrinkLabel = (props) => {
  if (props.value.length) {
    return shrinkLabel;
  }

  return '';
};

export const FormInputStyled = styled.input`
  font-family: 'Montserrat', sans-serif;
  background: none;
  background-color: rgb(232, 240, 254);
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 10px;
  border: 1px solid #adcbdc;
  margin: 25px 0;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }

  &input[type='password'] {
    letter-spacing: 0.3em;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const FormInputLabel = styled.label`
  opacity: 0;
  font-size: 16px;
  font-weight: normal;
  font-family: 'Montserrat', sans-serif;

  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: 0.3s ease all;

  ${FormInputStyled}:active ~ & {
    ${shrinkLabel};
  }

  ${addShrinkLabel}
`;
