import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import MenuForm from "./MenuForm";

const MenuManagement = () => {
  const [menus, setMenus] = useState([]);
  const [editingMenu, setEditingMenu] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Ambil semua menu
  const fetchMenus = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menus");
      setMenus(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  // Tambah/Edit Menu
  const handleSubmit = async (formData) => {
    try {
      if (editingMenu) {
        await axios.put(
          `http://localhost:5000/api/menus/${editingMenu.id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:5000/api/menus", formData);
      }
      fetchMenus();
      setShowForm(false);
      setEditingMenu(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Hapus Menu
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/menus/${id}`);
      fetchMenus();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Manajemen Menu</h1>
              <button
                onClick={() => {
                  setShowForm(!showForm);
                  setEditingMenu(null);
                }}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                {showForm ? "Tutup Form" : "Tambah Menu"}
              </button>
            </div>

            {showForm && (
              <MenuForm
                onSubmit={handleSubmit}
                initialData={editingMenu}
                onCancel={() => {
                  setShowForm(false);
                  setEditingMenu(null);
                }}
              />
            )}

            <MenuList
              menus={menus}
              onEdit={(menu) => {
                setEditingMenu(menu);
                setShowForm(true);
              }}
              onDelete={handleDelete}
            />
          </div>
    </div>
  );
};

export default MenuManagement;