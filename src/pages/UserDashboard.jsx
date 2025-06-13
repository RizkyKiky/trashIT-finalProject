import React from "react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#f6fbfc]">
      return <h1 style={{ color: "green" }}>HALAMAN USER DASHBOARD</h1>;
      {/* Header */}
      <div className="bg-[#13c8c8] py-8 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white tracking-wide mb-2">
          TRASHBANK
        </h1>
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-[calc(100vh-120px)]">
          <div className="flex flex-col items-center py-8 border-b">
            <div className="avatar mb-2">
              <div className="w-16 rounded-full bg-[#ffe066] flex items-center justify-center text-3xl font-bold text-[#13c8c8]">
                M
              </div>
            </div>
            <div className="text-[#13c8c8] text-xl font-bold">Makki</div>
            <button className="btn btn-xs btn-outline btn-info mt-2">
              Profile
            </button>
          </div>
          <ul className="menu p-4 text-base">
            <li>
              <a className="font-semibold text-[#13c8c8]">
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
        {/* Main Content */}
        <main className="flex-1 p-10">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Dashboard
            </h3>
            <hr className="border-gray-200" />
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="card bg-white shadow-md flex flex-row items-center p-6">
              <div className="bg-[#13c8c8] rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 13h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2zm0 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg">
                  Total Trash Deposited
                </div>
                <div className="text-gray-500">(0) Kilograms</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-white shadow-md flex flex-row items-center p-6">
              <div className="bg-[#13c8c8] rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg">Rewarded Trash</div>
                <div className="text-gray-500">(0) Kilograms</div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-white shadow-md flex flex-row items-center p-6">
              <div className="bg-[#13c8c8] rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-7 7-7-7"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg">Recycled Trash</div>
                <div className="text-gray-500">(0) Kilograms</div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card bg-white shadow-md flex flex-row items-center p-6">
              <div className="bg-[#13c8c8] rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg">My Favorite Trash</div>
                <div className="text-gray-500">(0) Items</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
