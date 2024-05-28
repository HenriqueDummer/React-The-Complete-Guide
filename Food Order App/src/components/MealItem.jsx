import { useContext } from "react"

import { CartContext } from "../store/CartContext"

import { currencyFormatter } from "../util/formatting"

const MealItem = ({meal}) => {
    const {items, handleAddItem} = useContext(CartContext)

    
  return (
    <li className='meal-item'>
        <article>
            <img src={`../backend/public/${meal.image}`} alt="" />
            <div>
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className='meal-item-actions'>
                <button onClick={() => handleAddItem(meal)} className='button'>Add to Cart</button>
            </p>
        </article>
    </li>
  )
}

export default MealItem