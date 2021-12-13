import { FormEvent, useRef, useState } from 'react';
import classes from './Checkout.module.css';
import { checkoutInterface } from '../../data/data';

type Props = {
  onCancel: () => void;
  onConfirm: (userData: checkoutInterface) => void;
};
// validar campos vacios
const isEmpaty = (value: string) => value.trim() === '';
const isFiveChars = (value: string) => value.trim().length === 5;

const initialValidaty = {
  name: true,
  street: true,
  postal: true,
  city: true,
};

export const Checkout = ({ onCancel, onConfirm }: Props) => {
  const [formValidaty, setFormValidaty] = useState(initialValidaty);

  const nameRef = useRef<HTMLInputElement>(null!);
  const streetRef = useRef<HTMLInputElement>(null!);
  const postalRef = useRef<HTMLInputElement>(null!);
  const cityRef = useRef<HTMLInputElement>(null!);

  const confirmHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pedido: checkoutInterface = {
      name: nameRef.current.value,
      street: streetRef.current.value,
      postal: postalRef.current.value,
      city: cityRef.current.value,
    };
    console.info(pedido);

    // validar campo q no este vacios
    const enteredNameIsValid = !isEmpaty(pedido.name);
    const enteredStreetIsValid = !isEmpaty(pedido.street);
    const enteredPostalIsValid = isFiveChars(pedido.postal);
    const enteredCityIsValid = !isEmpaty(pedido.city);

    setFormValidaty({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      pedido.name && pedido.city && pedido.postal && pedido.street;

    if (!formIsValid) {
      // recopilamos datos validos
      console.info('se guardo con exito 👍');
      return;
    }
    onConfirm(pedido);
  };

  const nameControlClasses = `${classes.control} ${
    formValidaty.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formValidaty.street ? '' : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formValidaty.postal ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formValidaty.city ? '' : classes.invalid
  }`;

  return (
    <>
      <form
        className={classes.form}
        onSubmit={confirmHandler}
        autoComplete="off">
        <div className={nameControlClasses}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameRef} />
          {!formValidaty.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetRef} />
          {!formValidaty.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalControlClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalRef} />
          {!formValidaty.postal && <p>Please enter a valid postal!</p>}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityRef} />
          {!formValidaty.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </>
  );
};

/*
leyendo el formulario mediante ref
*/

// ver video 8 time 6:37
