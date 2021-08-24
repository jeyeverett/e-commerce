import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 400px) {
    padding: 10px 0;
  }
`;

export const StyledBrand = styled.h1`
  font-size: 26px;
  color: white;
  margin-left: 15px;
  font-family: 'Indie Flower', sans-serif;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: min-content;
  @media screen and (max-width: 800px) {
    svg {
      width: 40px;
    }
    justify-content: flex-start;
    height: 40px;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 800px) {
    svg {
      width: 30px;
    }
    height: 30px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Indie Flower', sans-serif;
  padding-right: 60px;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 20px;
  font-size: 22px;
  cursor: pointer;
  color: white;

  :hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    padding: 5px 10px;
  }
  @media screen and (max-width: 450px) {
    font-size: 14px;

    padding: 5px 5px;
  }
`;
