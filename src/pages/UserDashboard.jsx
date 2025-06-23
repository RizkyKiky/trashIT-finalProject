import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import DashboardCard from "../components/DashboardCard";
import UserSidebar from "../components/UserSidebar";

export default function UserDashboard() {
  const { user, loadingAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [totalWeight, setTotalWeight] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loadingAuth) return;
    // Hanya redirect ke /signin jika masih di halaman user
    if ((!user || !user.data) && location.pathname.startsWith("/user")) {
      navigate("/signin");
      return;
    }

    if (!user || !user.data) return;

    const token = localStorage.getItem("token");
    const interval = setInterval(() => {
      setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 200);

    axios
      .get("http://localhost:8091/api/trashDeposit/history", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const transactions = res.data.transactions || [];
        setTotalWeight(sum(transactions, "weight"));
        setTotalPoint(sum(transactions, "transactionPoint"));
        setLoadingProgress(100);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
          clearInterval(interval);
        }, 300);
      });
  }, [loadingAuth, user, navigate, location.pathname]);

  const sum = (arr, key) =>
    arr.reduce((acc, curr) => acc + (curr[key] || 0), 0);

  const isReady = !isLoading && user?.data?.username;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-green-100 border-r border-green-300">
        <UserSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-green-50">
        {/* Header */}
        <div className="bg-green-500 py-8 px-4 flex flex-col items-center shadow-md">
          <h1 className="text-4xl font-bold text-white mb-1 tracking-widest">
            TRASH-IT
          </h1>
        </div>

        {/* Loading Screen */}
        {!isReady && (
          <div className="flex flex-col items-center justify-center h-full mt-24">
            <p className="text-lg text-green-800 font-semibold mb-4">
              Memuat Dashboard... {loadingProgress}%
            </p>
            <div className="w-64 bg-green-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-green-500 h-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Main Dashboard Content */}
        {isReady && (
          <>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-green-700">
                Selamat Datang, {user.data.username}!
              </h1>
              <p className="text-gray-600 mt-1">
                Ini adalah Dashboard kamu. Silakan pilih menu di sidebar.
              </p>
            </div>

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
          </>
        )}
      </div>
    </div>
  );
}
