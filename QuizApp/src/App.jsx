import { useState } from "react";

//------------Data--------------
import questionsData from "./QuestionsData";

//---------Components-----------
import Quiz from "./components/Quiz";
import InitialScreen from "./components/InitialScreen";

function App() {
  return (
    <>
    <main>
      <Quiz />
    </main>
    </>
  );
}

export default App;
