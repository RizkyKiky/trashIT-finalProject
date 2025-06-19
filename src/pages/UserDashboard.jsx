import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "../components/DashboardCard";
import UserSidebar from "../components/UserSidebar";
import { AuthContext } from "../context/AuthContext";

export default function UserDashboard() {
  const { user } = useContext(AuthContext); // Ambil user dari Context
  console.log("User object form context:", user);
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    axios
      .get("http://localhost:8091/api/trashDeposit/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        const transactions = data.transactions || [];

        let weightSum = 0;
        let pointSum = 0;

        transactions.forEach((item) => {
          weightSum += item.weight;
          pointSum += item.transactionPoint;
        });

        setTotalWeight(weightSum);
        setTotalPoint(pointSum);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
      });
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-green-100 border-r border-green-300">
        <UserSidebar />
      </div>

      {/* Konten Dashboard */}
      <div className="flex-1 bg-green-50">
        {/* Header */}
        <div className="bg-green-500 py-8 px-4 flex flex-col items-center shadow-md">
          <h1 className="text-4xl font-bold text-white mb-1 tracking-widest">
            TRASH-IT
          </h1>
          <h2 className="text-2xl font-semibold text-white">User Dashboard</h2>
        </div>

        {/* Selamat Datang */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-green-700">
            Selamat Datang, {user?.data?.username || "User"}!
          </h1>
          <p className="text-gray-600 mt-1">
            Ini adalah Dashboard kamu. Silakan pilih menu di sidebar.
          </p>
        </div>

        {/* Isi Dashboard */}
        <div className="max-w-5xl mx-auto mt-4 px-4">
          <h3 className="text-xl font-semibold text-green-700 mb-6 border-b pb-2">
            Ringkasan Data Anda
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard
              title="Total Setoran Sampah"
              value={totalWeight.toFixed(2)}
              unit="Kilogram"
              icon="🗑️"
            />
            <DashboardCard
              title="Poin Diterima"
              value={totalPoint.toFixed(0)}
              unit="Poin"
              icon="🎁"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
