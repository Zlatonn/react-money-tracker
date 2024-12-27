import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Input({ type, name, placeholder, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      className="border-[1px] rounded-md px-3 py-2"
    />
  );
}

export default Input;
