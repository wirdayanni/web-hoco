import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MenuPreview() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/menus");
        const data = await res.json();
        setMenus(data.slice(0, 8)); // hanya ambil 4 menu pertama untuk preview
      } catch (error) {
        console.error("Error fetching menus:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenus();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading menus...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Menu Popular
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {menu.image && (
              <img
                src={`http://localhost:5000${menu.image}`}
                alt={menu.name}
                className="h-40 w-full object-cover"
              />
            )}
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-green-900">
                {menu.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol ke halaman menu */}
      <div className="text-center mt-10">
        <Link
          to="/menu"
          className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          See Menu
        </Link>
      </div>
    </div>
  );
}
