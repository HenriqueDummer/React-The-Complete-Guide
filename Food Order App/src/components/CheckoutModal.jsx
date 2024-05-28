import { useImperativeHandle, forwardRef, useRef, useState } from "react";

import { currencyFormatter } from "../util/formatting";

import Input from "../UI/Input";

import useHttp from "../useHttp";

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const CheckoutModal = forwardRef(function Modal({ items }, ref) {
  const dialog = useRef();

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttp('http://localhost:3000/orders', requestConfig);

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

  console.log(items)

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }

    sendRequest(
      JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      })
    );
  }



  return (
    <dialog className="cart modal" ref={dialog}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Checkout</h2>
        <p>Total amount {currencyFormatter.format(totalPrice)}</p>

        <Input label={"Full Name"} type={"text"} id={"name"} />
        <Input label={"Email"} type={"email"} id={"email"} />
        <Input label={"Street"} type={"text"} id={"street"} />
        <div className="control-row">
          <Input label={"Postal Code"} type={"number"} id={"postalCode"} />
          <Input label={"City"} type={"text"} id={"city"} />
        </div>

        <p className="modal-actions">
          <button className="text-button" type="button">
            Close
          </button>
          <button className="button">Submit Order</button>
        </p>
      </form>
    </dialog>
  );
});

export default CheckoutModal;
