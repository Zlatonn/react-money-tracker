import { create } from "zustand";

const usePages = create((set) => ({
  pageNo: 0,
  prevPage: () => set((state) => (state.pageNo > 0 ? { pageNo: state.pageNo - 1 } : { pageNo: state.pageNo })),
  nextPage: () => set((state) => (state.pageNo < 2 ? { pageNo: state.pageNo + 1 } : { pageNo: state.pageNo })),
  setPage: (value) => set({ pageNo: value }),
}));

export default usePages;
