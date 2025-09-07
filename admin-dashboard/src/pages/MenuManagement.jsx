export default function MenuManagement() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manajemen Menu</h2>
      <button className="bg-green-800 text-white px-4 py-2 rounded-md mb-4">
        Tambah Menu
      </button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Harga</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Sanger Durian</td>
            <td className="p-2 border">Rp 25.000</td>
            <td className="p-2 border">
              <button className="text-blue-600 mr-2">Edit</button>
              <button className="text-red-600">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}