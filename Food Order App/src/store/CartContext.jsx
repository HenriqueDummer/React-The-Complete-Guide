import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  const updatedItems = [...state.items];

  const existingCartItemIndex = updatedItems.findIndex(
    (item) => item.id === action.item.id
  );

  const existingCartItem = updatedItems[existingCartItemIndex];

  if (action.type === "ADD_ITEM") {
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { items: updatedItems };
  } else if (action.type === "REMOVE_ITEM") {
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { items: updatedItems };
  }
}

export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  function addItemToCart(item) {
    cartDispatch({
      type: "ADD_ITEM",
      item,
    });
  }

  function removeItemFromCart(item) {
    cartDispatch({
      type: "REMOVE_ITEM",
      item,
    });
  }

  const ctxValue = {
    items: cartState.items,
    handleAddItem: addItemToCart,
    handleRemoveItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
