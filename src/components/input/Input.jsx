// eslint-disable-next-line react/prop-types
function Input({ type, value = 0, onChange }) {
  const handleInput = (e) => {
    onChange(e.target.value === "" ? 0 : parseFloat(e.target.value));
  };

  return (
    <>
      <input
        type={type}
        className="outline-none border-[1px] rounded-md px-3 py-2 focus:bg-gray-100 "
        value={value}
        onChange={handleInput}
        min={0}
      />
    </>
  );
}

export default Input;
