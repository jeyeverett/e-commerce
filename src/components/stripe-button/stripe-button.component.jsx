import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createOrderStart } from '../../redux/orders/orders.actions';

import { StyledStripeButton } from './stripe-button.styles';

const StripeCheckoutButton = ({ price, cartItems, dispatch, history }) => {
  const priceForStripe = price * 100; //Stripe takes payments in cents
  const publishableKey =
    'pk_test_51IgGEEDNsfgN88DjOQJjCuUG9nX4MQQbgnvyHs6p8hhZhHeuhx0wA2aITIGa0XDXya8cTSn6yozcrQahFkLsEJwy00mU1S5LGE';
  const onToken = (token) => {
    fetch('http://localhost:4000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, amount: priceForStripe }),
    })
      .then((res) => {
        alert('Payment successful!');
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          dispatch(
            createOrderStart({
              cartItems,
              receiptUrl: data.success.receipt_url,
            })
          );
        } else {
          const error = new Error('Payment failed.');
          error.statusCode(500);
          throw error;
        }
      })
      .then(() => {
        history.push('/orders');
      })
      .catch((err) =>
        alert(
          'Payment failed - please make sure you are using the provided credit card info.'
        )
      );
  };

  return (
    <StyledStripeButton
      label="Pay Now"
      name="CarrotCart"
      billingAddress
      shippingAddress
      image="https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628814409/carrotcart/favicon_eidzyy.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default withRouter(connect()(StripeCheckoutButton));
