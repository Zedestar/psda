import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";

function Dashboard() {
  const [sideBarSideLength, setSideBarSideLength] = useState("-left-56");
  return (
    <div className="flex h-screen w-full">
      <div
        className={`absolute h-screen w-56 ${sideBarSideLength} transition-all duration-300`}
      >
        <div onClick={() => setSideBarSideLength("-left-56")}>
          <AiOutlineClose />
        </div>
        <h1>THe side bar</h1>
      </div>
      <div className="flex-1 h-screen">
        <div className="flex items-center justify-between">
          <div onClick={() => setSideBarSideLength("left-0")}>
            <FaBars />
          </div>
          <div>
            <h1>PSDA contribution Dashboard</h1>
          </div>
        </div>
        <div className="flex flex-col  h-full">
          <Routes>
            <Route />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
