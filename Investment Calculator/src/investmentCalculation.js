export default function calculateInvestments({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualValue = [];
  let investmentValue = 0,
    totalInterest = 0,
    investedCapital = initialInvestment;

  for (let index = 0; index < duration; index++) {
    investedCapital += annualInvestment;
    let interestYear = investedCapital * (expectedReturn / 100);
    totalInterest += interestYear;
    investmentValue += investedCapital + totalInterest;

    annualValue.push({
      investmentValue,
      interestYear,
      totalInterest,
      investedCapital,
    });
  }

  console.log(annualValue);
  return annualValue;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
