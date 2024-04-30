import calculateInvestments from "../investmentCalculation";
import { formatter } from "../investmentCalculation";

const Returns = ({ userInput }) => {
  const results = calculateInvestments(userInput);

  return (
    <table>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      {results.map((result, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{formatter.format(result.investmentValue)}</td>
            <td>{formatter.format(result.interestYear)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.investedCapital)}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Returns;
