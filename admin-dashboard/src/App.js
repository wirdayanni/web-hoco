import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MenuManagement from "./features/menu/MenuManagement";
import EventManagement from "./features/event/EventManagement";
import AdminLayout from "./layouts/AdminLayout";
import Reservation from "./pages/Reservations";

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
          <Route path="reservations" element={<Reservation />} />
          <Route path="event" element={<EventManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}