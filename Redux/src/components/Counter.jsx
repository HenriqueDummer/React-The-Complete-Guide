import React from 'react'

import { counterActions } from '../store/counter'

import { useSelector, connect, useDispatch } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.counter)
    const isCounterVisible = useSelector(state => state.counter.showCounter)
  
    function incrementHandler(){
      dispatch(counterActions.increment())
    }
  
    function increaseHandler() {
      dispatch(counterActions.increase(5))
    }
  
    function decrementHandler(){
      dispatch(counterActions.decrement())
    }
  
    function handleToggle(){
      dispatch(counterActions.toggleCounter())
    }
  
    return (
      <>
       <h1>Redux counter</h1>
       {isCounterVisible && <h2 className='counter'>{counter}</h2>}
       <div className='actions'>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={incrementHandler}>+</button>
       </div>
       <button onClick={handleToggle}>Toggle Counter</button>
      
      </>
    )
}

export default Counter