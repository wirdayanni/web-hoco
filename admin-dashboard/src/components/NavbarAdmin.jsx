import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function NavbarAdmin() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-green-800 text-white flex justify-between items-center px-6 py-3 shadow-lg">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold tracking-wide">
            HOCO Admin
          </h1>
        </div>

        {/* Right: User & Logout */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-2xl text-green-300" />
            <span className="hidden sm:inline text-sm font-medium">
              Admin
            </span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm font-medium transition"
          >
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Konfirmasi Logout
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Apakah Anda yakin ingin logout?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
