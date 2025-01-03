// eslint-disable-next-line react/prop-types
function Input({ type, value = 0, onChange }) {
  // call onChange function from parent
  const handleInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <input type={type} className="border-[1px] rounded-md px-3 py-2" value={value} onChange={handleInput} min={0} />
    </>
  );
}

export default Input;
