import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <NavBar />
      {!isAuthenticated && <Header />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
