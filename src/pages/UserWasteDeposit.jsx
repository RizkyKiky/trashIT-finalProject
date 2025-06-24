// // Import React dan hooks useState, useEffect
// import React, { useState, useEffect } from "react";
// // Import axios untuk HTTP request
// import axios from "axios";
// // Import useNavigate untuk pindah halaman
// import { useNavigate } from "react-router-dom";
// // Import Sidebar
// import UserSidebar from "../components/UserSidebar"; // Ubah path jika perlu

// // Komponen utama untuk input setoran sampah
// export default function UserWasteDeposit() {
//   const [form, setForm] = useState({
//     categoryId: "",
//     weight: "",
//   });

//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Token tidak ditemukan. Silakan login ulang.");
//       return;
//     }

//     axios
//       .get("http://localhost:8091/api/categories", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         setCategories(res.data);
//       })
//       .catch((err) => {
//         console.error("Kategori gagal:", err);
//         if (err.response && err.response.status == 403) {
//           alert("Akses ditolak. Silakan login ulang.");
//         } else {
//           alert("Gagal mengambil data kategori.");
//         }
//       });
//   }, []);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Token tidak ditemukan.");
//       return;
//     }

//     const payload = {
//       categoryId: parseInt(form.categoryId),
//       weight: parseFloat(form.weight),
//     };

//     axios
//       .post("http://localhost:8091/api/trashDeposit", payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         alert("Setoran berhasil dikirim.");
//         setForm({ categoryId: "", weight: "" });
//         navigate("/user/history");
//       })
//       .catch((err) => {
//         console.error("Gagal menyimpan setoran:", err);
//         alert("Gagal menyimpan setoran. Pastikan Anda sudah login.");
//       });
//   }

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <UserSidebar />

//       {/* Form Setoran */}
//       <section className="flex-1 bg-green-50 flex items-center justify-center p-4">
//         <div className="card w-full max-w-md bg-white shadow-lg border border-green-200">
//           <div className="card-body">
//             <h2 className="card-title text-green-700 text-2xl font-bold mb-4">
//               Input Setoran Sampah
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Dropdown Kategori */}
//               <div>
//                 <label className="label">
//                   <span className="label-text text-green-700 font-medium">
//                     Kategori Sampah
//                   </span>
//                 </label>
//                 <select
//                   name="categoryId"
//                   value={form.categoryId}
//                   onChange={handleChange}
//                   className="select select-success w-full"
//                   required
//                 >
//                   <option value="" disabled>
//                     Pilih kategori
//                   </option>
//                   {categories.map((cat) => (
//                     <option key={cat.id} value={cat.id}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Input berat sampah */}
//               <div>
//                 <label className="label">
//                   <span className="label-text text-green-700 font-medium">
//                     Berat (Kg)
//                   </span>
//                 </label>
//                 <input
//                   type="number"
//                   name="weight"
//                   value={form.weight}
//                   onChange={handleChange}
//                   className="input input-bordered input-success w-full"
//                   placeholder="Contoh: 1.5"
//                   step="0.1"
//                   min="0.1"
//                   required
//                 />
//               </div>

//               {/* Tombol submit */}
//               <button
//                 type="submit"
//                 className="btn btn-success w-full font-semibold"
//               >
//                 Simpan Setoran
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";

export default function UserWasteDeposit() {
  const [form, setForm] = useState({ categoryId: "", weight: "" });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return redirectToLogin();

    fetchCategories(token);
  }, []);

  function redirectToLogin() {
    setError("Token tidak valid atau tidak ditemukan. Silakan login ulang.");
    return navigate("/signin");
  }

  async function fetchCategories(token) {
    try {
      const res = await axios.get("http://localhost:8091/api/categories", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!Array.isArray(res.data)) {
        throw new Error("Format data kategori tidak valid.");
      }
      setCategories(res.data);
      setError("");
    } catch (err) {
      console.error("Kategori gagal:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Gagal mengambil kategori."
      );
      // Jika 403 atau 401, token mungkin tidak valid
      if (err.response?.status === 403 || err.response?.status === 401) {
        redirectToLogin();
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return redirectToLogin();

    const weightNum = parseFloat(form.weight);
    if (weightNum <= 0 || !form.categoryId) {
      return setError("Pastikan kategori dan berat diisi dengan benar.");
    }

    try {
      await axios.post(
        "http://localhost:8091/api/trashDeposit",
        { categoryId: +form.categoryId, weight: weightNum },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccessMessage("Setoran berhasil dikirim!");
      setForm({ categoryId: "", weight: "" });
      setError("");
      setTimeout(() => navigate("/user/history"), 1500);
    } catch (err) {
      console.error("Gagal menyimpan setoran:", err);
      setError(err.response?.data?.message || "Gagal menyimpan setoran.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="min-h-screen flex">
      <UserSidebar />

      <section className="flex-1 bg-green-50 flex items-center justify-center p-4">
        <div className="card w-full max-w-md bg-white shadow-lg border border-green-200">
          <div className="card-body">
            <h2 className="card-title text-green-700 text-2xl font-bold mb-4">
              Input Setoran Sampah
            </h2>

            {error && (
              <div className="alert alert-error shadow-sm mb-4">
                <span>{error}</span>
              </div>
            )}
            {successMessage && (
              <div className="alert alert-success shadow-sm mb-4">
                <span>{successMessage}</span>
              </div>
            )}

            {loading ? (
              <div className="text-center text-gray-500">
                Memuat kategori...
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text text-green-700 font-medium">
                      Kategori Sampah
                    </span>
                  </label>
                  <select
                    name="categoryId"
                    value={form.categoryId}
                    onChange={handleChange}
                    className="select select-success w-full"
                    required
                  >
                    <option value="" disabled>
                      Pilih kategori
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-green-700 font-medium">
                      Berat (Kg)
                    </span>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    className="input input-bordered input-success w-full"
                    placeholder="Contoh: 1.5"
                    step="0.1"
                    min="0.1"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-full font-semibold"
                >
                  Simpan Setoran
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
