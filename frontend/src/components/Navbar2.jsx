import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const isHome = location.pathname === "/";
  const isWhiteBg = isHome ? isScrolled : true;
  const navTextColor = isHome && !isScrolled ? "text-white" : "text-green-800";

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`w-full flex justify-between items-center px-8 py-3 transition-colors duration-200 ${
          isWhiteBg ? "bg-white" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              src={isWhiteBg ? "/logo.png" : "/logo-white.png"}
              alt="HOCO Coffee"
              className="h-10 w-auto mr-2 transition-all duration-300"
            />
          </div>
        </Link>

        {/* Horizontal Menu (Desktop) */}
        <nav 
            className={`hidden md:flex items-center space-x-8 font-medium transition-colors duration-300 ${navTextColor}`}
        >
          <button
            onClick={handleHomeClick}
            className="relative group text-left"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-800 transition-all group-hover:w-full"></span>
          </button>
    
          <Link to="/about" className="relative group">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-800 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/menu" className="relative group">
            Our Menu
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-800 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/events" className="relative group">
            Event & Partnership
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-800 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-800 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/reservation"
            className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Reservation
          </Link>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className={`md:hidden text-2xl focus:outline-none transition-colors duration-300 ${
            isWhiteBg ? "text-green-800" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-green-900 to-green-700 text-white shadow-2xl z-50 flex flex-col p-8">
          <button
            className="self-end mb-8 bg-white/20 hover:bg-white/30 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center transition"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <div className="flex flex-col space-y-6 text-lg font-medium">
            <button
              onClick={handleHomeClick}
              className="relative group w-fit text-left"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </button>
            <Link
              to="/reservation"
              onClick={() => setIsOpen(false)}
              className="relative group w-fit"
            >
              Reservasi
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="relative group w-fit"
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="relative group w-fit"
            >
              Our Menu
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/events"
              onClick={() => setIsOpen(false)}
              className="relative group w-fit"
            >
              Event & Partnership
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="relative group w-fit"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
