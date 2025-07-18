import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";

function App() {
  return (
    <div className="flex flex-col flex-center h-screen bg-teal-100">
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
