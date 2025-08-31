import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";

function Dashboard() {
  const [sideBarSideLength, setSideBarSideLength] = useState("-left-56 w-0");
  return (
    <div className="flex h-screen w-full">
      <div
        className={`absolute md:relative bg-red-500 h-screen ${sideBarSideLength} transition-all duration-300`}
      >
        <div className="flex items-center justify-end">
          <div>
            <AiOutlineClose
              onClick={() => setSideBarSideLength("-left-56 w-0")}
            />
          </div>
        </div>
        <h1>THe side bar</h1>
      </div>
      <div className="flex-1 h-screen">
        <div className="flex items-center justify-between">
          <div className="flex items-center border-b border-gray-300 p-4 w-full">
            {sideBarSideLength === "-left-56 w-0" ? (
              <FaBars
                onClick={() => setSideBarSideLength("left-0 w-56")}
                className="text-lg "
              />
            ) : (
              <AiOutlineClose
                onClick={() => setSideBarSideLength("-left-56 w-0")}
              />
            )}
            <h1 className="text-2xl ml-6">PSDA contribution Dashboard</h1>
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
