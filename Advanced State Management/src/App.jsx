import { useRef } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import NotificationModal from './components/NotificationModal.jsx';

import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  const notificationRef = useRef()
  console.log(notificationRef.current)
  
  return (
    <CartContextProvider>
      <Header/>
      <Shop>
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      <NotificationModal ref={notificationRef} />
    </CartContextProvider>
  );
}

export default App;
