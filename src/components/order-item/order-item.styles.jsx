import styled from 'styled-components';

export const OrderItemsContainer = styled.section`
  width: 75%;
  border: 1px solid white;
  padding: 20px 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 20px 20px;
  }
`;

export const OrderItemContainer = styled.p`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  font-size: 16px;
  padding: 10px 0;
  color: white;
  @media screen and (max-width: 600px) {
    grid-column-gap: 2px;
    font-size: 9px;
    padding: 0;
  }
`;

export const OrderTitle = styled.h2`
  color: white;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bolder;
  margin-bottom: 20px;
`;

export const OrderHeader = styled.h3`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bolder;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 10px;
    grid-column-gap: 2px;
  }
`;

export const StyledProductName = styled.span`
  max-width: 90%;
`;

export const OrderItemFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: bolder;
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid white;
  a {
    color: white;
    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
      padding: 5px 10px;
    }
  }
  span {
    @media screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
`;
