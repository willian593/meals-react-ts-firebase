import { CartItemInteface } from '../data/data';

export type CartAction =
  | { type: 'addCart'; payload: { item: CartItemInteface } }
  | { type: 'deleteCart'; payload: { id: string } }
  | { type: 'CLEAR' };
