import { useMemo } from "react";
import usePageNo from "../../hooks/usePageNo";
import Step from "./Step";
import pagesData from "../../pagesData";

function SideBar() {
  // import usepageNo from state management
  const pageNo = usePageNo((state) => state.pageNo);
  const setPageNo = usePageNo((state) => state.setPageNo);

  // update current page data when pageNo change
  const pageData = useMemo(() => {
    return pagesData.find((page) => page.pageNo === pageNo) || {};
  }, [pageNo]);

  return (
    <div className="w-[43%] sm:w-[30%] min-h-full pt-5 pb-20 px-5 bg-[#304767] text-white flex flex-col gap-10">
      <p className="text-md lg:text-lg">💰 react money tracker</p>
      <div className="flex flex-col gap-3">
        <p className="text-xl">Step {pageData.pageNo + 1}</p>
        <p className="text-sm opacity-80 whitespace-nowrap text-ellipsis overflow-hidden sm:whitespace-normal sm:text-wrap sm:overflow-visible">
          {pageData.suggestText}
        </p>
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
