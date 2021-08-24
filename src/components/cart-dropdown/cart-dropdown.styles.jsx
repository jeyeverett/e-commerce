import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  top: 90px;
  right: 80px;
  z-index: 1000;

  @media screen and (max-width: 600px) {
    right: 30px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(72, 133, 168, 0.7);
    border-radius: 20px;
  }
`;

export const CartEmptyContainer = styled.span`
  margin: auto 0;
  font-size: 18px;
  color: rgba(72, 133, 168, 1);
`;
