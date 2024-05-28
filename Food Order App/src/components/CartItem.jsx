import { useContext } from "react";

import { CartContext } from "../store/CartContext";

import { currencyFormatter } from "../util/formatting";

export const CartItem = ({item}) => {
    const {handleAddItem, handleRemoveItem} = useContext(CartContext)
  return (
    <li className="cart-item">
      <p>{`${item.name} - ${item.quantity} x ${currencyFormatter.format(item.price)}`}</p>
      <p className="cart-item-actions">
        <button onClick={() => handleRemoveItem(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleAddItem(item)}>+</button>
      </p>
    </li>
  );
};
