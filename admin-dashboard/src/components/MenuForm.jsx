import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuForm = ({ selectedMenu, onSave, onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedMenu) {
      setName(selectedMenu.name);
      setDescription(selectedMenu.description);
    }
  }, [selectedMenu]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      if (selectedMenu) {
        await axios.put(
          `http://localhost:5000/api/menus/${selectedMenu.id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        await axios.post("http://localhost:5000/api/menus", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      onSave();
    } catch (error) {
      console.error("Error saving menu:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">
        {selectedMenu ? "Edit Menu" : "Tambah Menu"}
      </h2>

      <input
        type="text"
        placeholder="Nama menu"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-lg p-2"
        required
      />

      <textarea
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded-lg p-2"
        required
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {selectedMenu ? "Update" : "Simpan"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
        >
          Batal
        </button>
      </div>
    </form>
  );
};

export default MenuForm;