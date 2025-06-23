import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const hiddenPaths = [
    "/admin",
    "/user",
    "/user/profile",
    "/user/waste-deposit",
    "/user/history",
  ];

  const hideHeader = hiddenPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  // Fungsi logout yang juga redirect ke homepage
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (hideHeader) return null;

  return (
    <div className="navbar fixed top-0 z-50 bg-[#c7f9cc] shadow-md">
      <div className="navbar-start">
        {/* Tambahkan menu mobile jika perlu */}
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-green-700"
        >
          Trash-It
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Tentang</a>
          </li>
          <li>
            <a href="#service">Layanan</a>
          </li>
          <li>
            <a href="#contact">Kontak</a>
          </li>
          {!user ? (
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          ) : (
            <li tabIndex={0} className="dropdown dropdown-end">
              <div className="btn btn-ghost flex items-center gap-2">
                <div className="avatar placeholder">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {user?.username?.charAt(0).toUpperCase() || "U"}
                  </div>
                </div>
                <span>{user.username}</span>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                <li>
                  <Link to="/user/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
