import { useReducer } from 'react';
import { CartContext, CartContextProps } from './CartContext';
import { cartReducer, CartStateInterface } from './cartReducer';
import { CartItemInteface } from '../data/data';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const initialState: CartStateInterface = {
  items: [],
  totalAmount: 0,
};

export const CartProvider = ({ children }: Props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item: CartItemInteface) => {
    dispatch({ type: 'addCart', payload: { item } });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatch({ type: 'deleteCart', payload: { id } });
  };

  const clearCartHandler = () => {
    dispatch({ type: 'CLEAR' });
  };

  const cartContext: CartContextProps = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
