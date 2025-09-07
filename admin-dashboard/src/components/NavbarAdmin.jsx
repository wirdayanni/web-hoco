export default function NavbarAdmin() {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard Admin</h1>
      <button className="bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
    </header>
  );
}