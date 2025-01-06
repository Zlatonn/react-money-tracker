import { useEffect, useState } from "react";
import useFinance from "../../hooks/useFinance";

function Display() {
  // import useFinance from statemanagement
  const income = useFinance((state) => state.income);
  const expense = useFinance((state) => state.expense);

  const getIncomeMonthly = useFinance((state) => state.getIncomeMonthly);
  const getIncomeAnnual = useFinance((state) => state.getIncomeAnnual);
  const getExpenseMonthly = useFinance((state) => state.getExpenseMonthly);
  const getExpenseAnnual = useFinance((state) => state.getExpenseAnnual);

  //create local state
  const [incomMonthly, setIncomeMonthly] = useState(0);
  const [incomeAnnual, setIncomeAnnual] = useState(0);
  const [expenseMonthly, setExpenseMonthly] = useState(0);
  const [expenseAnnual, setExpenseAnnual] = useState(0);

  useEffect(() => {
    setIncomeMonthly(getIncomeMonthly);
    setIncomeAnnual(getIncomeAnnual);
  }, [income, getIncomeMonthly, getIncomeAnnual]);

  useEffect(() => {
    setExpenseMonthly(getExpenseMonthly);
    setExpenseAnnual(getExpenseAnnual);
  }, [expense, getExpenseMonthly, getExpenseAnnual]);

  const cashFlowMonthly = incomMonthly - expenseMonthly;
  const cashFlowAnnual = incomeAnnual - expenseAnnual;

  // function return sign number
  const signStatus = (number) => {
    return number >= 0 ? true : false;
  };

  return (
    <div className="w-[15%] py-20 px-5 flex flex-col gap-5 text-sm">
      <div>
        <p className="underline font-bold">Mothly</p>
        <p>
          Income: <span className="text-green-500">{incomMonthly.toLocaleString()}</span>
        </p>
        <p>
          Expenese: <span className="text-red-500">{expenseMonthly.toLocaleString()}</span>
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
          Income: <span className="text-green-500">{incomeAnnual.toLocaleString()}</span>
        </p>
        <p>
          Expenese: <span className="text-red-500">{expenseAnnual.toLocaleString()}</span>
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
