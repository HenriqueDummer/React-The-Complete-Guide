import { useState } from "react";

import InputField from "./Components/InputField";
import Returns from "./Components/Returns";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  const inputIsValid = userInput.duration > 0

  return (
    <main>
      <InputField onChange={setUserInput} userInput={userInput} />
      {!inputIsValid && <h2>Input Invalid</h2>}
      {inputIsValid && <Returns userInput={userInput} />}
    </main>
  );
}

export default App;
