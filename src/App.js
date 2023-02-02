import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler =() => {setCartIsShown(true)}

  const hideCartHandler =() => {setCartIsShown(false)}

  return (
    <CartProvider>
      {cartisShown && <div>Cart...</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
