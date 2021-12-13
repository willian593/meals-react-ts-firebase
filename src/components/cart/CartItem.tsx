import classes from './CartItem.module.css';

type Props = {
  // item: CartItemInteface
  name: string;
  price: number;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
};

const CartItem = ({ name, price, amount, onAdd, onRemove }: Props) => {
  const priceRedondear = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceRedondear}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
