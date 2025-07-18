import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import AboutPage from "./pages/about/about";

function App() {
  return (
    <div className="flex flex-col flex-center h-screen bg-teal-100">
      <Header />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/about" element={<AboutPage />} />
        <Route to="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
