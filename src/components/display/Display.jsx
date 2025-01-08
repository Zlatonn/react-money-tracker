import useFinance from "../../hooks/useFinance";

function Display() {
  // import useFinance from state management
  // use object destructure
  const { getIncomeMonthly, getIncomeAnnual, getExpenseMonthly, getExpenseAnnual, getCashFlowMonthly, getCashFlowAnnual } = useFinance();

  // update finace value
  const incomMonthly = getIncomeMonthly();
  const incomeAnnual = getIncomeAnnual();
  const expenseMonthly = getExpenseMonthly();
  const expenseAnnual = getExpenseAnnual();
  const cashFlowMonthly = getCashFlowMonthly();
  const cashFlowAnnual = getCashFlowAnnual();

  // function return sign number
  const signStatus = (number) => {
    return number >= 0 ? true : false;
  };

  return (
    <div className="w-[23%] xl:w-[20%] py-20 px-5 hidden lg:flex flex-col gap-5 text-sm">
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
