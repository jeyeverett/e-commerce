import styled from 'styled-components';

export const CheckoutContainer = styled.section`
  width: 55%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  color: white;
  @media screen and (max-width: 1200px) {
    width: 75%;
  }

  @media screen and (max-width: 800px) {
    width: 85%;
  }
  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const EmptyCheckout = styled.span`
  margin: auto 0;
  font-size: 18px;
  color: white;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  color: white;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    font-size: 10px;
    grid-column-gap: 2px;
  }
`;

export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    margin-left: auto;
    font-size: 22px;
  }
`;

export const TestWarning = styled.div`
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  color: red;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
