import { useEffect, useState } from "react";
import axios from "axios";
import ReservationTable from "../features/reservations/ReservationTable";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [editReservation, setEditReservation] = useState(null);

  // Ambil data reservasi
  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reservations");
      setReservations(res.data);
    } catch (error) {
      console.error("Gagal ambil data reservasi", error);
    }
  };

  // Hapus reservasi
  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus reservasi ini?")) {
      try {
        await axios.delete(`http://localhost:5000/api/reservations/${id}`);
        fetchReservations();
      } catch (error) {
        console.error("Gagal hapus reservasi", error);
      }
    }
  };

  // Simpan perubahan edit
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/reservations/${editReservation.id}`,
        editReservation
      );
      setEditReservation(null);
      fetchReservations();
    } catch (error) {
      console.error("Gagal update reservasi", error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Daftar Reservasi</h1>

      {/* Tabel Reservasi */}
      <ReservationTable
        reservations={reservations}
        onDelete={handleDelete}
        onSelect={setSelectedReservation}
        onEdit={setEditReservation}
      />

      {/* Modal Detail */}
      {selectedReservation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Detail Reservasi</h2>
            <p>
              <strong>Kode:</strong> {selectedReservation.code}
            </p>
            <p>
              <strong>Cabang:</strong> {selectedReservation.branch}
            </p>
            <p>
              <strong>Tanggal:</strong>{" "}
              {new Date(selectedReservation.date).toLocaleDateString("id-ID")}
            </p>
            <p>
              <strong>Waktu:</strong> {selectedReservation.time}
            </p>
            <p>
              <strong>Jenis:</strong>{" "}
              {selectedReservation.type === "table" ? "Meja" : "Acara"}
            </p>
            <p>
              <strong>Ruangan:</strong> {selectedReservation.room}
            </p>
            <p>
              <strong>PIC:</strong> {selectedReservation.name}
            </p>
            <p>
              <strong>Status:</strong> {selectedReservation.status}
            </p>

            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
              onClick={() => setSelectedReservation(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Modal Edit */}
{editReservation && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Edit Reservasi</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        
        {/* Kode Reservasi (read-only) */}
        <div>
          <label className="block text-sm font-medium">Kode Reservasi</label>
          <input
            type="text"
            className="w-full border p-2 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
            value={editReservation.code}
            disabled
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Cabang</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={editReservation.branch}
            onChange={(e) =>
              setEditReservation({
                ...editReservation,
                branch: e.target.value,
              })
            }
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium">Tanggal</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={editReservation.date.split("T")[0]}
            onChange={(e) =>
              setEditReservation({
                ...editReservation,
                date: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Waktu</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={editReservation.time}
            onChange={(e) =>
              setEditReservation({
                ...editReservation,
                time: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            className="w-full border p-2 rounded"
            value={editReservation.status}
            onChange={(e) =>
              setEditReservation({
                ...editReservation,
                status: e.target.value,
              })
            }
          >
            <option value="Menunggu">Menunggu</option>
            <option value="Dikonfirmasi">Dikonfirmasi</option>
            <option value="Ditolak">Ditolak</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => setEditReservation(null)}
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}