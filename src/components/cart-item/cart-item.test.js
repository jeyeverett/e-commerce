import React from 'react';
import { render } from '@testing-library/react';
import CartItem from './cart-item.component';

describe('CartItem component', () => {
  beforeEach(() => {});

  test('CartItem component', () => {
    const item = {
      name: 'Test Name',
      price: 10,
      quantity: 1,
      imageUrl: 'http://testurl.com',
    };
    const { container, getByAltText, getByText } = render(
      <CartItem item={item} />
    );
    const image = getByAltText(/test name/i);
    expect(image).toHaveAttribute('alt', 'Test Name');
    expect(image).toHaveAttribute('src', 'http://testurl.com');

    const name = getByText(/test name/i);
    expect(name).toBeInTheDocument();
    expect(name).toHaveStyle('marginBottom: 5%');

    const priceQuantity = getByText('1 x $10');
    expect(priceQuantity).toBeInTheDocument();
  });
});
