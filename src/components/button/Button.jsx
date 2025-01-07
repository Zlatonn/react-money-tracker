// eslint-disable-next-line react/prop-types
function Button({ name, handle }) {
  return (
    <button
      onClick={handle}
      className={`px-6 sm:px-7 py-1 ${
        name === "Clear" ? " bg-orange-500 hidden sm:block" : "bg-blue-500"
      } text-white rounded-md cursor-pointer hover:scale-105 duration-500`}
    >
      {name}
    </button>
  );
}

export default Button;
