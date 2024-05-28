import { createContext,  } from "react";

//---------- Components -------------
import Meals from "./components/Meals";
import Header from "./components/Header";

import CartContextProvider from "./store/CartContext";

function App() {
  
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
