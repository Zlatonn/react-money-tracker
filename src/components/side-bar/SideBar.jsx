import Step from "./Step";

function SideBar() {
  return (
    <div className="w-[30%] h-full pt-5 pb-20 px-5 bg-[#304767] text-white flex flex-col gap-10">
      <p className="text-xl">💰 react money tracker</p>
      <div className="flex flex-col gap-3">
        <p className="text-xl">Step 1</p>
        <p className="text-sm opacity-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, a!</p>
      </div>
      <div className="flex flex-col gap-16">
        <Step />
        <Step />
        <Step />
      </div>
    </div>
  );
}

export default SideBar;
