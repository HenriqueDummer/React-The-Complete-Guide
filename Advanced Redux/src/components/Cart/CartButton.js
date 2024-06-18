import classes from './CartButton.module.css';

import { uiActions } from '../Store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  function handleCartClick(){
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={handleCartClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
