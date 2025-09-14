import { useState } from "react";
import axios from "axios";

export default function ReservationForm({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    branch: "",
    type: "table",
    room: "",
    date: "",
    time: "",
    people: 1,
    eventName: "",
    notes: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/reservations", form);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to create reservation", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Tambah Reservasi</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="branch"
            placeholder="Cabang"
            value={form.branch}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="table">Meja</option>
            <option value="event">Acara</option>
          </select>
          <input
            type="text"
            name="room"
            placeholder="Ruangan"
            value={form.room}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            name="people"
            value={form.people}
            onChange={handleChange}
            min="1"
            max="100"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="eventName"
            placeholder="Nama Acara (jika event)"
            value={form.eventName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="notes"
            placeholder="Catatan tambahan"
            value={form.notes}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="name"
            placeholder="Nama Pemesan"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Nomor WhatsApp"
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}