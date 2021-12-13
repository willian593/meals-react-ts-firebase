import classes from './MealItem.module.css';
import { MealsInterface } from '../../../data/data';
import { MealItemForm } from './MealItemForm';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

type Props = {
  meal: MealsInterface;
};

export const MealItem = ({ meal }: Props) => {
  const { addItem } = useContext(CartContext);

  const priceRounding = `${meal.price.toFixed(2)}`; // redondeas el precio

  const addToCartHandler = (amount: number) => {
    addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{meal.name}</h3>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{priceRounding}</div>
        </div>
        <div>
          <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </>
  );
};
