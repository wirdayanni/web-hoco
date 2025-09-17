import React from "react";

const MenuList = ({ menus, onEdit, onDelete }) => {
  return (
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
            <h2 className="text-lg font-semibold text-gray-800">{menu.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{menu.description}</p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => onEdit(menu)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(menu.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;