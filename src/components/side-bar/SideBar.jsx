import { useEffect, useState } from "react";
import usePageNo from "../../hooks/usePages";
import Step from "./Step";
import pagesData from "../../pagesData";

function SideBar() {
  // import usepageNo from state management
  const pageNo = usePageNo((state) => state.pageNo);
  const setPageNo = usePageNo((state) => state.setPage);

  // create state for current page data
  const [pageData, setPageData] = useState({});

  // update current page data when pageNo change
  useEffect(() => {
    const currentPageData = pagesData.find((page) => page.pageNo === pageNo);
    setPageData(currentPageData || {});
  }, [pageNo]);

  return (
    <div className="w-[30%] min-h-full pt-5 pb-20 px-5 bg-[#304767] text-white flex flex-col gap-10">
      <p className="text-xl">💰 react money tracker</p>
      <div className="flex flex-col gap-3">
        <p className="text-xl">Step {pageData.pageNo + 1}</p>
        <p className="text-sm opacity-80">{pageData.suggestText}</p>
      </div>
      <div className="flex flex-col gap-16">
        {pagesData.map((e) => (
          <Step
            key={e.pageNo}
            pageNo={e.pageNo}
            name={e.pageName}
            line={e.line}
            state={e.pageNo === pageNo ? "active" : e.pageNo < pageNo ? "complete" : null}
            handle={() => setPageNo(e.pageNo)}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
