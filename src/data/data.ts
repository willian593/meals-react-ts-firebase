export interface InputInterface {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}

/*
===============================================================
TARJETA MODAL CART
================================================================
*/

export interface CartItemInteface {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export const DUMMY_CART_ITEMS: CartItemInteface[] = [
  {
    id: 'c1',
    name: 'Sushi',
    amount: 2,
    price: 12.99,
  },
];

/*
===============================================================
LISTADO DE COMIDA PAGINA PRINCIPAL
================================================================
*/
export interface MealsInterface {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const DUMMY_MEALS: MealsInterface[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
/*
===============================================================
checkout
================================================================
*/

export interface checkoutInterface {
  name: string;
  street: string;
  postal: string;
  city: string;
}

export const initialState: checkoutInterface = {
  name: 'william',
  street: 'El recreo',
  postal: '554518',
  city: 'Duran',
};
