import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Input({ type }) {
  const [inputValue, setInputValue] = useState(0);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input type={type} className="border-[1px] rounded-md px-3 py-2" value={inputValue} onChange={handleInput} min={0} />
    </>
  );
}

export default Input;
