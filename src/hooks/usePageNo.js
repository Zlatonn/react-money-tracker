import { create } from "zustand";

const usePageNo = create((set) => {
  return {
    pageNo: 0,
    prevPage: () => set((state) => ({ pageNo: state.pageNo - 1 })),
    nextPage: () => set((state) => ({ pageNo: state.pageNo + 1 })),
    setPageNo: (value) => set({ pageNo: value }),
  };
});

export default usePageNo;