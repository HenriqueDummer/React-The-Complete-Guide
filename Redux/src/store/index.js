import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";


// function counterReducer(state = { count: 0, showCounter: true }, action) {
//   if (action.type === "INCREMENT") {
//     return {
//       count: state.count + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       count: state.count + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       count: state.count - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "TOGGLE_COUNTER") {
//     return {
//       count: state.count,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// }

const store = configureStore({
    reducer: {counter: counterSlice, auth: authSlice }
});


export default store;
