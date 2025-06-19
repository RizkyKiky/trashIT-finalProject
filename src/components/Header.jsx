// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function Header() {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <div className="navbar shadow-sm fixed top-0 left-0 w-full z-50 !bg-[#c7f9cc]">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/service">Services</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             {!user ? (
//               <li>
//                 <Link to="/signin">Sign In</Link>
//               </li>
//             ) : (
//               <li>
//                 <button onClick={logout}>Logout</button>
//               </li>
//             )}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-xl">
//           Trash-It
//         </Link>
//       </div>

//       <div className="navbar-end hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/service">Services</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           {!user ? (
//             <li>
//               <Link to="/signin">Sign In</Link>
//             </li>
//           ) : (
//             <li className="dropdown dropdown-end">
//               <div tabIndex={0} role="button" className="btn btn-ghost">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
//                     {user.name.charAt(0).toUpperCase()}
//                   </div>
//                   <span>{user.name}</span>
//                 </div>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
//               >
//                 <li>
//                   <Link to="/profile">Profile</Link>
//                 </li>
//                 <li>
//                   <button onClick={logout}>Logout</button>
//                 </li>
//               </ul>
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  // Daftar path yang boleh menampilkan Header
  const visiblePaths = ["/", "/about", "/service", "/contact", "/signin"];

  // Jika current path tidak termasuk daftar, jangan render Header
  if (!visiblePaths.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="navbar shadow-sm fixed top-0 left-0 w-full z-50 !bg-[#c7f9cc]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {!user ? (
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            ) : (
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Trash-It
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {!user ? (
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          ) : (
            <li className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.name}</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
