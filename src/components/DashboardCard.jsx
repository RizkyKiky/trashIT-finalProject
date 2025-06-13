import React from "react";

// Komponen Card Dashboard
function DashboardCard(props) {
  // props: title (judul), value (angka), unit (satuan)
  return (
    <div className="card bg-white shadow-md flex flex-row items-center p-4 mb-4">
      {/* Icon lingkaran */}
      <div className="bg-cyan-400 rounded-full p-3 mr-4">
        {/* Icon tempat sampah sederhana */}
        <span role="img" aria-label="trash" className="text-white text-2xl">
          🗑️
        </span>
      </div>
      {/* Isi card */}
      <div>
        <div className="font-bold text-lg">{props.title}</div>
        <div className="text-gray-500">
          ({props.value}) {props.unit}
        </div>
      </div>
    </div>
  );
}
