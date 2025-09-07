import NavbarAdmin from "../components/NavbarAdmin";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <NavbarAdmin />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-800">Selamat Datang di Dashboard</h2>
          <p className="mt-4 text-gray-700">Pilih menu di sidebar untuk mulai mengelola.</p>
        </div>
      </main>
    </div>
  );
}