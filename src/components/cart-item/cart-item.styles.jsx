import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 10px;
  align-items: center;
`;

export const CartImageStyled = styled.img`
  height: 60px;
  width: auto;
  border-radius: 10px;
`;

export const CartItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-transform: lowercase;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: #464320;
  text-align: center;
`;
