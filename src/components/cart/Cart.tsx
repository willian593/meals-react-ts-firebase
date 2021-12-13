import classses from './Cart.module.css';
import { Modal } from '../UI/modal/Modal';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import { CartItemInteface, checkoutInterface } from '../../data/data';
import { Checkout } from '../checkout/Checkout';
import { fetchOrder } from './../../helpers/fetchMeals';

type Props = {
  onClose: () => void;
};

export const Cart = ({ onClose }: Props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const { items, totalAmount, addItem, removeItem, clearCart } =
    useContext(CartContext);

  const totalAmountFinish = `$${totalAmount.toFixed(2)}`;

  // si no hay ningun items no mostrar button order
  const hasItems = items.length > 0;

  // remover cartItems botones -
  const cartItemsRemoveHandler = (id: string) => {
    removeItem(id);
  };

  // agregar items boton +
  const cartItemAddHandler = (item: CartItemInteface) => {
    addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (
    userData: checkoutInterface,
    orderedItems = items
  ) => {
    setIsSubmitting(true);
    await fetchOrder(userData, orderedItems);
    setIsSubmitting(false);
    setDidSubmit(true);
    clearCart();
  };

  const carItems = (
    <ul className={classses['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemsRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classses.actions}>
      <button className={classses['button--alt']} onClick={onClose}>
        Close
      </button>
      {/* validar el botton order */}
      {hasItems && (
        <button className={classses.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {carItems}
      <div className={classses.total}>
        <span>Total Amount</span>
        <span>{totalAmountFinish}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the oreder!</p>
      <div className={classses.actions}>
        <button className={classses.button} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

// see video 16 timer 07:23
