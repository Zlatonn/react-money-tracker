function Display() {
  return (
    <div className="w-[15%] py-20 px-5 flex flex-col gap-5 text-sm">
      <div>
        <p className="underline">Mothly</p>
        <p>Income:</p>
        <p>Expenese:</p>
      </div>
      <div>
        <p className="underline">Annual</p>
        <p>Income:</p>
        <p>Expenese:</p>
      </div>
    </div>
  );
}

export default Display;
