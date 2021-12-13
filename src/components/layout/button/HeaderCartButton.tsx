import { CartIcon } from '../../cart/CartIcon';
import { CartContext } from '../../../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import { CartItemInteface } from '../../../data/data';
import classes from './HeaderCartButton.module.css';

type Props = {
  title: string;
  onclick: () => void;
};

export const HeaderCartButton = ({ title, onclick }: Props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce(
    (valorAnterior, valorActual: CartItemInteface) => {
      return valorAnterior + valorActual.amount;
    },
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ''
  }`;

  // animacion del boton 'your cart'
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    /*
    eliminar la class css una vez 
    terminada la animacion
     */

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={btnClasses} onClick={onclick}>
        <span className={classes.ico}>
          <CartIcon />
        </span>
        <span>{title}</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

// see video 13 timer 4:30
