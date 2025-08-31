import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import AboutPage from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Announcements from "./pages/announcements/announcements";
import Contributions from "./pages/contirbutions/contributions";
import Contacts from "./pages/contacts/contacts";
import Register from "./pages/register/register.jsx";
import Dashboard from "./pages/dashboard/index.jsx";

function App() {
  return (
    <div className="flex flex-col items-center flex-center h-screen  bg-slate-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
