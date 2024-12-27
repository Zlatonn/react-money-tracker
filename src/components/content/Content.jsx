import { useEffect, useState } from "react";
import data from "../../data";
import Button from "../button/Button";
import Input from "../input/Input";
import usePageNo from "../../hooks/usePageNo";

function Content() {
  const currPageNo = usePageNo((state) => state.pageNo);
  const prevPage = usePageNo((state) => state.prevPage);
  const nextPage = usePageNo((state) => state.nextPage);

  // Get current data from local storage
  const [currData, setCurrData] = useState(() => {
    const storeData = localStorage.getItem("data");
    return storeData ? JSON.parse(storeData) : data;
  });

  // Update current data to local storage
  useEffect(() => {
    if (currData || currData.length) {
      localStorage.setItem("data", JSON.stringify(currData));
    }
  }, [currData]);

  // Update current page data
  const [currPageData, setCurrPageData] = useState({});

  useEffect(() => {
    if (currData || currData.length) {
      const pageData = currData.find((page) => page.pageNo === currPageNo);
      setCurrPageData(pageData);
    }
  }, [currData, currPageNo]);

  const handleInputChange = (pageNo, detailId, newValue) => {
    setCurrData((prevData) =>
      prevData.map((page) =>
        page.pageNo === pageNo
          ? {
              ...page,
              details: page.details.map((detail) => (detail.id === detailId ? { ...detail, value: newValue } : detail)),
            }
          : page
      )
    );
  };

  if (!currPageData) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-medium text-gray-500">No data available.</p>
      </div>
    );
  }

  return (
    <div className="w-[55%] py-5 px-5 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <p>😊</p>
        <p className="text-xl font-bold">{currPageData.pageName}</p>
        <p className="text-sm font-light opacity-50">{currPageData.suggestText}</p>
        <div className="w-full grid grid-cols-2 gap-x-5 gap-y-10">
          {currPageData?.details?.map((detail) => (
            <div key={detail.id} className="text-sm flex flex-col gap-1">
              <p>
                {detail.name}
                <span className="text-blue-500">{` / ${detail.per}`}</span>
              </p>
              <Input
                type={detail.type}
                name={detail.name}
                value={detail.value}
                onChange={(newValue) => handleInputChange(currPageData.pageNo, detail.id, newValue)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start gap-5 items-center mt-10">
        <Button name="Prev" handle={currPageNo > 0 ? prevPage : null} />
        <Button name="Next" handle={currPageNo < currData.length - 1 ? nextPage : null} />
      </div>
    </div>
  );
}

export default Content;
