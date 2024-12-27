import { create } from "zustand";

const usePageNo = create((set) => ({
  // Page no. section
  pageNo: 0,
  prevPage: () => set((state) => ({ pageNo: state.pageNo - 1 })),
  nextPage: () => set((state) => ({ pageNo: state.pageNo + 1 })),
  setPage: (value) => set({ pageNo: value }),
}));

export default usePageNo;
