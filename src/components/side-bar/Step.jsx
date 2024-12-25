// eslint-disable-next-line react/prop-types
function Step({ pageNo, name, line, state, handle }) {
  return (
    <div className="relative flex items-center gap-3 cursor-pointer " onClick={handle}>
      <div
        className={`w-7 h-7 border-2 rounded-full flex justify-center items-center text-sm ${
          state === "active"
            ? `bg-[#304767] text-white border-white`
            : state === "complete"
            ? `bg-white text-[#304767] border-white`
            : `bg-[#304767] text-white border-white opacity-10`
        } `}
      >
        {pageNo + 1}
      </div>
      <span className={`${state ? `opacity-none` : `opacity-10`}`}>{name}</span>
      {line ? (
        <div
          className={`absolute left-[13px] top-7 h-16 border-l-2 border-white cursor-default ${
            state === "complete" ? `opacity-none` : `opacity-10`
          }`}
        ></div>
      ) : null}
    </div>
  );
}

export default Step;
