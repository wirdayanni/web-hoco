import { useNavigate } from "react-router-dom";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // nanti bisa diubah pakai JWT/token
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="bg-green-800 text-white flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="text-lg font-bold">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm transition"
      >
        Logout
      </button>
    </header>
  );
}