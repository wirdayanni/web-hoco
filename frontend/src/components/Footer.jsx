import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/menu" className="hover:underline">Menu</a>
            </li>
            <li>
              <a href="/reservation" className="hover:underline">Reservation</a>
            </li>
            <li>
              <a href="/events" className="hover:underline">Events</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo + Outlet Info */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="/logo-white.png"
            alt="HOCO Coffee"
            className="h-14 mx-auto mb-4"
          />
          <p className="text-sm mb-1">Lampineung | Lambhuk | Lamteumen</p>
          <p className="text-sm mb-1">Everyday 07:00 AM – 23:10 PM</p>
          <p className="text-sm">We serve Breakfast | Lunch | Dinner</p>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col justify-center md:items-end text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-5">
            <a
              href="https://instagram.com/hococoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-gray-300 transition" />
            </a>
            <a
              href="https://tiktok.com/@hococoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-2xl hover:text-gray-300 transition" />
            </a>
            <a
              href="https://facebook.com/hococoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-gray-300 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      {/* <div className="mt-8 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} HOCO Coffee. All Rights Reserved.
      </div> */}
    </footer>
  );
}
