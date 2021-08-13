import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';

export const StyledStripeButton = styled(StripeCheckout)`
  padding: 15px 30px !important;
  border-radius: 10px;
  transition: all 0.2s;
  background-image: url('client\public\favicon.ico');
  :hover {
    opacity: 0.8;
  }

  span {
    border: none !important;
    font-size: 30px !important;
    font-family: 'Indie Flower', sans-serif !important;
    background: none !important;
    box-shadow: none !important;
  }
`;
