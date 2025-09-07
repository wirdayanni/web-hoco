import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
  <div className="container mx-auto flex justify-between items-center px-1 py-4">
    {/* Logo */}
    <Link to="/">
    <div className="flex items-center">
      <img src="/logo.png" alt="HOCO Coffee" className="h-10 w-auto mr-2" />
    </div>
    </Link>

    {/* Buttons */}
    <div className="flex items-center space-x-4">
      <Link
        to="/reservasi"
        className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
      >
        Reservation
      </Link>
      <button
        className="text-green-800 text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <nav className="fixed top-0 right-0 w-64 h-full bg-green-800 text-white p-8 flex flex-col space-y-6 transition-all">
      <button
        className="self-end text-3xl mb-6"
        onClick={() => setIsOpen(false)}
      >
        &times;
      </button>
      <Link to="/reservasi" onClick={() => setIsOpen(false)}>Reservasi</Link>
      <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
      <Link to="/menu" onClick={() => setIsOpen(false)}>Our Menu</Link>
      <Link to="/events" onClick={() => setIsOpen(false)}>Event & Partnership</Link>
      <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
    </nav>
  )}
</header>

  );
}
