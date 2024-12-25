import { useEffect, useState } from "react";
import usePages from "../../hooks/usePages";
import Step from "./Step";
import data from "../../data";

function SideBar() {
  const currentPageNo = usePages((state) => state.pageNo);
  const setPage = usePages((state) => state.setPage);

  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const currentPageData = data.find((page) => page.pageNo === currentPageNo);
    setPageData(currentPageData || {});
  }, [currentPageNo]);

  return (
    <div className="w-[30%] h-full pt-5 pb-20 px-5 bg-[#304767] text-white flex flex-col gap-10">
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
            state={e.pageNo === currentPageNo ? "active" : e.pageNo < currentPageNo ? "complete" : null}
            handle={() => setPage(e.pageNo)}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
