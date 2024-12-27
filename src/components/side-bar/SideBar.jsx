import { useEffect, useState } from "react";
import Step from "./Step";
import data from "../../data";

import usePageNo from "../../hooks/usePagesNo";

function SideBar() {
  const currPageNo = usePageNo((state) => state.pageNo);
  const setPage = usePageNo((state) => state.setPage);

  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const currPageData = data.find((page) => page.pageNo === currPageNo);
    setPageData(currPageData || {});
  }, [currPageNo]);

  return (
    <div className="w-[30%] min-h-full pt-5 pb-20 px-5 bg-[#304767] text-white flex flex-col gap-10">
      <p className="text-xl">💰 react money tracker</p>
      <div className="flex flex-col gap-3">
        <p className="text-xl">Step {pageData.pageNo + 1}</p>
        <p className="text-sm opacity-80">{pageData.suggestText}</p>
      </div>
      <div className="flex flex-col gap-16">
        {data.map((e) => (
          <Step
            key={e.pageNo}
            pageNo={e.pageNo}
            name={e.pageName}
            line={e.line}
            state={e.pageNo === currPageNo ? "active" : e.pageNo < currPageNo ? "complete" : null}
            handle={() => setPage(e.pageNo)}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
