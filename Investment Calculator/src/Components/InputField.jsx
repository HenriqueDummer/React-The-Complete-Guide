const InputField = ({ onChange, userInput }) => {
  const handleChange = () => {
    let id = event.target.id;
    onChange((prev) => {
      return {
        ...prev,
        [id]: Number(event.target.value),
      };
    });
  };

  return (
    <form action="">
      <div className="input_group">
        <div className="input_box">
          <label for="initialInvestment">INITIAL INVESTMENT</label>
          <input
            onChange={handleChange}
            id="initialInvestment"
            type="number"
            required
            value={userInput.initialInvestment}
          />
        </div>
        <div className="input_box">
          <label for="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            onChange={handleChange}
            id="annualInvestment"
            type="number"
            required
            value={userInput.annualInvestment}
          />
        </div>
      </div>
      <div className="input_group">
        <div className="input_box">
          <label for="expectedReturn">EXPECTED RETURN</label>
          <input
            onChange={handleChange}
            id="expectedReturn"
            type="number"
            required
            value={userInput.expectedReturn}
          />
        </div>
        <div className="input_box">
          <label for="duration">DURATION</label>
          <input
            onChange={handleChange}
            id="duration"
            type="number"
            required
            value={userInput.duration}
          />
        </div>
      </div>
    </form>
  );
};

export default InputField;
