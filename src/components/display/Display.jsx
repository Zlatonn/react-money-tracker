import { useEffect, useState } from "react";
import useFinance from "../../hooks/useFinance";

function Display() {
  // import useFinance from state management
  const income = useFinance((state) => state.income);
  const expense = useFinance((state) => state.expense);
  const getIncomeMonthly = useFinance((state) => state.getIncomeMonthly);
  const getIncomeAnnual = useFinance((state) => state.getIncomeAnnual);
  const getExpenseMonthly = useFinance((state) => state.getExpenseMonthly);
  const getExpenseAnnual = useFinance((state) => state.getExpenseAnnual);
  const getCashFlowMonthly = useFinance((state) => state.getCashFlowMonthly);
  const getCashFlowAnnual = useFinance((state) => state.getCashFlowAnnual);

  //create local state
  const [incomMonthly, setIncomeMonthly] = useState(0);
  const [incomeAnnual, setIncomeAnnual] = useState(0);
  const [expenseMonthly, setExpenseMonthly] = useState(0);
  const [expenseAnnual, setExpenseAnnual] = useState(0);
  const [cashFlowMonthly, setCashFlowMonthly] = useState(0);
  const [cashFlowAnnual, setCashFlowAnnual] = useState(0);

  useEffect(() => {
    setIncomeMonthly(getIncomeMonthly);
    setIncomeAnnual(getIncomeAnnual);
    setCashFlowMonthly(getCashFlowMonthly);
    setCashFlowAnnual(getCashFlowAnnual);
  }, [income, getIncomeMonthly, getIncomeAnnual, getCashFlowMonthly, getCashFlowAnnual]);

  useEffect(() => {
    setExpenseMonthly(getExpenseMonthly);
    setExpenseAnnual(getExpenseAnnual);
    setCashFlowMonthly(getCashFlowMonthly);
    setCashFlowAnnual(getCashFlowAnnual);
  }, [expense, getExpenseMonthly, getExpenseAnnual, getCashFlowMonthly, getCashFlowAnnual]);

  // function return sign number
  const signStatus = (number) => {
    return number >= 0 ? true : false;
  };

  return (
    <div className="w-[20%] py-20 px-5 flex flex-col gap-5 text-sm">
      <div className="p-3 rounded-md bg-gray-100">
        <p className="font-bold text-lg ">Mothly</p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <p className="font-light">income</p>
            <p className="text-green-500">+฿{incomMonthly.toLocaleString()}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-light">expense</p>
            <p className="text-red-500">-฿{expenseMonthly.toLocaleString()}</p>
          </div>

          <div className="flex justify-between items-end font-bold text-[#304767]">
            <p>total</p>
            <p>
              {signStatus(cashFlowAnnual) ? " +฿" : " -฿"}
              {Math.abs(cashFlowMonthly).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-md bg-gray-100">
        <p className="font-bold text-lg">Annual</p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <p className="font-light">income</p>
            <p className="text-green-500">+฿{incomeAnnual.toLocaleString()}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-light">expense</p>
            <p className="text-red-500">-฿{expenseAnnual.toLocaleString()}</p>
          </div>

          <div className="flex justify-between items-end font-bold text-[#304767]">
            <p>total</p>
            <p>
              {signStatus(cashFlowAnnual) ? " +฿" : " -฿"}
              {Math.abs(cashFlowAnnual).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
