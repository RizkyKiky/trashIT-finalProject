import React, { useState } from "react";
import axios from "axios";
import UserSidebar from "../components/UserSidebar"; // Pastikan path-nya sesuai

export default function UserProfile() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .put(
        "http://localhost:8091/api/user",
        {
          name: form.name,
          phone: form.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert("Profil berhasil diperbarui!");
      })
      .catch((error) => {
        console.error("Gagal update profil:", error);
        alert("Gagal mengupdate profil.");
      });
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-100 via-lime-100 to-green-200 px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl min-h-[600px]">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 h-full">
          <div className="h-full bg-white border border-green-300 shadow-xl rounded-xl p-4 flex flex-col justify-between">
            <UserSidebar />
          </div>
        </div>

        {/* Form Profile */}
        <div className="w-full md:w-3/4 h-full">
          <div className="h-full bg-white border border-green-300 shadow-xl rounded-xl p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
              Profil Pengguna
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
              {/* Avatar */}
              <div className="form-control items-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl text-green-400 border-2 border-green-200">
                  👤
                </div>
                <span className="text-sm text-gray-500 mt-2">
                  Foto hanya sebagai hiasan
                </span>
              </div>

              {/* Nama Lengkap */}
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text text-green-700 font-medium">
                    Nama Lengkap
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama lengkap"
                  className="input input-bordered input-success w-full"
                />
              </div>

              {/* Username */}
              <div className="form-control">
                <label htmlFor="username" className="label">
                  <span className="label-text text-green-700 font-medium">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  disabled
                  className="input input-bordered w-full text-gray-400"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text text-green-700 font-medium">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled
                  className="input input-bordered w-full text-gray-400"
                />
              </div>

              {/* Nomor HP */}
              <div className="form-control">
                <label htmlFor="phone" className="label">
                  <span className="label-text text-green-700 font-medium">
                    Nomor HP
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nomor HP"
                  className="input input-bordered input-success w-full"
                />
              </div>

              {/* Tombol Simpan */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn btn-success w-full font-semibold"
                >
                  Simpan Profil
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
