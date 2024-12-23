import SideBar from "./components/side-bar/SideBar";
import Content from "./components/content/Content";
import Display from "./components/display/Display";

function App() {
  return (
    <div className="m-0 p-0 box-border min-h-[100vh] w-[100vw] bg-gray-200 flex justify-center items-center">
      <div className="w-[60%] bg-white rounded-xl flex justify-between overflow-hidden">
        <SideBar />
        <Content />
        <Display />
      </div>
    </div>
  );
}

export default App;
