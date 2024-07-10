import { annualData } from "./types";

export default function calculateInvestmentResults(initialInvestment: number, annualInvestment: number, duration: number, expectedReturn: number) {
  const annualData: annualData[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: parseFloat((interestEarnedInYear).toFixed(2)),
      valueEndOfYear: parseFloat((investmentValue).toFixed(2)),
      annualInvestment: parseFloat((annualInvestment).toFixed(2)),
      totalInterest: parseFloat((totalInterest).toFixed(2)),
      totalAmountInvested: parseFloat((initialInvestment + annualInvestment * year).toFixed(2)),
    });
  }

  return annualData;
}
