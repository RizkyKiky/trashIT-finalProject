// Import React dan hooks useState, useEffect
import React, { useState, useEffect } from "react";
// Import axios untuk HTTP request
import axios from "axios";
// Import useNavigate untuk pindah halaman
import { useNavigate } from "react-router-dom";
// Import Sidebar
import UserSidebar from "../components/UserSidebar"; // Ubah path jika perlu

// Komponen utama untuk input setoran sampah
export default function UserWasteDeposit() {
  const [form, setForm] = useState({
    categoryId: "",
    weight: "",
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token tidak ditemukan. Silakan login ulang.");
      return;
    }

    axios
      .get("http://localhost:8091/api/categories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Kategori gagal:", err);
        if (err.response && err.response.status == 403) {
          alert("Akses ditolak. Silakan login ulang.");
        } else {
          alert("Gagal mengambil data kategori.");
        }
      });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token tidak ditemukan.");
      return;
    }

    const payload = {
      categoryId: parseInt(form.categoryId),
      weight: parseFloat(form.weight),
    };

    axios
      .post("http://localhost:8091/api/trashDeposit", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("Setoran berhasil dikirim.");
        setForm({ categoryId: "", weight: "" });
        navigate("/user/history");
      })
      .catch((err) => {
        console.error("Gagal menyimpan setoran:", err);
        alert("Gagal menyimpan setoran. Pastikan Anda sudah login.");
      });
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <UserSidebar />

      {/* Form Setoran */}
      <section className="flex-1 bg-green-50 flex items-center justify-center p-4">
        <div className="card w-full max-w-md bg-white shadow-lg border border-green-200">
          <div className="card-body">
            <h2 className="card-title text-green-700 text-2xl font-bold mb-4">
              Input Setoran Sampah
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Dropdown Kategori */}
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

              {/* Input berat sampah */}
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

              {/* Tombol submit */}
              <button
                type="submit"
                className="btn btn-success w-full font-semibold"
              >
                Simpan Setoran
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
