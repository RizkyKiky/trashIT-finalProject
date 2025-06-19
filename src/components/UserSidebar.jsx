import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // <-- Tambahkan ini

export default function UserSidebar() {
  const { user } = useContext(AuthContext); // <-- Ambil user dari context
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  const userName = user?.data?.username || "User";

  // fallback jika user belum tersedia

  return (
    <aside className="w-64 bg-white border-r border-green-200 min-h-screen shadow-md">
      <div className="flex flex-col items-center py-8 border-b border-green-100">
        <div className="avatar mb-2">
          <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-green-600">
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="text-green-700 text-lg font-semibold">{userName}</div>
        <Link
          to="/user/profile"
          className="btn btn-xs btn-outline btn-success mt-2"
        >
          Lihat Profil
        </Link>
      </div>

      <ul className="menu p-4 text-base text-green-800 space-y-2">
        <li>
          <Link
            to="/user"
            className={`flex items-center px-2 py-2 rounded ${
              isActive("/user")
                ? "bg-green-100 text-green-800 font-semibold"
                : "hover:text-green-600"
            }`}
          >
            <span className="mr-2 text-xl">🏠</span> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/user/waste-deposit"
            className={`flex items-center px-2 py-2 rounded ${
              isActive("/user/waste-deposit")
                ? "bg-green-100 text-green-800 font-semibold"
                : "hover:text-green-600"
            }`}
          >
            <span className="mr-2 text-xl">🗑️</span> Setor Sampah
          </Link>
        </li>
        <li>
          <Link
            to="/user/history"
            className={`flex items-center px-2 py-2 rounded ${
              isActive("/user/history")
                ? "bg-green-100 text-green-800 font-semibold"
                : "hover:text-green-600"
            }`}
          >
            <span className="mr-2 text-xl">📜</span> Riwayat
          </Link>
        </li>
      </ul>
    </aside>
  );
}
