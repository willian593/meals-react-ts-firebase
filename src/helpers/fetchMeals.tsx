import { checkoutInterface, CartItemInteface } from '../data/data';

// guardar en la DB

export const fetchOrder = async (
  user: checkoutInterface,
  orderedItems: CartItemInteface[]
) => {
  const resp = await fetch('aqui-va-url-firebase', {
    method: 'POST',
    body: JSON.stringify({ user, orderedItems }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return resp;
};
