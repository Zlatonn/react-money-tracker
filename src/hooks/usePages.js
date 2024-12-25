import { create } from "zustand";

const usePages = create((set) => ({
  pageNo: 0,
  prevPage: () => set((state) => ({ pageNo: state.pageNo - 1 })),
  nextPage: () => set((state) => ({ pageNo: state.pageNo + 1 })),
  setPage: (value) => set({ pageNo: value }),
}));

export default usePages;
