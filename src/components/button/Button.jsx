// eslint-disable-next-line react/prop-types
function Button({ name, handle }) {
  return (
    <button
      onClick={handle}
      className={`px-7 py-1 ${
        name === "clear" ? " bg-orange-500" : "bg-blue-500"
      } text-white rounded-md cursor-pointer hover:scale-105 duration-500`}
    >
      {name}
    </button>
  );
}

export default Button;
