import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Reservasi from "./pages/Reservasi.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MenuList from "./pages/MenuList.jsx";
import EventList from "./pages/EventList.jsx";
import EventDetail from "./pages/EventDetail.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* supaya konten tidak ketutup navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuList />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;