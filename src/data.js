const pages = [
  {
    pageNo: 1,
    pageName: "Income",
    suggestText:
      "Please enter your income details here, such as your regular earnings and any additional sources of income, to ensure accurate recording and tracking.",
    details: [
      { id: 1, name: "Salary", type: "month" },
      { id: 2, name: "Extra", type: "month" },
      { id: 3, name: "Bonus", type: "year" },
      { id: 4, name: "Investment", type: "year" },
      { id: 5, name: "Other", type: "month" },
    ],
  },
  {
    pageNo: 2,
    pageName: "Expense",
    suggestText:
      "Please provide your expense details here, including categories like food, accommodation, and other recurring costs, to ensure that your spending is fully documented.",
    details: [
      { id: 1, name: "Housing", type: "month" },
      { id: 2, name: "Food", type: "month" },
      { id: 3, name: "Trasport", type: "month" },
      { id: 4, name: "Healthcare", type: "month" },
      { id: 5, name: "Education", type: "month" },
      { id: 6, name: "Other", type: "month" },
    ],
  },
  {
    pageNo: 3,
    pageName: "Summary",
    suggestText:
      "Here is a summary of your income and expenses for the specified period, helping you understand your overall financial situation with a clear breakdown of your earnings, spending, and balance.",
    details: [],
  },
];
