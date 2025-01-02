const pagesData = [
  {
    pageNo: 0,
    pageName: "Income",
    suggestText: "Enter your income details, including regular earnings and additional sources, for accurate tracking.",
    details: [
      { id: 1, name: "Salary", per: "month", type: "number" },
      { id: 2, name: "Extra", per: "month", type: "number" },
      { id: 3, name: "Bonus", per: "year", type: "number" },
      { id: 4, name: "Investment", per: "year", type: "number" },
      { id: 5, name: "Other", per: "month", type: "number" },
    ],
    line: true,
  },
  {
    pageNo: 1,
    pageName: "Expense",
    suggestText: "Provide expense details, such as food, accommodation, and other costs, for complete documentation.",
    details: [
      { id: 1, name: "Housing", per: "month", type: "number" },
      { id: 2, name: "Food", per: "month", type: "number" },
      { id: 3, name: "Trasport", per: "month", type: "number" },
      { id: 4, name: "Healthcare", per: "month", type: "number" },
      { id: 5, name: "Education", per: "month", type: "number" },
      { id: 6, name: "Other", per: "month", type: "number" },
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

export default pagesData;