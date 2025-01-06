import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFinance = create(
  persist(
    (set, get) => ({
      // store
      income: {},
      expense: {},

      // function update store
      updateIncome: (id, value, per) =>
        set((state) => ({
          income: { ...state.income, [id]: { value, per } },
        })),

      updateExpense: (id, value, per) =>
        set((state) => ({
          expense: { ...state.expense, [id]: { value, per } },
        })),

      // function calculate store
      getIncomeMonthly: () =>
        Object.values(get().income)
          .filter((item) => item.per === "month")
          .map((item) => item.value || 0)
          .reduce((acc, curr) => acc + curr, 0),

      getIncomeAnnual: () =>
        Object.values(get().income)
          .filter((item) => item.per === "year")
          .map((item) => item.value || 0)
          .reduce((acc, curr) => acc + curr, 0) +
        get().getIncomeMonthly() * 12,

      getExpenseMonthly: () =>
        Object.values(get().expense)
          .filter((item) => item.per === "month")
          .map((item) => item.value || 0)
          .reduce((acc, curr) => acc + curr, 0),

      getExpenseAnnual: () =>
        Object.values(get().expense)
          .filter((item) => item.per === "year")
          .map((item) => item.value || 0)
          .reduce((acc, curr) => acc + curr, 0) +
        get().getExpenseMonthly() * 12,

      getCashFlowMonthly: () => get().getIncomeMonthly() - get().getExpenseMonthly(),

      getCashFlowAnnual: () => get().getIncomeAnnual() - get().getExpenseAnnual(),
    }),
    {
      name: "finance-storage",
    }
  )
);

export default useFinance;
