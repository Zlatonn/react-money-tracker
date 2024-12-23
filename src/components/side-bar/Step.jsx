function Step() {
  return (
    <div className="relative flex items-center gap-3 cursor-pointer ">
      <div className="w-7 h-7 border-2 border-white rounded-full flex justify-center items-center text-sm text-white">1</div>
      <span>some menu</span>
      <div className="absolute left-[13px] top-7 h-16 border-l-2 border-white"></div>
    </div>
  );
}

export default Step;
