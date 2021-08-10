import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //Stripe takes payments in cents
  const publishableKey =
    'pk_test_51IgGEEDNsfgN88DjOQJjCuUG9nX4MQQbgnvyHs6p8hhZhHeuhx0wA2aITIGa0XDXya8cTSn6yozcrQahFkLsEJwy00mU1S5LGE';
  const onToken = (token) => {
    console.log(token);
    fetch('http://localhost:4000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, amount: priceForStripe }),
    })
      .then((res) => alert('Payment successful!'))
      .catch((err) =>
        alert(
          'Payment failed - please make sure you are using the provided credit card info.'
        )
      );
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce App"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
