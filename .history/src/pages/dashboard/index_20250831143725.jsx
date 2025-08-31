import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

function Dashboard() {
  const [sideBarSideLength, setSideBarSideLength] = useState("-left-56");
  return (
    <div className="flex h-screen w-full bg-green-600">
      <div
        className={`bg-rose-500 absolute h-screen w-56 ${sideBarSideLength} transition-al`}
      >
        <div onClick={() => setSideBarSideLength("-left-56")}>
          <AiOutlineClose />
        </div>
        <h1>THe side bar</h1>
      </div>
      <div className="flex-1 h-screen">
        <div>
          <div onClick={() => setSideBarSideLength("left-0")}>
            <FaBars />
          </div>
        </div>
        <div className="flex flex-col bg-teal-700 h-full">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-4">Welcome to your dashboard!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
