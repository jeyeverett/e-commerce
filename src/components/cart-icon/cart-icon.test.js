import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import CartIcon from './cart-icon.component';
import { Provider } from 'react-redux';
import { createTestStore } from '../../redux/test-store';

describe('CartIcon component', () => {
  let mockToggleCartHidden;
  let store;
  let wrapper;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();
    store = createTestStore();
    const mockProps = {
      toggleCartHidden: mockToggleCartHidden,
    };
    wrapper = render(
      <Provider store={store}>
        <CartIcon {...mockProps} />
      </Provider>
    );
  });

  test('CartIcon component renders', () => {
    const { container } = wrapper;
    expect(container).toBeInTheDocument();
  });

  test('toggleCartHidden is called when icon is clicked', async () => {
    const { container } = wrapper;
    user.click(container);
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  test('itemCount is rendered as text', async () => {
    const itemCount = screen.getByText(0);
    expect(itemCount).toBe('0');
  });
});
