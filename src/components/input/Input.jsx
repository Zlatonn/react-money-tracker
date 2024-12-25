// eslint-disable-next-line react/prop-types
function Input({ type, value }) {
  return (
    <>
      <input type={type} className="border-[1px] rounded-md px-3 py-2" value={value} min={0} />
    </>
  );
}

export default Input;
