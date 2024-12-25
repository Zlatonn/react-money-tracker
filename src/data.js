const data = [
  {
    pageNo: 0,
    pageName: "Income",
    suggestText: "Enter your income details, including regular earnings and additional sources, for accurate tracking.",
    details: [
      { id: 1, name: "Salary", type: "month" },
      { id: 2, name: "Extra", type: "month" },
      { id: 3, name: "Bonus", type: "year" },
      { id: 4, name: "Investment", type: "year" },
      { id: 5, name: "Other", type: "month" },
    ],
    line: true,
  },
  {
    pageNo: 1,
    pageName: "Expense",
    suggestText: "Provide expense details, such as food, accommodation, and other costs, for complete documentation.",
    details: [
      { id: 1, name: "Housing", type: "month" },
      { id: 2, name: "Food", type: "month" },
      { id: 3, name: "Trasport", type: "month" },
      { id: 4, name: "Healthcare", type: "month" },
      { id: 5, name: "Education", type: "month" },
      { id: 6, name: "Other", type: "month" },
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
