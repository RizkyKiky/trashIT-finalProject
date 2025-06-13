import React from "react";

export default function UserDashboard() {
  return (
    <div>
      <div className="min-h-screen bg-cyan-50">
        {/* Header */}
        <div className="bg-cyan-400 py-8 px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mb-2">TRASHBANK</h1>
          <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        </div>
        {/* Isi Dashboard */}
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Dashboard
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard
              title="Total Trash Deposited"
              value={0}
              unit="Kilograms"
            />
            <DashboardCard title="Rewarded Trash" value={0} unit="Kilograms" />
            <DashboardCard title="Recycled Trash" value={0} unit="Kilograms" />
            <DashboardCard title="My Favorite Trash" value={0} unit="Items" />
          </div>
        </div>
      </div>
    </div>
  );
}
