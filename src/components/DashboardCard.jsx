import React from "react";

// Komponen Card Dashboard
export default function DashboardCard(props) {
  const { title, value, unit, icon } = props;

  return (
    <div className="card bg-white shadow-lg flex flex-row items-center p-4 rounded-lg border border-green-200">
      {/* Icon lingkaran */}
      <div className="bg-green-500 rounded-full p-3 mr-4">
        <span role="img" aria-label="icon" className="text-white text-2xl">
          {icon || "📦"}
        </span>
      </div>

      {/* Isi card */}
      <div>
        <div className="font-bold text-lg text-green-700">{title}</div>
        <div className="text-gray-600">
          <span className="font-semibold">{value}</span> {unit}
        </div>
      </div>
    </div>
  );
}
