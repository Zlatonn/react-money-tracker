import Button from "../button/Button";
import Input from "../input/input";

function Content() {
  return (
    <div className="w-[55%] py-5 px-5 flex flex-col justify-between">
      <p>😊</p>
      <p className="text-xl font-bold">Lorem ipsum dolor sit amet.</p>
      <p className="font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, harum!</p>

      <div className="w-full grid grid-cols-2 gap-x-5 gap-y-10">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
      <div className="flex justify-start gap-5 items-center">
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default Content;
