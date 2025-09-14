import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-2 py-1 rounded transition ${
      isActive ? "bg-green-700 text-white font-semibold" : "hover:text-green-300"
    }`;

  return (
    <aside className="w-64 h-screen bg-green-900 text-white p-6 space-y-6">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink to="/admin/dashboard" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/menu" className={linkClass}>
          Manajemen Menu
        </NavLink>
        <NavLink to="/admin/reservations" className={linkClass}>
          Manajemen Reservasi
        </NavLink>
        <NavLink to="/admin/event" className={linkClass}>
          Manajemen Event
        </NavLink>
      </nav>
    </aside>
  );
}