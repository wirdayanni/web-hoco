export default function ReservationDetailModal({ reservation, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Detail Reservasi</h2>
        <div className="space-y-2">
          <p><strong>Kode:</strong> {reservation.code}</p>
          <p><strong>Cabang:</strong> {reservation.branch}</p>
          <p><strong>Jenis:</strong> {reservation.type}</p>
          <p><strong>Ruangan:</strong> {reservation.room}</p>
          <p><strong>Tanggal:</strong> {new Date(reservation.date).toLocaleDateString("id-ID")}</p>
          <p><strong>Waktu:</strong> {reservation.time}</p>
          <p><strong>Jumlah Orang:</strong> {reservation.people}</p>
          {reservation.eventName && <p><strong>Nama Acara:</strong> {reservation.eventName}</p>}
          {reservation.notes && <p><strong>Catatan:</strong> {reservation.notes}</p>}
          <p><strong>Pemesan:</strong> {reservation.name} ({reservation.phone})</p>
          <p><strong>Status:</strong> {reservation.status}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}