import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MenuManagement from "./features/menu/MenuManagement";
import ReservasiManagement from "./pages/ReservasiManagement";
import EventManagement from "./pages/EventManagement";
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* Admin routes dengan layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="menu" element={<MenuManagement />} />
          <Route path="reservasi" element={<ReservasiManagement />} />
          <Route path="event" element={<EventManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}