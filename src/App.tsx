import { Header } from './components/layout/header/Header';
import { Meals } from './components/meals/Meals';
import { Cart } from './components/cart/Cart';
import { useState } from 'react';
import { CartProvider } from './context/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  // mostrar cart
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // cerrar cart
  const hideCarHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <>{cartIsShown && <Cart onClose={hideCarHandler} />}</>
      <Header onShowCart={showCartHandler} title="ReactMeals" />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

/*
**Uso de portales
  - ReactDOM.createPortal, se usa en el componente modal
  en el index.html 


**Un buen ejemplo para usar useContext
desde el video 12 en adalente

** uso de React.ReactNode
*/
