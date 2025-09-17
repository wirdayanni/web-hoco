import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUtensils,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";

export default function SidebarLayout({ children }) {
  const [open, setOpen] = useState(true);

  const linkClass = ({ isActive }) =>
    `flex items-center ${
      open ? "gap-3 px-4 justify-start" : "justify-center"
    } 
     py-4 rounded-lg transition text-xl
     ${
       isActive
         ? "bg-green-700 text-white font-semibold"
         : "text-gray-200 hover:bg-green-800 hover:text-white"
     }`;

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-green-900 text-white shadow-lg transition-all duration-300 z-50 ${
          open ? "w-56" : "w-16"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-green-800">
          <h2
            className={`text-lg font-bold whitespace-nowrap transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            Admin Panel
          </h2>
          <button
            onClick={() => setOpen(!open)}
            className="text-xl hover:text-green-300"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 mt-6 gap-1">
          <NavLink to="/admin/dashboard" className={linkClass}>
            <FaHome />
            {open && <span className="text-base">Dashboard</span>}
          </NavLink>
          <NavLink to="/admin/menu" className={linkClass}>
            <FaUtensils />
            {open && <span className="text-base">Manajemen Menu</span>}
          </NavLink>
          <NavLink to="/admin/reservations" className={linkClass}>
            <FaClipboardList />
            {open && <span className="text-base">Manajemen Reservasi</span>}
          </NavLink>
          <NavLink to="/admin/event" className={linkClass}>
            <FaCalendarAlt />
            {open && <span className="text-base">Manajemen Event</span>}
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          open ? "ml-44" : "ml-0"
        } p-6`}
      >
        {children}
      </main>
    </div>
  );
}
