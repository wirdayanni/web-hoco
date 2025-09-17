import { useState, useEffect } from "react";
import axios from "axios";

export default function EventForm({ eventData, onCancel, onSaved }) {
  const [title, setTitle] = useState(eventData?.title || "");
  const [shortDescription, setShortDescription] = useState(eventData?.shortDescription || "");
  const [description, setDescription] = useState(eventData?.description || "");
  const [date, setDate] = useState(eventData ? eventData.date.split("T")[0] : "");

  // Lokasi
  const [locationId, setLocationId] = useState(
    eventData?.location ? eventData.location.id : eventData?.customLocation ? "custom" : ""
  );
  const [customLocation, setCustomLocation] = useState(eventData?.customLocation || "");

  // File / Gambar
  const [files, setFiles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [existingImages, setExistingImages] = useState(eventData?.images || []);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/locations");
      setLocations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("description", description);
    formData.append("date", date);

    if (locationId === "custom") {
      formData.append("locationId", "custom"); // penting agar backend tahu
      formData.append("customLocation", customLocation);
    } else {
      formData.append("locationId", locationId);
    }

    // Gambar baru
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    // Gambar lama
    const existingIds = existingImages.map((img) => img.id);
    formData.append("existingImageIds", JSON.stringify(existingIds));

    try {
      if (eventData) {
        await axios.put(`http://localhost:5000/api/events/${eventData.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("http://localhost:5000/api/events", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      onSaved();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan event");
    }
  };

  const handleFilesChange = (e) => {
    setFiles(e.target.files);
  };

  const handleRemoveExistingImage = (id) => {
    setExistingImages(existingImages.filter((img) => img.id !== id));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded bg-white shadow"
    >
      <h2 className="text-lg font-bold">
        {eventData ? "Edit Event" : "Tambah Event"}
      </h2>

      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="Short Description"
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        placeholder="Deskripsi lengkap"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
        rows="5"
      ></textarea>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      {/* Lokasi dropdown */}
      <select
        value={locationId}
        onChange={(e) => setLocationId(e.target.value)}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Pilih Lokasi</option>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
        <option value="custom">+ Tambah Lokasi Baru</option>
      </select>

      {/* Input lokasi custom */}
      {locationId === "custom" && (
        <input
          type="text"
          placeholder="Masukkan lokasi baru"
          value={customLocation}
          onChange={(e) => setCustomLocation(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      )}

      {/* Upload gambar baru */}
      <input
        type="file"
        multiple
        onChange={handleFilesChange}
        className="w-full"
      />

      {/* Preview gambar existing */}
      {existingImages.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {existingImages.map((img) => (
            <div key={img.id} className="relative">
              <img
                src={`http://localhost:5000${img.url}`}
                alt=""
                className="h-20 w-20 object-cover border rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveExistingImage(img.id)}
                className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
