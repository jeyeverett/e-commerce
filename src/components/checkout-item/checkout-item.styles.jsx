import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  min-height: 100px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px 0;
  font-size: 16px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 600px) {
    grid-column-gap: 2px;
    font-size: 9px;
    padding: 0;
  }
`;

export const CheckoutImageContainer = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    height: 60px;
    width: auto;
    margin-right: 5px;
  }
`;

export const StyledQuantity = styled.span``;

export const CheckoutQuantityButton = styled.button`
  background: none;
  border: none;
  font-family: sans-serif;
  color: white;
  cursor: pointer;
  font-size: 30px;
  line-height: 20px;
  transition: all 0.2s;
  padding: 0px 10px;
  transform: translateY(5px);
  text-shadow: 0 5px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 0px 5px;
    transform: translateY(2px);
  }
`;

export const CheckoutRemoveButton = styled.button`
  background: none;
  border: none;
  font-family: sans-serif;
  color: white;
  cursor: pointer;
  font-size: 26px;
  transition: all 0.2s;
  text-shadow: 0 5px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const StyledProductName = styled.span`
  max-width: 90%;
`;

export const StyledPrice = styled.span`
  color: white;
`;
