import React from "react";

export default function UserSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-[calc(100vh-120px)]">
      <div className="flex flex-col items-center py-8 border-b">
        <div className="avatar mb-2">
          <div className="w-16 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-cyan-500">
            M
          </div>
        </div>
        <div className="text-cyan-500 text-xl font-bold">Makki</div>
        <button className="btn btn-xs btn-outline btn-info mt-2">
          Profile
        </button>
      </div>
      <ul className="menu p-4 text-base">
        <li>
          <a className="font-semibold text-cyan-500">
            <span className="mr-2">🏠</span> Dashboard
          </a>
        </li>
        <li>
          <a>
            <span className="mr-2">🛠️</span> Services
          </a>
        </li>
        <li>
          <a>
            <span className="mr-2">💸</span> Transactions
          </a>
        </li>
        <li>
          <a>
            <span className="mr-2">⭐</span> My Favorites
          </a>
        </li>
      </ul>
    </aside>
  );
}
