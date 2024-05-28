import React from "react";
import { useState, useEffect, useContext } from "react";

import useHttp from "../useHttp";

import MealItem from "./MealItem";

import { CartContext } from "../store/CartContext";

const requestConfig = {}

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error
  } = useHttp('http://localhost:3000/meals', requestConfig, [])

  return (
  <ul id="meals">
    {loadedMeals.map((meal) => 
        <MealItem meal={meal}/>
    )}
  </ul>
  )
};

export default Meals;
