// src/features/reservations/ReservationTable.js
export default function ReservationTable({ reservations = [], onDelete, onSelect, onEdit }) {
  // Helper: buat Date object yang menggabungkan date + time
  const parseReservationDateTime = (r) => {
    // r.date bisa berupa string ISO atau objek Date
    const rawDate = r?.date;
    let dateObj = null;

    if (!rawDate) {
      return new Date(0); // fallback very old
    }

    // Jika sudah instance Date, gunakan langsung
    if (rawDate instanceof Date) {
      dateObj = new Date(rawDate.getTime());
    } else {
      // coba parse string ke Date
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        dateObj = d;
      } else {
        // fallback: jika format unusual, return epoch
        return new Date(0);
      }
    }

    // Ambil jam dan menit dari r.time (format "HH:MM")
    const [hh, mm] = (r.time || "00:00").split(":").map((n) => parseInt(n, 10) || 0);

    // Buat tanggal baru di timezone lokal dengan tanggal dari dateObj, dan jam/mm dari r.time
    return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), hh, mm, 0, 0);
  };

  // Urutkan reservations berdasarkan datetime (terdekat/terawal pertama)
  const sortedReservations = [...reservations].sort((a, b) => {
    const dtA = parseReservationDateTime(a).getTime();
    const dtB = parseReservationDateTime(b).getTime();
    return dtA - dtB;
  });

  // Helper menampilkan jenis (mendukung 'table'/'meja' dan 'event'/'acara')
  const formatType = (t) => {
    if (!t) return "-";
    const lower = String(t).toLowerCase();
    if (lower === "table" || lower === "meja") return "Meja";
    if (lower === "event" || lower === "acara") return "Acara";
    return t;
  };

  // Helper status badge
  const statusBadge = (status) => {
    const s = status || "Menunggu";
    if (s === "Menunggu") return "px-2 py-1 rounded text-sm font-medium bg-yellow-100 text-yellow-700";
    if (s === "Dikonfirmasi") return "px-2 py-1 rounded text-sm font-medium bg-green-100 text-green-700";
    if (s === "Ditolak") return "px-2 py-1 rounded text-sm font-medium bg-red-100 text-red-700";
    if (s === "Selesai") return "px-2 py-1 rounded text-sm font-medium bg-blue-100 text-blue-700";
    return "px-2 py-1 rounded text-sm font-medium bg-gray-100 text-gray-600";
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Kode</th>
            <th className="px-4 py-2 border">Cabang</th>
            <th className="px-4 py-2 border">Tanggal</th>
            <th className="px-4 py-2 border">Waktu</th>
            <th className="px-4 py-2 border">Jenis</th>
            <th className="px-4 py-2 border">Ruangan</th>
            <th className="px-4 py-2 border">PIC</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {sortedReservations.map((res, index) => {
            const combinedDt = parseReservationDateTime(res);
            return (
              <tr key={res.id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{res.code || "-"}</td>
                <td className="px-4 py-2 border">{res.branch}</td>
                <td className="px-4 py-2 border">
                  {isNaN(combinedDt.getTime())
                    ? "-"
                    : combinedDt.toLocaleDateString("id-ID")}
                </td>
                <td className="px-4 py-2 border">{res.time || "-"}</td>
                <td className="px-4 py-2 border">{formatType(res.type)}</td>
                <td className="px-4 py-2 border">{res.room}</td>
                <td className="px-4 py-2 border">{res.name}</td>
                <td className="px-4 py-2 border">
                  <span className={statusBadge(res.status)}>{res.status || "Menunggu"}</span>
                </td>
                <td className="px-4 py-2 border space-x-2">
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => onSelect(res)}
                  >
                    Detail
                  </button>
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={() => onEdit(res)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => onDelete(res.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
          {sortedReservations.length === 0 && (
            <tr>
              <td className="px-4 py-2 border text-center" colSpan="10">
                Tidak ada data reservasi
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}