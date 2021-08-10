import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  height: 30px;
  width: 30px;
  @media screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
  }
`;

export const ShoppingCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bolder;
  bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    bottom: 12px;
  }
`;
