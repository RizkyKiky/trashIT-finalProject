// // Import library React dan hook useState serta useEffect
// import React, { useState, useEffect } from "react";
// // Import axios untuk melakukan request HTTP
// import axios from "axios";
// // Import Sidebar
// import UserSidebar from "../components/UserSidebar"; // Pastikan path ini sesuai

// // Komponen utama untuk menampilkan riwayat setoran sampah
// export default function UserHistory() {
//   const [transactions, setTransactions] = useState([]);
//   const [totalPoint, setTotalPoint] = useState(0);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     axios
//       .get("http://localhost:8091/api/trashDeposit/history", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         setTransactions(res.data.transactions);
//         setTotalPoint(res.data.totalPointAccepted);
//       })
//       .catch((err) => {
//         console.error("Gagal mengambil data riwayat:", err);
//         alert("Gagal mengambil data riwayat.");
//       });
//   }, []);

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <UserSidebar />

//       {/* Konten utama */}
//       <section className="flex-1 bg-green-50 flex items-center justify-center p-4">
//         <div className="card w-full max-w-3xl bg-white shadow-lg border border-green-200">
//           <div className="card-body">
//             <h2 className="card-title text-green-700 text-2xl font-bold mb-4">
//               Riwayat Setoran Sampah
//             </h2>

//             <p className="mb-4 text-green-800 font-medium">
//               Total Poin Diterima: {totalPoint}
//             </p>

//             {transactions.length == 0 ? (
//               <p className="text-center text-gray-500">
//                 Belum ada riwayat setoran.
//               </p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="table w-full">
//                   <thead>
//                     <tr className="text-green-700">
//                       <th>No</th>
//                       <th>Kategori</th>
//                       <th>Berat (Kg)</th>
//                       <th>Poin/Kg</th>
//                       <th>Total Poin</th>
//                       <th>Status</th>
//                       <th>Tanggal</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {transactions.map((trx, index) => (
//                       <tr key={trx.id}>
//                         <td>{index + 1}</td>
//                         <td>{trx.categoryName}</td>
//                         <td>{trx.weight}</td>
//                         <td>{trx.pointPerKg}</td>
//                         <td>{trx.transactionPoint}</td>
//                         <td>{trx.status || "Menunggu"}</td>
//                         <td>
//                           {new Date(trx.createdAt).toLocaleString("id-ID")}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserSidebar from "../components/UserSidebar";

export default function UserHistory() {
  const [transactions, setTransactions] = useState([]);
  const [totalPoint, setTotalPoint] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Token tidak ditemukan. Silakan login ulang.");
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8091/api/trashDeposit/history", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (Array.isArray(res.data.transactions)) { 
          setTransactions(res.data.transactions);
          setTotalPoint(res.data.totalPointAccepted || 0);
        } else {
          setError("Format data tidak valid.");
        }
      })
      .catch((err) => {
        console.error("Gagal mengambil data riwayat:", err);
        setError("Gagal mengambil data riwayat.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const displayedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen flex">
      <UserSidebar />

      <section className="flex-1 bg-green-50 flex items-center justify-center p-4">
        <div className="card w-full max-w-3xl bg-white shadow-lg border border-green-200">
          <div className="card-body">
            <h2 className="card-title text-green-700 text-2xl font-bold mb-4">
              Riwayat Setoran Sampah
            </h2>

            {loading ? (
              <div className="text-center text-gray-500">Memuat data...</div>
            ) : error ? (
              <div className="alert alert-error text-sm shadow-sm">
                <span>{error}</span>
              </div>
            ) : transactions.length === 0 ? (
              <p className="text-center text-gray-500">
                Belum ada riwayat setoran.
              </p>
            ) : (
              <>
                <p className="mb-4 text-green-800 font-medium">
                  Total Poin Diterima: {totalPoint}
                </p>

                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr className="text-green-700">
                        <th>No</th>
                        <th>Kategori</th>
                        <th>Berat (Kg)</th>
                        <th>Poin/Kg</th>
                        <th>Total Poin</th>
                        <th>Status</th>
                        <th>Tanggal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedTransactions.map((trx, index) => (
                        <tr key={trx.id}>
                          <td>
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
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

                {totalPages > 1 && (
                  <div className="join mt-6 flex justify-center">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        className={`join-item btn ${
                          currentPage === i + 1 ? "btn-active" : ""
                        }`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
