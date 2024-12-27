const data = [
  {
    pageNo: 0,
    pageName: "Income",
    suggestText: "Enter your income details, including regular earnings and additional sources, for accurate tracking.",
    details: [
      { id: "income1", name: "Salary", per: "month", type: "number", value: 0 },
      { id: "income2", name: "Extra", per: "month", type: "number", value: 0 },
      { id: "income3", name: "Bonus", per: "year", type: "number", value: 0 },
      { id: "income4", name: "Investment", per: "year", type: "number", value: 0 },
      { id: "income5", name: "Other", per: "month", type: "number", value: 0 },
    ],
    line: true,
  },
  {
    pageNo: 1,
    pageName: "Expense",
    suggestText: "Provide expense details, such as food, accommodation, and other costs, for complete documentation.",
    details: [
      { id: "expense1", name: "Housing", per: "month", type: "number", value: 0 },
      { id: "expense2", name: "Food", per: "month", type: "number", value: 0 },
      { id: "expense3", name: "Trasport", per: "month", type: "number", value: 0 },
      { id: "expense4", name: "Healthcare", per: "month", type: "number", value: 0 },
      { id: "expense5", name: "Education", per: "month", type: "number", value: 0 },
      { id: "expense16", name: "Other", per: "month", type: "number", value: 0 },
    ],
    line: true,
  },
  {
    pageNo: 2,
    pageName: "Summary",
    suggestText: "View a summary of your income and expenses with a clear breakdown of earnings, spending, and balance.",
    details: [],
    line: false,
  },
];

export default data;
