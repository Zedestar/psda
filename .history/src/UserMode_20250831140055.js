import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function UserMode() {
  return (
    <div className="flex  h-screen  bg-slate-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default UserMode;
