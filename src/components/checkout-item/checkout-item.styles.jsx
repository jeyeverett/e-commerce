import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  min-height: 100px;
  border-bottom: 1px solid white;
  padding: 15px 0;
  font-size: 16px;
  @media screen and (max-width: 600px) {
    grid-column-gap: 2px;
    font-size: 9px;
    padding: 0;
  }
`;

export const CheckoutImageContainer = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-right: 20px;

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

  &:hover {
    opacity: 0.7;
  }
`;

export const CheckoutRemoveButton = styled.button`
  background: none;
  border: none;
  font-family: 'Indie Flower', sans-serif;
  color: white;
  cursor: pointer;
  font-size: 40px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledProductName = styled.span`
  max-width: 90%;
`;

export const StyledPrice = styled.span`
  color: white;
`;
