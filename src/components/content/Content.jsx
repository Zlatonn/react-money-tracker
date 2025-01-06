import { useEffect, useState } from "react";
import pagesData from "../../pagesData";
import usePageNo from "../../hooks/usePageNo";
import Button from "../button/Button";
import Input from "../input/input";
import useFinance from "../../hooks/useFinance";
import Chart from "react-google-charts";

function Content() {
  // import usepageNo from state management
  const pageNo = usePageNo((state) => state.pageNo);
  const prevPage = usePageNo((state) => state.prevPage);
  const nextPage = usePageNo((state) => state.nextPage);

  // create local state for current page data
  const [pageData, setPageData] = useState({});

  // update current page data when pageNo change
  useEffect(() => {
    const currentPage = pagesData.find((page) => page.pageNo === pageNo);
    setPageData(currentPage || {});
  }, [pageNo]);

  // import useFinance from statemanagement
  const income = useFinance((state) => state.income);
  const updateIncome = useFinance((state) => state.updateIncome);
  const expense = useFinance((state) => state.expense);
  const updateExpense = useFinance((state) => state.updateExpense);
  const clearData = useFinance((state) => state.clearData);
  const getIncomeAnnual = useFinance((state) => state.getIncomeAnnual);
  const getCashFlowAnnual = useFinance((state) => state.getCashFlowAnnual);

  // function handle input
  const handleIncomeInput = (id, value, per) => {
    updateIncome(id, value, per);
  };

  const handleExpenseInput = (id, value, per) => {
    updateExpense(id, value, per);
  };

  //create local state for summary page
  const [incomeAnnual, setIncomeAnnual] = useState(0);
  const [cashFlowAnnual, setCashFlowAnnual] = useState(0);

  //update income & cash flow per annual
  useEffect(() => {
    setIncomeAnnual(getIncomeAnnual);
  }, [income, getIncomeAnnual]);

  useEffect(() => {
    setCashFlowAnnual(getCashFlowAnnual);
  }, [income, expense, getCashFlowAnnual]);

  //population group data
  const populationGroup = [
    { name: "Bottom", ratio: 20, text: "This group of the population has an average annual income of less than 100,000 bath" },
    { name: "Second", ratio: 20, text: "This group of the population has an average annual income of 100,000 - 200,000 baht." },
    { name: "Middle", ratio: 20, text: "This group of the population has an average annual income of 200,000 - 400,000 baht." },
    { name: "Fourth", ratio: 20, text: "This group of the population has an average annual income of 400,000 - 800,000 baht." },
    { name: "Top", ratio: 20, text: "This group of the population has an average annual income of more than 800,000 baht." },
  ];

  //function find current group
  const findPopulationGroup = () => {
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

  //create local state for current group
  const [currPopulationGroup, setCurrPopulationGroup] = useState({});

  // update curr group
  useEffect(() => {
    const matchedGroup = populationGroup.find((group) => group.name === findPopulationGroup());
    setCurrPopulationGroup(matchedGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incomeAnnual]);

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
    <div className="w-[50%] py-5 px-5 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <p>😊</p>
        <p className="text-xl font-bold">{pageData.pageName}</p>
        <p className="text-sm font-light opacity-50">{pageData.suggestText}</p>
        <div className="w-full grid grid-cols-2 gap-x-5 gap-y-10">
          {pageData?.details?.map((detail) => (
            <div key={detail.id} className="text-sm flex flex-col gap-1">
              <p>
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
            <div>
              <Chart chartType="ColumnChart" width="100%" height="100%" data={populationChart} />
            </div>
            <p className="text-xs">
              <b>
                {currPopulationGroup?.name} {currPopulationGroup?.ratio}%:
              </b>
              {currPopulationGroup?.text}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-start gap-5 items-center mt-10">
        <Button name="Prev" handle={pageNo > 0 ? prevPage : null} />
        <Button name="Next" handle={pageNo < pagesData.length - 1 ? nextPage : null} />
        <Button name="clear" handle={() => clearData()} />
      </div>
    </div>
  );
}

export default Content;
