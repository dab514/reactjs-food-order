import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart'

function App() {
  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler =() => {setCartIsShown(true)}

  const hideCartHandler =() => {setCartIsShown(false)}

  return (
    <CartProvider>
      {cartisShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
