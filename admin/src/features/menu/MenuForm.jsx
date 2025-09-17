import React, { useState, useEffect } from "react";

const MenuForm = ({ onSubmit, initialData, onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setImage(null); // gambar baru direset
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) formData.append("image", image);
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Menu" : "Tambah Menu"}
      </h2>

      <input
        type="text"
        placeholder="Nama Menu"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        required
      />

      <textarea
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
};

export default MenuForm;