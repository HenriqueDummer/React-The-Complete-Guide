import React from 'react'
import { useDispatch } from "react-redux";

import { loginActions } from '../store/auth';

const Header = () => {

  const dispatch = useDispatch()

  function handleLogin(e){
    e.preventDefault()

    dispatch(loginActions.login())
  }

  return (
    <div className='login_container'>
        <form  onSubmit={(e) => handleLogin(e)}>
            <p>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" />
            </p>
            <p>
            <label htmlFor="password">Password</label>
            <input id='password' type="password" />
            </p>

            <button>Login</button>    
        </form>
    </div>
  )
}

export default Header