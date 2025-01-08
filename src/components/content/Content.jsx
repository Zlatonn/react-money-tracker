import { useCallback, useMemo } from "react";
import pagesData from "../../pagesData";
import usePageNo from "../../hooks/usePageNo";
import Button from "../button/Button";
import Input from "../input/Input";
import useFinance from "../../hooks/useFinance";
import Chart from "react-google-charts";

function Content() {
  // import usepageNo from state management
  const pageNo = usePageNo((state) => state.pageNo);
  const prevPage = usePageNo((state) => state.prevPage);
  const nextPage = usePageNo((state) => state.nextPage);

  // update current page data when pageNo change
  // useMemo to memorize result of function
  const pageData = useMemo(() => {
    return pagesData.find((page) => page.pageNo === pageNo) || {};
  }, [pageNo]);

  // import useFinance from statemanagement
  // use object destructure
  const { income, expense, updateIncome, updateExpense, clearData, getIncomeAnnual, getCashFlowAnnual } = useFinance();

  // function handle input
  // useCallback to memorize the function and avoid creating a new instance on every re-render
  const handleIncomeInput = useCallback(
    (id, value, per) => {
      updateIncome(id, value, per);
    },
    [updateIncome]
  );

  const handleExpenseInput = useCallback(
    (id, value, per) => {
      updateExpense(id, value, per);
    },
    [updateExpense]
  );

  // //update income & cash flow per annual
  const incomeAnnual = getIncomeAnnual();
  const cashFlowAnnual = getCashFlowAnnual();

  //population group data
  const populationGroup = useMemo(
    () => [
      { name: "Bottom", ratio: 20, text: "This group of the population has an average annual income of less than 100,000 bath" },
      { name: "Second", ratio: 20, text: "This group of the population has an average annual income of 100,000 - 200,000 baht." },
      { name: "Middle", ratio: 20, text: "This group of the population has an average annual income of 200,000 - 400,000 baht." },
      { name: "Fourth", ratio: 20, text: "This group of the population has an average annual income of 400,000 - 800,000 baht." },
      { name: "Top", ratio: 20, text: "This group of the population has an average annual income of more than 800,000 baht." },
    ],
    []
  );

  //function find current group
  const findPopulationGroup = (incomeAnnual) => {
    if (incomeAnnual <= 100000) {
      return "Bottom";
    } else if (incomeAnnual > 100000 && incomeAnnual <= 200000) {
      return "Second";
    } else if (incomeAnnual > 200000 && incomeAnnual <= 400000) {
      return "Middle";
    } else if (incomeAnnual > 400000 && incomeAnnual <= 800000) {
      return "Fourth";
    } else if (incomeAnnual > 800000) {
      return "Top";
    }
  };

  // update curr group
  const currPopulationGroup = useMemo(() => {
    return populationGroup.find((group) => group.name === findPopulationGroup(incomeAnnual));
  }, [populationGroup, incomeAnnual]);

  // data fot  create google chart colunm type
  const populationChart = [
    ["Element", "population(%)", { role: "style" }],
    [populationGroup[0].name, populationGroup[0].ratio, currPopulationGroup?.name === populationGroup[0].name ? "" : "#e5e4e2"],
    [populationGroup[1].name, populationGroup[1].ratio, currPopulationGroup?.name === populationGroup[1].name ? "" : "#e5e4e2"],
    [populationGroup[2].name, populationGroup[2].ratio, currPopulationGroup?.name === populationGroup[2].name ? "" : "#e5e4e2"],
    [populationGroup[3].name, populationGroup[3].ratio, currPopulationGroup?.name === populationGroup[3].name ? "" : "#e5e4e2"],
    [populationGroup[4].name, populationGroup[4].ratio, currPopulationGroup?.name === populationGroup[4].name ? "" : "#e5e4e2"],
  ];

  return (
    <div className="w-[57%] sm:w-[70%] lg:w-[47%] xl:w-[50%] py-5 px-5 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <p>😊</p>
        <p className="text-xl font-bold">{pageData.pageName}</p>
        <p className="text-sm font-light opacity-50 whitespace-nowrap text-ellipsis overflow-hidden sm:whitespace-normal sm:text-wrap sm:overflow-visible">
          {pageData.suggestText}
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 sm:gap-y-10">
          {pageData?.details?.map((detail) => (
            <div key={detail.id} className="text-sm flex flex-col gap-1">
              <p className="whitespace-nowrap text-ellipsis overflow-hidden sm:whitespace-normal sm:text-wrap sm:overflow-visible">
                {detail.name}
                <span className="text-blue-500">{` / ${detail.per}`}</span>
              </p>
              <Input
                type={detail.type}
                value={pageNo === 0 ? income[detail.id]?.value : expense[detail.id]?.value}
                onChange={
                  pageNo === 0
                    ? (value) => handleIncomeInput(detail.id, value, detail.per)
                    : (value) => handleExpenseInput(detail.id, value, detail.per)
                }
              />
            </div>
          ))}
        </div>
        {pageNo === pagesData.length - 1 && (
          <div className="flex flex-col gap-3 item-center">
            <p className="text-sm font-light">
              You earn a <span className="font-bold">total income of {incomeAnnual.toLocaleString()} bath per year</span>, with an{" "}
              <span className="font-bold">annual profit of {cashFlowAnnual.toLocaleString()} bath</span> remaining at the end of each year.
            </p>
            <div className="hidden sm:block">
              <Chart chartType="ColumnChart" width="100%" height="100%" data={populationChart} />
            </div>
            <p className="text-xs hidden sm:block">
              <b>
                {currPopulationGroup?.name} {currPopulationGroup?.ratio}%:
              </b>
              {currPopulationGroup?.text}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-start gap-2 sm:gap-5 items-center mt-10">
        <Button name="Prev" handle={pageNo > 0 ? prevPage : null} />
        <Button name="Next" handle={pageNo < pagesData.length - 1 ? nextPage : null} />
        <Button name="Clear" handle={clearData} />
      </div>
    </div>
  );
}

export default Content;
