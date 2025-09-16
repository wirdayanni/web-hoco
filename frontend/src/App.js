import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar2.jsx";
import Home from "./pages/Home.jsx";
import Reservation from "./pages/Reservation.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MenuList from "./pages/MenuList.jsx";
import EventList from "./pages/EventList.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
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