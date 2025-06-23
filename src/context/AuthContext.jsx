import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Set axios Authorization header jika token ada di localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);

  // Cek user saat mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setLoadingAuth(false);
      return;
    }
    axios
      .get("http://localhost:8091/api/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
      })
      .finally(() => setLoadingAuth(false));
  }, []);

  // Redirect ke /signin hanya jika mengakses halaman user/admin tanpa login
  useEffect(() => {
    const protectedPaths = [
      "/user",
      "/user/profile",
      "/user/waste-deposit",
      "/user/history",
      "/admin",
    ];
    const isProtected = protectedPaths.some((path) =>
      location.pathname.startsWith(path)
    );
    if (!loadingAuth && !user && isProtected) {
      navigate("/signin", { replace: true });
    }
  }, [loadingAuth, user, location.pathname, navigate]);

  // Fungsi logout global
  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loadingAuth, logout }}>
      {loadingAuth ? null : children}
    </AuthContext.Provider>
  );
}
