import { CartAction } from '../types/types';
// import { CartContextProps } from './CartContext';
import { CartItemInteface } from '../data/data';

export interface CartStateInterface {
  items: CartItemInteface[];
  totalAmount: number;
}

const initialState: CartStateInterface = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartStateInterface => {
  switch (action.type) {
    case 'addCart':
      const updatedTotalAmount =
        state.totalAmount +
        action.payload.item.price * action.payload.item.amount;

      const existCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      const existCartItem = state.items[existCartItemIndex];

      let updatedItems;

      if (existCartItem) {
        const updatedItem = {
          ...existCartItem,
          amount: existCartItem.amount + action.payload.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existCartItemIndex] = updatedItem;
      } else {
        //  const  updatedItem = { ...action.payload.item };
        updatedItems = state.items.concat(action.payload.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case 'deleteCart':
      const existCartItemDelete = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingtItem = state.items[existCartItemDelete];
      const updateTotalAmount = state.totalAmount - existingtItem.price;

      let updateItems;
      if (existingtItem.amount === 1) {
        updateItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingtItem,
          amount: existingtItem.amount - 1,
        };
        updateItems = [...state.items];
        updateItems[existCartItemDelete] = updatedItem;
      }

      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
      };

    // eliminar el numero de pedido cuando termino de grabar
    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
};
