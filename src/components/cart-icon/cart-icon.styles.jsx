import styled from 'styled-components';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingBag)`
  height: 40px;
  width: 40px;
  margin-bottom: 12px;
  @media screen and (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

export const ShoppingCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bolder;
  bottom: 12px;
  color: white;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    bottom: 14px;
  }
`;
