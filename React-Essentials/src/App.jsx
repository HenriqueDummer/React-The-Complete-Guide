import { useState } from "react";

//--------Components---------
import Header from "./Components/Header";
import CoreConcepts from "./Components/CoreConcepts";
import Examples from "./Components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
