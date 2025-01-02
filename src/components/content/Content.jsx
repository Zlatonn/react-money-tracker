import { useEffect, useState } from "react";
import pagesData from "../../pagesData";
import usePageNo from "../../hooks/usePages";
import Button from "../button/Button";
import Input from "../input/input";

function Content() {
  // import usepageNo from state management
  const pageNo = usePageNo((state) => state.pageNo);
  const prevPage = usePageNo((state) => state.prevPage);
  const nextPage = usePageNo((state) => state.nextPage);

  // create state for current page data
  const [pageData, setPageData] = useState({});

  // update current page data when pageNo change
  useEffect(() => {
    const currentPage = pagesData.find((page) => page.pageNo === pageNo);
    setPageData(currentPage || {});
  }, [pageNo]);

  return (
    <div className="w-[55%] py-5 px-5 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <p>😊</p>
        <p className="text-xl font-bold">{pageData.pageName}</p>
        <p className="text-sm font-light opacity-50">{pageData.suggestText}</p>
        <div className="w-full grid grid-cols-2 gap-x-5 gap-y-10">
          {pageData?.details?.map((detail) => (
            <div key={detail.id} className="text-sm flex flex-col gap-1">
              <p>
                {detail.name}
                <span className="text-blue-500">{` / ${detail.per}`}</span>
              </p>
              <Input type={detail.type} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start gap-5 items-center mt-10">
        <Button name="Prev" handle={pageNo > 0 ? prevPage : null} />
        <Button name="Next" handle={pageNo < pagesData.length - 1 ? nextPage : null} />
      </div>
    </div>
  );
}

export default Content;
