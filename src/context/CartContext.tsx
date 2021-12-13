import { createContext } from 'react';
import { CartItemInteface } from '../data/data';

export type CartContextProps = {
  items: CartItemInteface[];
  totalAmount: number;
  addItem: (item: CartItemInteface) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);
