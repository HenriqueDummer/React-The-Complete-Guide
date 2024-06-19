import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()

  function handleNavigate(){
    navigate('/products')
  }
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>
        Go to Products
      </button>
    </>
  );
};

export default HomePage;
