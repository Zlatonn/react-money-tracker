import useFinance from "../../hooks/useFinance";

function Display() {
  const income = useFinance((state) => state.income);
  const expense = useFinance((state) => state.expense);

  // Calculation monthly
  const sumIncomMonthly = Object.values(income)
    .filter((item) => item.per === "month")
    .map((item) => item.value || 0)
    .reduce((acc, curr) => acc + curr, 0);

  const sumExpenseMonthly = Object.values(expense)
    .filter((item) => item.per === "month")
    .map((item) => item.value || 0)
    .reduce((acc, curr) => acc + curr, 0);

  const cashFlowMonthly = sumIncomMonthly - sumExpenseMonthly;

  // Calculation Annual
  const sumIncomAnnual =
    Object.values(income)
      .filter((item) => item.per === "year")
      .map((item) => item.value || 0)
      .reduce((acc, curr) => acc + curr, 0) +
    sumIncomMonthly * 12;

  const sumExpenseAnnual =
    Object.values(expense)
      .filter((item) => item.per === "year")
      .map((item) => item.value || 0)
      .reduce((acc, curr) => acc + curr, 0) +
    sumExpenseMonthly * 12;

  const cashFlowAnnual = sumIncomAnnual - sumExpenseAnnual;

  // function return sign number
  const signStatus = (number) => {
    return number >= 0 ? true : false;
  };

  return (
    <div className="w-[15%] py-20 px-5 flex flex-col gap-5 text-sm">
      <div>
        <p className="underline font-bold">Mothly</p>
        <p>
          Income: <span className="text-green-500">{sumIncomMonthly.toLocaleString()}</span>
        </p>
        <p>
          Expenese: <span className="text-red-500">{sumExpenseMonthly.toLocaleString()}</span>
        </p>
        <p>
          Cashflow:
          <span className={`${signStatus(cashFlowMonthly) ? "text-green-500" : "text-red-500"}`}>
            {signStatus(cashFlowMonthly) && " + "}
            {cashFlowMonthly.toLocaleString()}
          </span>
        </p>
      </div>
      <div>
        <p className="underline font-bold">Annual</p>
        <p>
          Income: <span className="text-green-500">{sumIncomAnnual.toLocaleString()}</span>
        </p>
        <p>
          Expenese: <span className="text-red-500">{sumExpenseAnnual.toLocaleString()}</span>
        </p>
        <p>
          Cashflow:
          <span className={`${signStatus(cashFlowAnnual) ? "text-green-500" : "text-red-500"}`}>
            {signStatus(cashFlowAnnual) && " + "}
            {cashFlowAnnual.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Display;
