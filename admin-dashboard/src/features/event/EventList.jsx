import { useEffect, useState } from "react";
import axios from "axios";

export default function EventList({ onAdd, onEdit }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      // urutkan descending berdasarkan tanggal
      const sorted = res.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setEvents(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Hapus event ini?")) {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    }
  };

  // Helper: format tanggal DD-MM-YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Helper: ambil nama hari
  const getDayName = (dateString) => {
    const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Daftar Event</h2>
        <button
          onClick={onAdd}
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          + Tambah Event
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-green-900 text-white">
          <tr>
            <th className="p-2 border">No</th>
            <th className="p-2 border">Judul</th>
            <th className="p-2 border">Hari</th>
            <th className="p-2 border">Tanggal</th>
            <th className="p-2 border">Lokasi</th>
            <th className="p-2 border">Cover</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{event.title}</td>
              <td className="p-2 border">{getDayName(event.date)}</td>
              <td className="p-2 border">{formatDate(event.date)}</td>
              <td className="p-2 border">
                {event.customLocation || event.location?.name || "-"}
              </td>
              <td className="p-2 border">
                {event.images[0] && (
                  <img
                    src={`http://localhost:5000${event.images[0].url}`}
                    alt={event.title}
                    className="h-12 w-20 object-cover"
                  />
                )}
              </td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => onEdit(event)}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
