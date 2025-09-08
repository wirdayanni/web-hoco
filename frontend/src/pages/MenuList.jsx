import { useEffect, useState } from "react";

export default function MenuList() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/menus");
        const data = await res.json();
        setMenus(data);
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
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Menu Populer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {menu.image && (
              <img
                src={`http://localhost:5000${menu.image}`}
                alt={menu.name}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900">
                {menu.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{menu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}