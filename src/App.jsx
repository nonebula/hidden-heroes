import "./App.css";
import Homepage from "./pages/Homepage/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Discover from "./pages/Discover/Discover.jsx";
import Navbar from "./components/Navbar.jsx";
import Backstory from "./pages/Backstory/Backstory.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/backstory" element={<Backstory />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
