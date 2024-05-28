import React from "react";
import { useContext, forwardRef, useRef, useImperativeHandle } from "react";

import { currencyFormatter } from "../util/formatting";

import { CartItem } from "./CartItem";

const CartModal = forwardRef(function Modal({ onOpenCheckout ,items }, ref) {
  const dialog = useRef();

  const totalPrice = items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  function goToCheckout(){
    dialog.current.close()
    onOpenCheckout()
  }

  return (
    <dialog className="cart modal" ref={dialog}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      {totalPrice > 0 && (
        <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      )}
      <p className="modal-actions">
        <button onClick={() => dialog.current.close()} className="text-button">
          Close
        </button>
        {items.length > 0 && <button className="button" onClick={goToCheckout}>Go to Checkout</button>}
      </p>
    </dialog>
  );
});

export default CartModal;
