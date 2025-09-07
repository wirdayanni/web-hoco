import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Reservasi from "./pages/Reservasi.jsx"
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* supaya konten tidak ketutup navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;