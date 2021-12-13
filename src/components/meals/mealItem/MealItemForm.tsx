import classes from './MealItemForm.module.css';
import { Input } from './../../UI/Input';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

type Props = {
  id: string;
  onAddToCart: (amount: number) => void;
};

export const MealItemForm = ({ id, onAddToCart }: Props) => {
  const amountRef = useRef<HTMLInputElement>(null);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredAmount = amountRef.current?.value;
    const enteredAmountNumber = Number(enteredAmount);

    // validacion
    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const msgErrorAmount = !amountIsValid && (
    <p>Please enter a valid amount (1-5).</p>
  );

  return (
    <>
      <form className={classes.form} onSubmit={handlerSubmit}>
        <Input
          ref={amountRef}
          label="Amount"
          onchange={handlerChange}
          input={{
            id: 'amount_' + id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button>+ Add</button>
        {msgErrorAmount}
      </form>
    </>
  );
};
