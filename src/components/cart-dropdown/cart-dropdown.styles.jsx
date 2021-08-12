import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid rgba(105, 100, 48, 0.7);
  border-radius: 10px;
  background-color: rgba(188, 152, 106, 0.7);
  top: 90px;
  right: 80px;
  z-index: 5;

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
    background-color: rgba(97, 75, 44, 0.7);
    border-radius: 20px;
  }
`;

export const CartEmptyContainer = styled.span`
  margin: auto 0;
  font-size: 18px;
  color: white;
`;
