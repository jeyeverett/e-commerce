import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const EmptyCheckout = styled.span`
  margin: auto 0;
  font-size: 18px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid darkgray;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bolder;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    margin-left: auto;
    font-size: 26px;
  }
`;

export const TestWarning = styled.div`
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  color: red;
`;
