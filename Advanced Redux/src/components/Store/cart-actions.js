import { useDispatch } from "react-redux";
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export function fetchCartData() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reduxcart-1b721-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching data failed");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        ...cartData
      }))

    } catch (error) {
        dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Sendig cart data failed :(",
            })
          );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    async function sendRequest() {
      const response = await fetch(
        "https://reduxcart-1b721-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sendig cart data failed :(");
      }
    }

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfuly!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sendig cart data failed :(",
        })
      );
    }
  };
}
