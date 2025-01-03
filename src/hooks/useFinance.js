import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFinance = create(
  persist(
    (set) => ({
      // income section
      income: {},
      updateIncome: (id, value, per) =>
        set((state) => ({
          income: { ...state.income, [id]: { value, per } },
        })),

      // expense section
      expense: {},
      updateExpense: (id, value, per) =>
        set((state) => ({
          expense: { ...state.expense, [id]: { value, per } },
        })),
    }),
    {
      name: "finance-storage",
    }
  )
);

export default useFinance;
