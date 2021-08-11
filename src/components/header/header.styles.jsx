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
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70px;
  @media screen and (max-width: 800px) {
    svg {
      width: 40px;
    }
    justify-content: flex-start;
    height: 40px;
    padding-bottom: 5px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 22px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 5px 5px;
  }
`;
