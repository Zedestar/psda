import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import AboutPage from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Announcements from "./pages/announcements/announcements";
import Contributions from "./pages/contirbutions/contributions";
import Contacts from "./pages/contacts/contacts";

function App() {
  return (
    <div className="flex flex-col items-center flex-center h-screen  bg-slate-100">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
