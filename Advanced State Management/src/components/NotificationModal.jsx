import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const NotificationModal = forwardRef(function Modal(undefined, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.ShowModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} id="notification-modal">
      <h3>Product added to cart :)</h3>
      <form method="dialog">
        <button></button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default NotificationModal;
