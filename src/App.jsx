import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import UserWasteDeposit from "./pages/UserWasteDeposit";
import UserHistory from "./pages/UserHistory";

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ["/admindashboard"];
  return (
    <AuthProvider>
      <Routes>
        {/* Halaman utama - anchor seperti #about akan tetap berada di / */}
        <Route path="/" element={<HomePage />} />

        {/* Auth */}
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin & User */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/waste-deposit" element={<UserWasteDeposit />} />
        <Route path="/user/history" element={<UserHistory />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
