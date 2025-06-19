// Import library React dan hook useState serta useEffect
import React, { useState, useEffect } from "react";
// Import axios untuk melakukan request HTTP
import axios from "axios";
// Import Sidebar
import UserSidebar from "../components/UserSidebar"; // Pastikan path ini sesuai

// Komponen utama untuk menampilkan riwayat setoran sampah
export default function UserHistory() {
  const [transactions, setTransactions] = useState([]);
  const [totalPoint, setTotalPoint] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8091/api/trashDeposit/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTransactions(res.data.transactions);
        setTotalPoint(res.data.totalPointAccepted);
      })
      .catch((err) => {
        console.error("Gagal mengambil data riwayat:", err);
        alert("Gagal mengambil data riwayat.");
      });
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <UserSidebar />

      {/* Konten utama */}
      <section className="flex-1 bg-green-50 flex items-center justify-center p-4">
        <div className="card w-full max-w-3xl bg-white shadow-lg border border-green-200">
          <div className="card-body">
            <h2 className="card-title text-green-700 text-2xl font-bold mb-4">
              Riwayat Setoran Sampah
            </h2>

            <p className="mb-4 text-green-800 font-medium">
              Total Poin Diterima: {totalPoint}
            </p>

            {transactions.length == 0 ? (
              <p className="text-center text-gray-500">
                Belum ada riwayat setoran.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="text-green-700">
                      <th>#</th>
                      <th>Kategori</th>
                      <th>Berat (Kg)</th>
                      <th>Poin/Kg</th>
                      <th>Total Poin</th>
                      <th>Status</th>
                      <th>Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((trx, index) => (
                      <tr key={trx.id}>
                        <td>{index + 1}</td>
                        <td>{trx.categoryName}</td>
                        <td>{trx.weight}</td>
                        <td>{trx.pointPerKg}</td>
                        <td>{trx.transactionPoint}</td>
                        <td>{trx.status || "Menunggu"}</td>
                        <td>
                          {new Date(trx.createdAt).toLocaleString("id-ID")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
