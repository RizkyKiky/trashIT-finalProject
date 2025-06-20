import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ['/admindashboard'];
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
