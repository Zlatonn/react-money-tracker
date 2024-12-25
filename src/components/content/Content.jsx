import { useEffect, useState } from "react";
import data from "../../data";
import usePages from "../../hooks/usePages";
import Button from "../button/Button";
import Input from "../input/input";

function Content() {
  const currentPageNo = usePages((state) => state.pageNo);
  const prevPage = usePages((state) => state.prevPage);
  const nextPage = usePages((state) => state.nextPage);

  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const currentPage = data.find((page) => page.pageNo === currentPageNo);
    setPageData(currentPage || {});
  }, [currentPageNo]);

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
              <Input type={detail.type} value={0} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start gap-5 items-center mt-10">
        <Button name="Prev" handle={currentPageNo > 0 ? prevPage : null} />
        <Button name="Next" handle={currentPageNo < data.length - 1 ? nextPage : null} />
      </div>
    </div>
  );
}

export default Content;
