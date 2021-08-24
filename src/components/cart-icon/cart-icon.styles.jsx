import styled from 'styled-components';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 10px;
  z-index: 1000;

  @media screen and (max-width: 800px) {
    top: 15px;
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    top: 20px;
    right: 20px;
  }
`;

export const ShoppingIconContainer = styled(ShoppingBag)`
  height: 60px;
  width: 60px;
  margin-bottom: 12px;
  @media screen and (max-width: 600px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const ShoppingCountContainer = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: bolder;
  bottom: 12px;
  color: white;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    bottom: 20px;
  }
`;
