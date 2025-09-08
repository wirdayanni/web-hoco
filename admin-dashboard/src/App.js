// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import MenuManagement from "./pages/MenuManagement";
// import ReservasiManagement from "./pages/ReservasiManagement";
// import EventManagement from "./pages/EventManagement";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/menu" element={<MenuManagement />} />
//         <Route path="/reservasi" element={<ReservasiManagement />} />
//         <Route path="/event" element={<EventManagement />} />
//       </Routes>
//     </Router>
//   );
// }

import MenuList from "./MenuList";

function App() {
  return (
    <div className="App">
      <h1>HOCO Admin Dashboard</h1>
      <MenuList />
    </div>
  );
}

export default App;
