import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { loginActions } from "../store/auth";


const NavBar = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  function handleLogout(){
    dispatch(loginActions.logout())
  }

  return (
    <nav className="nav_bar">
      <h2>Redux Auth</h2>
      {isAuthenticated && (
        <ul>
          <li>
            <a href="#">My Products</a>
          </li>
          <li>
            <a href="#">My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
