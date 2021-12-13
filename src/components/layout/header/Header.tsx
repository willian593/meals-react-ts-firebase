import mealsImg from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import { HeaderCartButton } from '../button/HeaderCartButton';

type Props = {
  title: string;
  onShowCart: () => void;
};

export const Header = ({ title, onShowCart }: Props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>{title}</h1>
        <HeaderCartButton title="Your Cart" onclick={onShowCart} />
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImg} alt="mealsImg" />
      </div>
    </>
  );
};
