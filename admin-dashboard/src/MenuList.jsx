import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuList = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/menus")
      .then(res => setMenus(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Daftar Menu</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={`http://localhost:5000${menu.image}`}
              alt={menu.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{menu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;