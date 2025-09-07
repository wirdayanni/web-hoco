import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-green-900 text-white p-6 space-y-6">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/admin/dashboard" className="hover:text-green-300">Dashboard</Link>
        <Link to="/admin/menu" className="hover:text-green-300">Manajemen Menu</Link>
        <Link to="/admin/reservasi" className="hover:text-green-300">Manajemen Reservasi</Link>
        <Link to="/admin/event" className="hover:text-green-300">Manajemen Event</Link>
      </nav>
    </aside>
  );
}