import { useContext, useRef } from "react";

import { CartContext } from "../store/CartContext";

import CartModal from "./CartModal";
import CheckoutModal from "./CheckoutModal";

const Header = () => {
  const cartModal = useRef()
  const checkoutModal = useRef()

  const {items} = useContext(CartContext)

  function handleOpenCartModal(){
    cartModal.current.open()
  }

  function handleOpenCheckoutModal(){
    checkoutModal.current.open()
  }

  return (
    <header id="main-header">
      <CartModal onOpenCheckout={handleOpenCheckoutModal} items={items} ref={cartModal} />
      <CheckoutModal items={items} ref={checkoutModal} />
      <div id="title">
        <img src="../public/logo.jpg" alt="" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button onClick={handleOpenCartModal} className="text-button">
          <p>{`Cart (${items.length})`}</p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
