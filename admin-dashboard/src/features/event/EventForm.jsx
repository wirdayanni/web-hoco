import { useState, useEffect } from "react";
import axios from "axios";

export default function EventForm({ eventId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [locationId, setLocationId] = useState("");
  const [locations, setLocations] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch locations & event data
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/locations");
        setLocations(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchEvent = async () => {
      if (!eventId) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${eventId}`);
        const evt = res.data;
        setTitle(evt.title || "");
        setDescription(evt.description || "");
        setDate(evt.date ? evt.date.split("T")[0] : "");
        setLocationId(evt.locationId || "");
        setExistingImages(evt.images || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
    fetchEvent();
  }, [eventId]);

  const handleImageChange = (e) => {
    setNewImages([...newImages, ...e.target.files]);
  };

  const handleRemoveExistingImage = (imageId) => {
    setExistingImages(existingImages.filter(img => img.id !== imageId));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("locationId", locationId);

    // Tambahkan gambar baru
    newImages.forEach((img) => formData.append("images", img));

    // Kirim daftar gambar lama yang ingin dipertahankan
    formData.append(
      "existingImageIds",
      existingImages.map(img => img.id)
    );

    try {
      if (eventId) {
        await axios.put(`http://localhost:5000/api/events/${eventId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("http://localhost:5000/api/events", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      alert("Event berhasil disimpan!");
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan event.");
    }
  };

  if (loading) return <p className="p-6 text-gray-600">Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul Event"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Deskripsi Event"
        className="w-full border p-2 rounded"
        rows={6}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <select
        value={locationId}
        onChange={(e) => setLocationId(e.target.value)}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Pilih Lokasi</option>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.id}>{loc.name}</option>
        ))}
      </select>

      <div>
        <label className="block mb-1 font-medium">Gambar Baru</label>
        <input type="file" multiple onChange={handleImageChange} />
      </div>

      {existingImages.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {existingImages.map((img) => (
            <div key={img.id} className="relative w-32 h-40">
              <img
                src={`http://localhost:5000${img.url}`}
                alt="existing"
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveExistingImage(img.id)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="submit"
        className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Simpan Event
      </button>
    </form>
  );
}